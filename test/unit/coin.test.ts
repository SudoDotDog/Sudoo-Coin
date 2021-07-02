/**
 * @author WMXPY
 * @namespace Coin
 * @description Coin
 * @override Unit Test
 */

import { expect } from "chai";
import * as Chance from "chance";
import { Coin } from "../../src";

describe('Given {Coin} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('coin-coin');

    it('should be able to toss even coin', (): void => {

        const coin: Coin = Coin.even();
        const result: boolean = coin.toss();

        expect(typeof result).to.be.equal('boolean');
    });
});
