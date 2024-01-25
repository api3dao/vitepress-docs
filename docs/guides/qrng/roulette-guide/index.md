---
title: Building an on-chain Roulette with QRNG
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → QRNG
path: /guides/qrng/roulette-guide/index.html
outline: deep
tags:
---

<PageHeader/>

<SearchHighlight/>

<FlexStartTag/>

# {{$frontmatter.title}}

> ![Roulette](/guides/qrng/roulette-guide/src/SS2.png)

This example project demonstrates how to code a Solidity roulette game that uses
API3's QRNG for true randomness. You will use Remix IDE to code and deploy the
contract.
[Click here to check out the project's Github repo with a proper working frontend](https://github.com/Ashar2shahid/qrng-roulette).

[Click here to try out the Roulette](https://qrng-roulette.netlify.app/)

Before starting, make sure you have a proper understanding of
[Airnode](/explore/airnode/what-is-airnode.md) and
[how it works.](/reference/airnode/latest/concepts/airnode.md)

[Read more about QRNG and how it works.](/reference/qrng/)

## Introduction

In a game of roulette, players place their bets on a table with numbers and
betting options. The table corresponds to a spinning wheel with numbered
pockets, which is spun by the dealer. Once the ball comes to a stop in one of
the pockets, the dealer announces the winning number and pays out any winning
bets.

Players can bet on a variety of options, including specific numbers or groups of
numbers, such as whether the ball will land on an odd or even number or on a red
or black pocket.

The roulette that we're going to code will have the following betting options
for the users:

- The user can select either the first, second or the third dozen of the numbers
  on the board.
- The user can select either the first or the second half of the numbers on the
  board.
- The user can select either the set of all even or odd numbers on the board
- The user can select all the red or black numbers on the board.
- The user can choose any one number he wishes on the board.

If the number after the spin lands on one of the selected numbers, the user wins
the bet.

## Coding the `Roulette` Contract

::: danger Check your Network

Make sure you're on a Testnet before trying to deploy the contracts on-chain!

:::

> The complete contract code can be found
> [here](https://github.com/Ashar2shahid/qrng-roulette/blob/main/contracts/contracts/Roulette.sol).

Head on to [Remix online IDE](https://remix.ethereum.org) using a browser that
you have added Metamask support to. Not all browsers support
[MetaMask](https://metamask.io/).

It should load up the Roulette contract.

[Open in Remix](https://remix.ethereum.org/#url=https://raw.githubusercontent.com/api3-ecosystem/remix-contracts/master/contracts/Roulette.sol)

> ![Remix 1](/guides/qrng/roulette-guide/src/SS1.png)

### Importing the `RrpRequesterV0`

The Roulette contract is going to be the main Requester contract that makes
request to the QRNG Airnode using the
[Request-Response Protocol (RRP)](/reference/qrng/airnode-rrp-v0.md).

```solidity
pragma solidity >=0.8.4;

import "@api3/airnode-protocol/contracts/rrp/requesters/RrpRequesterV0.sol";

contract Roulette is RrpRequesterV0 {
  uint256 public constant MIN_BET = 10000000000000; // .001 ETH
  uint256 spinCount;
  address airnode;
  address immutable deployer;
  address payable sponsorWallet;
  bytes32 endpointId;

  // ~~~~~~~ ENUMS ~~~~~~~

  enum BetType {
    Color,
    Number,
    EvenOdd,
    Third,
	 Half
  }
```

You first start by importing the `RrpRequesterV0`, which is the
[Request-Response Protocol (RRP)](/reference/qrng/airnode-rrp-v0.md). You can
then start coding the `Roulette` contract by inheriting from `RrpRequesterV0`.

You then define the following state variables:

- `MIN_BET`: The minimum amount that is required to bet for a spin.
- `spinCount`: An unsigned integer to keep track of the number of times the
  roulette wheel has been spun.
- `airnode`: The Airnode address of the QRNG Provider.
- `deployer`: An immutable address variable to store the address of the contract
  deployer.
- `sponsorWallet`: A `payable` address variable to store the `sponsorWallet`,
  that needs to be funded later to cover the gas costs for the QRNG request
  fulfillment.
- `endpointId`: A `bytes32` variable to store the unique identifier for the QRNG
  API endpoint.

```
Color
Number
EvenOdd
Third
Half
```

The contract also defines an enumeration type called `BetType` with five
possible values.

These values represent different types of bets that players can make in the game
of Roulette.

```solidity
  mapping(address => bool) public userBetAColor;
  mapping(address => bool) public userBetANumber;
  mapping(address => bool) public userBetEvenOdd;
  mapping(address => bool) public userBetThird;
  mapping(address => bool) public userBetHalf;
  mapping(address => bool) public userToColor;
  mapping(address => bool) public userToEven;

  mapping(address => uint256) public userToCurrentBet;
  mapping(address => uint256) public userToSpinCount;
  mapping(address => uint256) public userToNumber;
  mapping(address => uint256) public userToThird;
  mapping(address => uint256) public userToHalf;

  mapping(bytes32 => bool) expectingRequestWithIdToBeFulfilled;

  mapping(bytes32 => uint256) public requestIdToSpinCount;
  mapping(bytes32 => uint256) public requestIdToResult;

  mapping(uint256 => bool) blackNumber;
  mapping(uint256 => bool) public blackSpin;
  mapping(uint256 => bool) public spinIsComplete;

  mapping(uint256 => BetType) public spinToBetType;
  mapping(uint256 => address) public spinToUser;
  mapping(uint256 => uint256) public spinResult;
  uint256 public finalNumber;

```

The contract defines several mapping variables to store information about user
bets and the results of each spin in the game of Roulette.

```solidity
  error HouseBalanceTooLow();
  error NoBet();
  error ReturnFailed();
  error SpinNotComplete();
  error TransferToDeployerWalletFailed();
  error TransferToSponsorWalletFailed();

  // ~~~~~~~ EVENTS ~~~~~~~

  event RequestedUint256(bytes32 requestId);
  event ReceivedUint256(bytes32 indexed requestId, uint256 response);
  event SpinComplete(bytes32 indexed requestId, uint256 indexed spinNumber, uint256 qrngResult);
  event WinningNumber(uint256 indexed spinNumber, uint256 winningNumber);
```

The contract also defines several error messages and events.

```solidity
  constructor(address _airnodeRrp) RrpRequesterV0(_airnodeRrp) {
    deployer = msg.sender;
    blackNumber[2] = true;
    blackNumber[4] = true;
    blackNumber[6] = true;
    blackNumber[8] = true;
    blackNumber[10] = true;
    blackNumber[11] = true;
    blackNumber[13] = true;
    blackNumber[15] = true;
    blackNumber[17] = true;
    blackNumber[20] = true;
    blackNumber[22] = true;
    blackNumber[24] = true;
    blackNumber[26] = true;
    blackNumber[28] = true;
    blackNumber[29] = true;
    blackNumber[31] = true;
    blackNumber[33] = true;
    blackNumber[35] = true;
  }
```

The constructor function will take the `_airnodeRrp` address during deployment
of the contract. You also need to set the `deployer` variable to the address of
the user who deployed the contract `(msg.sender)`.

It also sets certain numbers as black by setting their corresponding values in
the `blackNumber` mapping to `true`. These numbers are 2, 4, 6, 8, 10, 11, 13,
15, 17, 20, 22, 24, 26, 28, 29, 31, 33, and 35. These are the numbers on a
roulette wheel that are colored black.

### Setting the Request Parameters

```solidity
  function setRequestParameters(address _airnode, bytes32 _endpointId, address payable _sponsorWallet) external {
    require(msg.sender == deployer, "msg.sender not deployer");
    airnode = _airnode;
    endpointId = _endpointId;
    sponsorWallet = _sponsorWallet;
  }

  /// @notice sends msg.value to sponsorWallet to ensure Airnode continues responses
  function topUpSponsorWallet() external payable {
    require(msg.value != 0, "msg.value == 0");
    (bool sent, ) = sponsorWallet.call{ value: msg.value }("");
    if (!sent) revert TransferToSponsorWalletFailed();
  }

  // to refill the "house" (address(this)) if bankrupt
  receive() external payable {}
```

The `setRequestParameters` sets the QRNG `airnode` address, `endpointId`, and
`sponsorWallet` on-chain. This function can only be called by the deployer of
the contract.

The `topUpSponsorWallet()` is used to top up the `sponsorWallet` address. You
will later derive it using the
[Airnode admin CLI](/reference/airnode/latest/packages/admin-cli.md).

### Making a Request for a Random Number

```solidity
  function _spinRouletteWheel(uint256 _spinCount) internal {
    require(!spinIsComplete[_spinCount], "spin already complete");
    require(_spinCount == userToSpinCount[msg.sender], "!= msg.sender spinCount");
    bytes32 requestId = airnodeRrp.makeFullRequest(
      airnode,
      endpointId,
      address(this),
      sponsorWallet,
      address(this),
      this.fulfillUint256.selector,
      ""
    );
    expectingRequestWithIdToBeFulfilled[requestId] = true;
    requestIdToSpinCount[requestId] = _spinCount;
    emit RequestedUint256(requestId);
  }

  function fulfillUint256(bytes32 requestId, bytes calldata data) external onlyAirnodeRrp {
    require(expectingRequestWithIdToBeFulfilled[requestId], "Unexpected Request ID");
    expectingRequestWithIdToBeFulfilled[requestId] = false;
    uint256 _qrngUint256 = abi.decode(data, (uint256));
    requestIdToResult[requestId] = _qrngUint256;
    _spinComplete(requestId, _qrngUint256);
    finalNumber = (_qrngUint256 % 37);
    emit ReceivedUint256(requestId, _qrngUint256);
  }
```

The `_spinRouletteWheel()` is an internal function that makes a request for a
random number to use as the result of a roulette spin. It calls the
`airnodeRrp.makeFullRequest()` function of the `AirnodeRrpV0.sol` protocol
contract which adds the request to its storage and emits a `requestId`. It takes
a `_spinCount` parameter that represents the unique identifier for the spin.

The function sets the `expectingRequestWithIdToBeFulfilled` mapping with the
`requestId` key to true. This is used to track whether the request has been
fulfilled.

It sets the `requestIdToSpinCount` mapping with the `requestId` key to the
`_spinCount` parameter. This is used to map the request ID to the specific spin
count.

It emits a `RequestedUint256` event with the `requestId` parameter to indicate
that a request has been made for a random number.

The off-chain QRNG Airnode gathers the request and performs a callback to the
contract with the random number. The `fulfillUint256()` is a callback function
that is called by `AirnodeRrp` when a response is received.

`_qrngUint256` stores the random number which is further passed to the
`_spinComplete()` with the `requestId`.

Finally, the function emits a `ReceivedUint256` event with the received
`requestId` and the decoded `_qrngUint256`.

```solidity
  function _spinComplete(bytes32 _requestId, uint256 _qrngUint256) internal {
    uint256 _spin = requestIdToSpinCount[_requestId];
    if (_qrngUint256 == 0) {
      spinResult[_spin] = 37;
    } else {
      spinResult[_spin] = _qrngUint256;
    }
    spinIsComplete[_spin] = true;
    if (spinToBetType[_spin] == BetType.Number) {
      checkIfNumberWon(_spin);
    } else if (spinToBetType[_spin] == BetType.Color) {
      checkIfColorWon(_spin);
    } else if (spinToBetType[_spin] == BetType.EvenOdd) {
      checkIfEvenOddWon(_spin);
	 } else if (spinToBetType[_spin] == BetType.Half) {
		checkIfHalfWon(_spin);
    } else if (spinToBetType[_spin] == BetType.Third) {
      checkIfThirdWon(_spin);
    }
    emit SpinComplete(_requestId, _spin, spinResult[_spin]);
  }
```

The `_spinComplete()` is an internal function which is called by the
`fulfillUint256()` when the random number for a given spin has been receive.
This function takes in `_requestId` and `_qrngUint256`, which is the random
number that was generated by the QRNG service.

The function first retrieves the spin number associated with the request ID, and
then checks if the QRNG request returned a valid random number or not. If it
didn't (i.e., returned 0), then the function assigns the value 37 to the spin
result, which is used to avoid a modulo problem in the calculation of payouts
for certain types of bets.

If the QRNG request returned a valid random number, then the function assigns
that value to the spin result. The function then sets the `spinIsComplete` flag
for the spin to true, and checks what type of bet was made on the spin using the
`spinToBetType` mapping. Depending on the type of bet, the function calls a
specific helper function to check if the user won or lost the bet.

Finally, the function emits a `SpinComplete` event with the request ID, spin
number, and spin result as parameters, to notify the user interface and other
contracts that the spin has been completed.

### Betting on a Single Number

```solidity
  function betNumber(uint256 _numberBet) external payable returns (uint256) {
    require(_numberBet < 37, "_numberBet is > 36");
    require(msg.value >= MIN_BET, "msg.value < MIN_BET");
    if (address(this).balance < msg.value * 35) revert HouseBalanceTooLow();
    userToCurrentBet[msg.sender] = msg.value;
    unchecked {
      ++spinCount;
    }
    userToSpinCount[msg.sender] = spinCount;
    spinToUser[spinCount] = msg.sender;
    userToNumber[msg.sender] = _numberBet;
    userBetANumber[msg.sender] = true;
    spinToBetType[spinCount] = BetType.Number;
    _spinRouletteWheel(spinCount);
    return (userToSpinCount[msg.sender]);
  }
```

The `betNumber()` function allows a user to place a bet on a single-number (0
to 36) in the roulette wheel. If the user's bet matches the number where the
ball lands, the payout will be 35 times the bet amount.

```solidity
  function checkIfNumberWon(uint256 _spin) internal returns (uint256) {
    address _user = spinToUser[_spin];
    if (userToCurrentBet[_user] == 0) revert NoBet();
    if (!userBetANumber[_user]) revert NoBet();
    if (!spinIsComplete[_spin]) revert SpinNotComplete();
    if (spinResult[_spin] == 37) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] }("");
      if (!sent) revert ReturnFailed();
    } else {}
    if (userToNumber[_user] == spinResult[_spin] % 37) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 35 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else {
      (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
      if (!sent) revert TransferToSponsorWalletFailed();
      (bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
      if (!sent2) revert TransferToDeployerWalletFailed();
    }
    userToCurrentBet[_user] = 0;
    userBetANumber[_user] = false;
    emit WinningNumber(_spin, spinResult[_spin] % 37);
    return (spinResult[_spin] % 37);
  }
```

`checkIfNumberWon()` is called internally to determine whether a user has won a
bet on a single number, after the roulette wheel has been spun and the random
result has been obtained.

If the roulette spin resulted in a number that does not match the user's bet,
then the user loses the bet and the bet amount is split between the
`sponsorWallet` (10%), the deployer wallet (2%) and the house (88%).

### Betting on a Dozen

```solidity
  function betOneThird(uint256 _oneThirdBet) external payable returns (uint256) {
    require(_oneThirdBet == 1 || _oneThirdBet == 2 || _oneThirdBet == 3, "_oneThirdBet not 1 or 2 or 3");
    require(msg.value >= MIN_BET, "msg.value < MIN_BET");
    if (address(this).balance < msg.value * 3) revert HouseBalanceTooLow();
    userToCurrentBet[msg.sender] = msg.value;
    unchecked {
      ++spinCount;
    }
    spinToUser[spinCount] = msg.sender;
    userToSpinCount[msg.sender] = spinCount;
    userToThird[msg.sender] = _oneThirdBet;
    userBetThird[msg.sender] = true;
    spinToBetType[spinCount] = BetType.Third;
    _spinRouletteWheel(spinCount);
    return (userToSpinCount[msg.sender]);
  }
```

`betOneThird()` is a payable function allows a user to place a bet on one of
three sections of the roulette table (1st, 2nd, or 3rd). The bet pays out 3:1 if
the section bet on is correct after the spin.

```solidity
  function checkIfThirdWon(uint256 _spin) internal returns (uint256) {
    address _user = spinToUser[_spin];
    if (userToCurrentBet[_user] == 0) revert NoBet();
    if (!userBetThird[_user]) revert NoBet();
    if (!spinIsComplete[_spin]) revert SpinNotComplete();
    uint256 _result = spinResult[_spin] % 37;
    uint256 _thirdResult;
    if (_result > 0 && _result < 13) {
      _thirdResult = 1;
    } else if (_result > 12 && _result < 25) {
      _thirdResult = 2;
    } else if (_result > 24) {
      _thirdResult = 3;
    }
    if (spinResult[_spin] == 37) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] }("");
      if (!sent) revert ReturnFailed();
    } else {}
    if (userToThird[_user] == 1 && _thirdResult == 1) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 3 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else if (userToThird[_user] == 2 && _thirdResult == 2) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 3 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else if (userToThird[_user] == 3 && _thirdResult == 3) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 3 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else {
      (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
      if (!sent) revert TransferToSponsorWalletFailed();
      (bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
      if (!sent2) revert TransferToDeployerWalletFailed();
    }
    userToCurrentBet[_user] = 0;
    userBetThird[_user] = false;
    emit WinningNumber(_spin, spinResult[_spin] % 37);
    return (spinResult[_spin] % 37);
  }
```

`checkIfThirdWon()` is used to check if a user has won or lost their bet on a
third of the roulette table after a spin is complete. The function is called
internally and returns the winning number of the spin.

The function first checks that the user has placed a bet on a third of the table
and that the spin is complete. It then calculates the winning third of the table
based on the spin result. If the user's bet matches the winning third of the
table, they receive their bet amount multiplied by 3. If they have not won, 10%
of their bet amount is sent to the `sponsorWallet` to ensure future fulfillment,
2% to the deployer, and the rest is kept by the house.

Finally, the function resets the user's current bet and the bet type, emits an
event with the winning number of the spin, and returns the winning number of the
spin.

```solidity
  function betHalf(uint256 _halfBet) external payable returns (uint256) {
	 require(_halfBet == 1 || _halfBet == 2, "_halfBet not 1 or 2");
	 require(msg.value >= MIN_BET, "msg.value < MIN_BET");
	 if (address(this).balance < msg.value * 2) revert HouseBalanceTooLow();
	 userToCurrentBet[msg.sender] = msg.value;
	 unchecked {
		++spinCount;
	 }
	 spinToUser[spinCount] = msg.sender;
	 userToSpinCount[msg.sender] = spinCount;
	 userToHalf[msg.sender] = _halfBet;
	 userBetHalf[msg.sender] = true;
	 spinToBetType[spinCount] = BetType.Half;
	 _spinRouletteWheel(spinCount);
	 return (userToSpinCount[msg.sender]);
  }
```

### Betting on Half of the Table

`betHalf()` allows users to place a bet on the first or second half of the
table, with a payout of 2:1 if correct after the spin. `_halfBet` takes in 1 or
2 as it's parameters that represents first and second half of the table.

The function returns the `userToSpinCount[msg.sender]` value, which is the spin
count for the user that just placed a bet.

```solidity
  function checkIfHalfWon(uint256 _spin) internal returns (uint256) {
	 address _user = spinToUser[_spin];
	 if (userToCurrentBet[_user] == 0) revert NoBet();
	 if (!userBetHalf[_user]) revert NoBet();
	 if (!spinIsComplete[_spin]) revert SpinNotComplete();
	 uint256 _result = spinResult[_spin] % 37;
	 uint256 _halfResult;
	 if (_result > 0 && _result < 19) {
		_halfResult = 1;
	 } else if (_result > 18) {
		_halfResult = 2;
	 }
	 if (spinResult[_spin] == 37) {
		(bool sent, ) = _user.call{ value: userToCurrentBet[_user] }("");
		if (!sent) revert ReturnFailed();
	 } else {}
	 if (userToHalf[_user] == 1 && _halfResult == 1) {
		(bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
		if (!sent) revert HouseBalanceTooLow();
	 } else if (userToHalf[_user] == 2 && _halfResult == 2) {
		(bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
		if (!sent) revert HouseBalanceTooLow();
	 } else {
		(bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
		if (!sent) revert TransferToSponsorWalletFailed();
		(bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
		if (!sent2) revert TransferToDeployerWalletFailed();
	 }
	 userToCurrentBet[_user] = 0;
	 userBetHalf[_user] = false;
	 emit WinningNumber(_spin, spinResult[_spin] % 37);
	 return (spinResult[_spin] % 37);
  }
```

`checkIfHalfWon()` checks whether a user has won a half bet after a spin is
complete. It first checks that the user has placed a half bet, that the spin is
complete, and that the user has placed a bet. It then calculates the result of
the spin, which is an integer between 0 and 36 inclusive. If the result is 37,
which represents 00, the bet is unsuccessful, and the user's bet is returned to
them.

If the user's bet is successful, the function checks whether the user has bet on
the correct half of the table. If they have, their bet is multiplied by two and
returned to them. If they have not, 10% of their bet is sent to the sponsor
wallet to ensure future fulfillment, 2% is sent to the deployer, and the rest is
kept by the house.

```solidity
function betEvenOdd(bool _isEven) external payable returns (uint256) {
    require(msg.value >= MIN_BET, "msg.value < MIN_BET");
    if (address(this).balance < msg.value * 2) revert HouseBalanceTooLow();
    unchecked {
      ++spinCount;
    }
    spinToUser[spinCount] = msg.sender;
    userToCurrentBet[msg.sender] = msg.value;
    userToSpinCount[msg.sender] = spinCount;
    userBetEvenOdd[msg.sender] = true;
    if (_isEven) {
      userToEven[msg.sender] = true;
    } else {}
    spinToBetType[spinCount] = BetType.EvenOdd;
    _spinRouletteWheel(spinCount);
    return (userToSpinCount[msg.sender]);
  }
```

### Betting on Even/Odd

`betEvenOdd()` allows user to place an odd or even bet, which pays out 2:1 if
they are correct. It takes in a boolean `true` or `false` as a parameter for
even or odd bets.

```solidity
  function checkIfEvenOddWon(uint256 _spin) internal returns (uint256) {
    address _user = spinToUser[_spin];
    if (userToCurrentBet[_user] == 0) revert NoBet();
    if (!userBetEvenOdd[_user]) revert NoBet();
    if (!spinIsComplete[_spin]) revert SpinNotComplete();
    uint256 _result = spinResult[_spin] % 37;
    if (spinResult[_spin] == 37) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] }("");
      if (!sent) revert ReturnFailed();
    } else {}
    if (_result == 0) {
      (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
      if (!sent) revert TransferToSponsorWalletFailed();
    } else if (userToEven[_user] && (_result % 2 == 0)) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else if (!userToEven[_user] && _result % 2 != 0) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
      if (!sent) revert HouseBalanceTooLow();
    } else {
      (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
      if (!sent) revert TransferToSponsorWalletFailed();
      (bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
      if (!sent2) revert TransferToDeployerWalletFailed();
    }
    userBetEvenOdd[_user] = false;
    userToCurrentBet[_user] = 0;
    emit WinningNumber(_spin, spinResult[_spin] % 37);
    return (spinResult[_spin] % 37);
  }
```

`checkIfEvenOddWon()` is an internal function used to check if a user's even/odd
bet has won after a spin has been completed. It first retrieves the address of
the user who placed the bet on this spin, and checks that the user had actually
placed a bet and that it was an even/odd bet. It then checks the result of the
spin, which is stored in the `spinResult` mapping under the given `_spin` key.
If the result is equal to 37, which represents the 0 value on the roulette
wheel, the user's bet is returned to them.

If the result is not 37, the function determines if the user's bet was
successful based on whether they bet on even or odd. If the user bet on even and
the result is even, or if the user bet on odd and the result is odd, then the
user wins and is paid out twice their bet amount. If the user's bet is
unsuccessful, 10% of their bet is sent to the designated `sponsorWallet` to
ensure future payouts, 2% is sent to the deployer's wallet, and the remaining
amount is kept by the house.

```solidity
function betColor(bool _isBlack) external payable returns (uint256) {
    require(msg.value >= MIN_BET, "msg.value < MIN_BET");
    if (address(this).balance < msg.value * 2) revert HouseBalanceTooLow();
    unchecked {
      ++spinCount;
    }
    spinToUser[spinCount] = msg.sender;
    userToCurrentBet[msg.sender] = msg.value;
    userToSpinCount[msg.sender] = spinCount;
    userBetAColor[msg.sender] = true;
    if (_isBlack) {
      userToColor[msg.sender] = true;
    } else {}
    spinToBetType[spinCount] = BetType.Color;
    _spinRouletteWheel(spinCount);
    return (userToSpinCount[msg.sender]);
  }

```

### Betting on a Color

`betColor()` allows user to place a black or red bet, which pays out 2:1 if they
are correct. It takes in a `_isBlack` variable as a parameter, i.e, `true` for
black, `false` for red.

The function sets the `spinToBetType` mapping for this spin to `BetType.Color`,
and then calls `_spinRouletteWheel(spinCount)`

```solidity
function checkIfColorWon(uint256 _spin) internal returns (uint256) {
    address _user = spinToUser[_spin];
    if (userToCurrentBet[_user] == 0) revert NoBet();
    if (!userBetAColor[_user]) revert NoBet();
    if (!spinIsComplete[_spin]) revert SpinNotComplete();
    uint256 _result = spinResult[_spin] % 37;
    if (spinResult[_spin] == 37) {
      (bool sent, ) = _user.call{ value: userToCurrentBet[_user] }("");
      if (!sent) revert ReturnFailed();
    } else if (_result == 0) {
      (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
      if (!sent) revert TransferToSponsorWalletFailed();
      (bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
      if (!sent2) revert TransferToDeployerWalletFailed();
    } else {
      if (blackNumber[_result]) {
        blackSpin[_spin] = true;
      } else {}
      if (userToColor[_user] && blackSpin[_spin]) {
        (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
        if (!sent) revert HouseBalanceTooLow();
      } else if (!userToColor[_user] && !blackSpin[_spin] && _result != 0) {
        (bool sent, ) = _user.call{ value: userToCurrentBet[_user] * 2 }("");
        if (!sent) revert HouseBalanceTooLow();
      } else {
        (bool sent, ) = sponsorWallet.call{ value: userToCurrentBet[_user] / 10 }("");
        if (!sent) revert TransferToSponsorWalletFailed();
        (bool sent2, ) = deployer.call{ value: userToCurrentBet[_user] / 50 }("");
        if (!sent2) revert TransferToDeployerWalletFailed();
      }
    }
    userBetAColor[_user] = false;
    userToCurrentBet[_user] = 0;
    emit WinningNumber(_spin, spinResult[_spin] % 37);
    return (spinResult[_spin] % 37);
  }
}
```

`checkIfColorWon()` is an internal function that checks the result for a colour
bet when the spin is complete. It gets the user address from the mapping to
verify all the conditions.

Then, it calculates the result of the spin by taking the modulo of the spin
result with 37. If the spin result is equal to 37, this indicates that the spin
failed to fulfill, and the user's bet amount will be returned to them. If the
spin result is 0, then the function will send 10% of the user's bet amount to
the sponsor wallet to ensure future fulfills, and 2% to the deployer, with the
remaining balance being kept by the house.

If the spin result is not equal to 0 or 37, then the function checks if the
result is a black number or not. If it is a black number and the user bet on
black, or if it is a red number and the user bet on red, then the user wins and
will receive double their bet amount.

> The complete contract code can be found
> [here](https://github.com/Ashar2shahid/qrng-roulette/blob/main/contracts/contracts/Roulette.sol).

## Deploying the `Roulette` Contract

::: warning Set up your Testnet Metamask Account!

Make sure you've already configured your Metamask wallet and funded it with some
testnet MATIC before moving forward. You can request some from
[here➚](https://mumbaifaucet.com).

:::

You will now deploy the `Roulette` contract and interact with it through the
Remix IDE.

### 1. Compiling the Contract

[Click here➚]() to open the `Roulette` Contract in Remix if you haven't already.

![](/guides/qrng/roulette-guide/src/SS1.png)

Click on the **COMPILE** tab on the left side of the dashboard and click on
**Compile `roulette.sol`**

![](/guides/qrng/roulette-guide/src/SS3.png)

### 2. Deploying the Contract

Head to **Deploy and run Transactions** and select **Injected Provider —
MetaMask** option under Environment. Connect your MetaMask. Make sure you’re on
the Polygon Mumbai testnet.

The `_airnodeRrpAddress` is the main `airnodeRrpAddress`. The RRP contracts have
already been deployed on-chain. You can check for your specific chain
[here](/reference/airnode/latest/index.md#airnoderrpv0). Fill it in and click on
**transact** to deploy the contract.

![](/guides/qrng/roulette-guide/src/SS4.png)

### 3. Deriving the Sponsor Wallet

The
[Sponsor Wallet](/reference/airnode/latest/concepts/sponsor.md#sponsorwallet)
needs to be derived from the requester's contract address (Lottery contract in
this case), the Airnode address, and the Airnode xpub. The wallet is used to pay
gas costs of the transactions. The sponsor wallet must be derived using the
command
[derive-sponsor-wallet-address](/reference/airnode/latest/packages/admin-cli.md#derive-sponsor-wallet-address)
from the Admin CLI. Use the value of the sponsor wallet address that the command
outputs while making the request.

**This wallet needs to be funded.**

::: details Testnet Random Numbers QRNG Airnode Details

```
Testnet Random Numbers QRNG Airnode Address = 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D
Testnet Random Numbers QRNG Airnode XPUB = xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo
```

:::

```sh
npx @api3/airnode-admin derive-sponsor-wallet-address \
  --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
  --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
  --sponsor-address <Use the address of your deployed Roulett Contract>

  Sponsor wallet address: 0x6394...5906757
  # Use the above address from your command execution as the value for sponsorWallet.
```

Click on the `setRequestParameters` button and enter the QRNG Airnode address,
`endpointID` and the `sponsorWallet` to set it on-chain.

::: warning Designated Sponsor Wallets

Sponsors should not fund a `sponsorWallet` with more than they can trust the
Airnode with, as the Airnode controls the private key to the `sponsorWallet`.
The deployer of such Airnode undertakes no custody obligations, and the risk of
loss or misuse of any excess funds sent to the `sponsorWallet` remains with the
sponsor.

:::

## Using the `Roulette` Contract

After deploying the contract, click the dropdown right under **Deployed
Contracts** and select `topUpSponsorWallet()`. This is a payable function that
will fund the `sponsorWallet`. This wallet will be responsible to fulfill the
randomness request.

Fill in the amount in wei under **VALUE** on the tab above and click on
`topUpSponsorWallet()`.

For Polygon Mumbai, `0.05` (`50000000000000000` wei) Matic should be sufficient
for now.

After funding the `sponsorWallet`, we are also supposed to fund the main
contract(house) too. You can use Metamask to send some funds to the house. Copy
the deployed contract address and send funds to it.

For this example, we can send 0.1 matic to the main contract(house).

Copy the deployed contract address and send 0.1 matic to it through your
Metamask wallet.

![](/guides/qrng/roulette-guide/src/SS5.png)

Now you're ready to make a bet of your choice.

- use `betOneThird()` to bet on either the first, second or the third dozen of
  the numbers on the board.
- use `betHalf()` to bet on either the first or the second half of the numbers
  on the board.
- use `betEvenOdd()` to bet on either the set of all even or odd numbers on the
  board.
- use `betColor()` to bet on all the red or black numbers on the board.
- use `betNumber()` to bet on any one number you wish on the board.

For this example, let's bet on all the even numbers of the table. As the
`MIN_BET` is set to be `10000000000000` wei, we'll use that value for making the
bet.

Set the value to `10000000000000` wei and select `betEvenOdd()`. Pass in `true`
to select all the even numbers on the table and click on **transact**.

![](/guides/qrng/roulette-guide/src/SS6.png)

Now wait for the bet to be complete (For the QRNG Airnode to fulfill your
request).

You can also check your `sponsorWallet` address on the block explorer to see if
the QRNG Airnode fulfilled the request.

![](/guides/qrng/roulette-guide/src/SS7.png)

You can now check the `finalNumber` getter function to see the final winning
number.

![](/guides/qrng/roulette-guide/src/SS8.png)

This means you lost the bet. If you head back over to the block explorer and
check the `Fulfill` transaction, you can see:

- The contract sent `0.000001` MATIC to the `sponsorWallet`.
- The contract also sent `0.0000002` MATIC back to the deployer of the contract.
- The rest of the bet amount is kept by the house.

![](/guides/qrng/roulette-guide/src/SS9.png)

## Conclusion

This is how you can use QRNG to build an on-chain Roulette. To learn more, go to
the [QRNG reference section](/reference/qrng/). If you have any
doubts/questions, visit the
[API3 Discord](https://discord.com/channels/758003776174030948/765618225144266793).

<FlexEndTag/>
