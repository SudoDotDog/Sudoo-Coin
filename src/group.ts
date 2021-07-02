/**
 * @author WMXPY
 * @namespace Coin
 * @description Coin
 */

import { Coin } from "./coin";

export class CoinGroup {

    public static create(coins: Coin[]): CoinGroup {

        return new CoinGroup(coins);
    }

    private readonly _coins: Coin[];

    private constructor(coins: Coin[]) {

        this._coins = coins;
    }
}
