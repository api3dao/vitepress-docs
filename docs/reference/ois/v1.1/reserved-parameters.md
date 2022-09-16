---
title: Reserved Parameters
sidebarHeader: Reference → OIS v1.1
basePath: /reference/ois/v1.1
tags:
---

<reference-VersionPicklist/>

# {{$frontmatter.title}}

<!--TocHeader /> <TOC class="table-of-contents" :include-level="[2,4]" /-->

Reserved parameters are part of an OIS object as part of the `endpoints` field
(Airnode endpoints) and warrant a more in-depth explanation. They are part of an
Airnode's defined endpoints in an OIS object but do not map to operation
parameters (API parameters). They are used by Airnode for special purposes.

A requester can pass request parameters either by referencing a
[template](/airnode/v0.7/concepts/template.md) that contains them, or as an
argument of the request-making methods of
[AirnodeRrpV0.sol](/airnode/v0.7/concepts/#airnoderrpv0-sol). In either case,
these parameters are encoded using the
[AirnodeRrpV0 ABI](/airnode/v0.7/reference/specifications/airnode-abi-specifications.md).
There are two types of parameters which are part of the OIS object:

1. [Endpoint parameters](./ois.md#_5-5-parameters) - Airnode endpoint parameters
   are mapped to API operation parameters.
2. [Reserved parameters](./ois.md#_5-4-reservedparameters) - Reserved parameters
   perform a specific operation on the response before fulfilling the request.
   Reserved parameter names start with `_`.

## `_type`

Signifies what Solidity type the API response will be encoded to before
fulfillment.

Support is provided for most common
[solidity types](https://docs.soliditylang.org/en/latest/abi-spec.html#types),
but the following are not supported.

- Custom bits integer types - e.g. `uint32` or `uint8`
- Fixed point decimal numbers - e.g. `fixed128x18` or `ufixed128x18`
- Custom fixed size bytes - e.g. `bytes4`
- Tuples - e.g. `(int256, string)`

On top of supported solidity types, there is support for a few "artificial"
types created for special purposes that would otherwise be hard or impossible to
represent.

- [`string32`](reserved-parameters.md#string32-encoded-to-bytes32-on-chain)
- [`timestamp`](reserved-parameters.md#timestamp-encoded-to-uint256-on-chain)

You can also encode multiple values for one single API call - but this impacts
all of the reserved parameters and is explained in the
[Encoding Multiple Values](./reserved-parameters.md#encoding-multiple-values)
section below.

### Conversion and encoding behavior

Before the API response value is encoded for on chain use, it is parsed and
converted. The conversion behaviors for any given type is explained in depth in
the
[adapter package docs](/airnode/v0.7/reference/packages/adapter.md#conversion).

The converted value is then encoded internally by
[ethers ABI Coder](https://docs.ethers.io/v5/api/utils/abi/coder/#AbiCoder)
using the following

```js
ethers.utils.defaultAbiCoder.encode([solidityType], [value]);
```

#### Supported Primitive Values

- `int256`
- `uint256`
- `bool`
- `bytes32`
- `address`
- `bytes`
- `string`

#### string32 (encoded to `bytes32` on chain)

The `string32` is an artificial type that is not supported by solidity. It is
instead encoded to `bytes32` and provides a cheaper alternative to the regular
`string` type for values with less than 32 characters.

:::warning Limitations

While using `string32` is more efficient, decoding the original string from
`bytes32` on chain is both difficult and expensive.

Also bear in mind that this type is able to encode only strings shorter than 32
characters. If the value is longer, it will be trimmed and only first 31
characters will be encoded.

:::

#### timestamp (encoded to `uint256` on chain)

The `timestamp` is an artificial type that is not supported by solidity. It is
instead encoded to `uint256` and specifies the UNIX timestamp value at the time
when the transaction was encoded. You can use this value on chain to check the
"freshness" of the Airnode response. This might be useful in certain scenarios,
because Airnode cannot guarantee when a particular transaction will be mined on
chain.

When using the `timestamp` type, the corresponding `_path` and `_times`
variables must be empty strings or not provided.

#### Arrays

Apart from the primitives defined above as well as all "artificial" types we
created, you are free to use arrays with any of the above. Multidimensional
arrays are supported as well. Solidity allows you to define fixed size arrays,
which are more gas efficient to encode and you can use those as well.

For example

- `int256[]` - regular integer array
- `uint256[8]` - unsigned integer array with 8 elements
- `int256[][]` - 2 dimensional integer array
- `string32[]` - is an array of `string32` values, which will be encoded to
  `bytes32[]` on chain
- `string[2][][3]` - 3 dimensional string array, where first dimension contains
  3 elements, second unboundedly many and last dimension only 2. Notice, that
  this
  [definition is read backwards](https://ethereum.stackexchange.com/questions/64331/why-is-multidimensional-array-declaration-order-reversed)
  compared to C-style languages

## `_path`

Assuming that the API response will be a JSON object, defines the field to be
used to fulfill the request using dot notation. For example, if the API returns

```
{
  "field1": {
    "fieldA": [
      "valueA1",
      "valueA2"
    ],
    "fieldB: "valueB"
  },
  "field2": {
    "fieldZ": "valueZ"
  }
}
```

and `_path` is `field1.fieldA.1`, the response will be `valueA2`.

If the response is a literal value (i.e., not a JSON object) and `_path` is not
provided or is an empty string (needed for
[encoding multiple values](./reserved-parameters.md#encoding-multiple-values)),
Airnode will use the API response itself to fulfill the request.

:::warning Beware the separator

Make sure the keys in the path of the API response do not contain `.`, because
it will be incorrectly considered as a separator.

```
{
  "strange.key": "123"
}
```

The `_path` defined as `"strange.key"` will not work. As workaround you can
[escape the separator](./reserved-parameters.md#escaping-separators).

:::

### Escaping Separators

In rare cases, when the `_path` to the API response would contain `,` or `.`
(comma or a dot) things get a bit complicated. Those symbols have a very
specific meaning when parsing the reserved parameters and they need to be
escaped if they are to be considered as literals. For example, if the API
provider response looks like the following

```
{
  "very,strange.key": "123"
}
```

Then you need to escape those symbols, in this case
`_path="very//,strange\\.key"`.

## `_times`

If `_type` is `int256` or `uint256` and a valid `_times` parameter is provided
Airnode multiplies the value returned by the API with the `_times` parameter
before fulfilling the request. For example, if the API returns:

```
{
  "data": "1.238",
  "apiVersion": "1.0.4"
}
```

and the reserved parameters are

```
_type: int256
_path: data
_times: "100"
```

the request will be fulfilled with the value `123`. Note that the number gets
multiplied by `100`, and then gets floored. This is because the result of the
multiplication is [cast](/airnode/v0.7/reference/packages/adapter.md) to
`int256` afterwards.

Make sure to pass the `_times` parameter as string. Airnode will convert this
string to number internally. You can also pass and empty string `""` to `_times`
parameter - this has the same effect as if the `_times` parameter was not
provided. However, this is important when
[encoding multiple values](./reserved-parameters.md#encoding-multiple-values).

The `_times` parameter also works in conjunction with arrays and
multidimensional arrays. All elements of the API response array will be
multiplied before they are encoded.

## Encoding Multiple Values

Solidity has support for decoding and "destructuring" multiple values. For
example

```solidity
function decodeMultipleParameters(bytes calldata data)
    public
    pure
    returns (string memory str, uint256 num, address addr)
{
    (str, num, addr) = abi.decode(data, (string, uint256, address));
}
```

The example above demonstrates the decoding on chain of three values of types
`string`, `uint256` and `address` respectively. You can instruct Airnode to
encode these values using the reserved parameters by separating the values using
`,` (comma). For example using the following combination of reserved parameters

```js
{
  _type: 'string,uint256,address',
  _path: 'pathToString,pathToFloat,pathToAddress',
  _times: ',10000,'
}
```

Airnode will split the reserved parameters by `,` into "split values" and ensure
they all contain the same number of them. It will extract and convert each of
the "split values". Notice, that an `""` (empty string) is used to specify that
a certain reserved parameter should not be used for a certain "split value".

For example, let's say the API response looks like this

```json
{
  "pathToString": "some string",
  "pathToFloat": "1234.567",
  "pathToAddress": "0xe021...08a74"
}
```

Airnode will extract and convert each of the "split values" separately

1. Combination of `_type="string"`, `_path="pathToString"` and `__times=""`
   results in `"some string"`
2. Combination of `_type="uint256"`, `_path="pathToFloat"` and `__times="10000"`
   results in `12345670`
3. Combination of `_type="address"`, `_path="pathToAddress"` and `__times=""`
   results in `"0xe021...8a74"`

All of these values are then together encoded to single bytes value that can be
sent on chain. You can use
[testing gateway](/airnode/v0.7/grp-providers/guides/build-an-airnode/deploying-airnode.md#testing-with-http-gateway)
to inspect the raw API response, casting results and the final encoded value.
