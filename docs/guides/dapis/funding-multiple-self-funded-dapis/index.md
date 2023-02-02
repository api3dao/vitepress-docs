---
title: Funding multiple self-funded dAPIs via Gelato
sidebarHeader: Guides
sidebarSubHeader:
pageHeader: Guides → dAPIs
path: /guides/dapis/funding-multiple-self-funded-dapis/index.html
outline: deep
tags:
---

<!-- https://blog.chain.link/smart-contract-call-another-smart-contract/ -->

<!-- https://medium.com/@blockchain101/calling-the-function-of-another-contract-in-solidity-f9edfa921f4c -->

<PageHeader/>

<SearchHighlight/>

# {{$frontmatter.title}}

## Funding a dAPI

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Automation is Ownable {

    address[] public sponsorWallets;
    uint256 public minimumBalance;
    mapping(address => bool) public isSponsorWallet;

    function addSponsorWallet(address _sponsorWallet) public onlyOwner {
        sponsorWallets.push(_sponsorWallet);
        isSponsorWallet[_sponsorWallet] = true;
    }

    function setMinimumBalance(uint256 amount) public onlyOwner{
        minimumBalance = amount;
    }

    function checkSponsorWallet() external view returns(bool canExec,  bytes memory execPayload) {
        uint unfunded = 0;
        for(uint i=0;i<sponsorWallets.length;i++){
            if(sponsorWallets[i].balance < minimumBalance) {
                unfunded = unfunded + 1;
            }
        }
        address[] memory unfundedSponsorWallets = new address[](unfunded);
        uint counter = 0;
        for(uint j=0; j<sponsorWallets.length;j++){
            if(sponsorWallets[j].balance < minimumBalance) {
                unfundedSponsorWallets[counter]=sponsorWallets[j];
                counter=counter+1;
            }
        }
        execPayload =  abi.encodeWithSignature("fundSponsorWallet(address[],uint256)",unfundedSponsorWallets,50000000000000000);
        canExec = false;
        if(unfundedSponsorWallets.length > 0){
            canExec = true;
        }
    }

    function fundSponsorWallet(address[] calldata unfundedSponsorWallets,uint256 amount) external payable returns(bool success) {
        for(uint i=0;i<unfundedSponsorWallets.length;i++){
            require(isSponsorWallet[unfundedSponsorWallets[i]],"Not SponsorWallet");
            (success,) = payable(unfundedSponsorWallets[i]).call{value: amount}("");
        }
    }

    function recieveFunds() public payable{

    }

    function withdraw(uint256 amount) public onlyOwner returns(bool success) {
        (success,) = payable(owner()).call{value: amount}("");
    }
}
```
