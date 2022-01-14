# testBOT
## Installation


Install the dependencies and devDependencies and start the server.

```sh
cd test
npm i
node start
```
```sh
url hhttp://localhost:8081/tradingBot1

example body
[
  {
     "date": "2018-01-01",
     "open": 227.17,
     "high": 232.29,
     "low": 217.66,
     "close": 225.22,
     "volume_ltc": 246251.23,
     "volume_usd": 55290393.45
  }
]

example response 
{
    "LOG": [
        114.53
    ],
    "DIFF": [],
    "SUM": 0
}
```
