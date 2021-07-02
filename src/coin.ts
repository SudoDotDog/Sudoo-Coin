/**
 * @author WMXPY
 * @namespace Coin
 * @description Coin
 */

export class Coin {

    public static even() {

        return new Coin(50);
    }

    public static withBreakPoint(breakPoint: number) {

        return new Coin(breakPoint);
    }

    private readonly _breakPoint: number;

    private constructor(breakPoint: number) {

        const fixedBreakPoint: number = Math.max(0, Math.min(breakPoint, 100));
        this._breakPoint = fixedBreakPoint;
    }
}
