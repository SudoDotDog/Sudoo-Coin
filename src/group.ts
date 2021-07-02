/**
 * @author WMXPY
 * @namespace Coin
 * @description Coin
 */

import { Coin } from "./coin";

export type CoinGroupTossResult = {

    readonly true: number;
    readonly false: number;
    readonly total: number;
};

export class CoinGroup {

    public static create(coins: Coin[]): CoinGroup {

        return new CoinGroup(coins);
    }

    private readonly _coins: Coin[];

    private constructor(coins: Coin[]) {

        this._coins = coins;
    }

    public get length(): number {
        return this._coins.length;
    }

    public tossAll(): CoinGroupTossResult {

        let trueCount: number = 0;
        let falseCount: number = 0;

        this._coins.forEach((coin: Coin) => {

            const result: boolean = coin.toss();
            if (result) {
                trueCount++;
            } else {
                falseCount++;
            }
        });

        return {

            true: trueCount,
            false: falseCount,
            total: this._coins.length,
        };
    }
}
