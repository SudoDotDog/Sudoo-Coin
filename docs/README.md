# Sudoo-Coin

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Coin/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Coin/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Coin/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Coin)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fcoin.svg)](https://www.npmjs.com/package/@sudoo/coin)
[![downloads](https://img.shields.io/npm/dm/@sudoo/coin.svg)](https://www.npmjs.com/package/@sudoo/coin)

Coin flip for JS

## Install

```sh
yarn add @sudoo/coin
# Or
npm install @sudoo/coin --save
```

## Usage

Toss a coin

```ts
import { Coin } from "@sudoo/coin";

const coin: Coin = Coin.even(); // A 50 / 50 coin
const coin: Coin = Coin.withBreakPoint(10); // A 10 / 90 coin

const result: boolean = coin.toss(); // true or false
```

Return random value with coin

```ts
import { Coin } from "@sudoo/coin";

const coin: Coin = Coin.even();

const result: string = coin.tossSwitch("Head", "Tail"); // Head or Tail
```
