/**
 * @author WMXPY
 * @namespace Coin
 * @description Coin
 */

export class Coin {

    public static even(whenEven?: boolean): Coin {

        return new Coin(50, whenEven);
    }

    public static withBreakPoint(breakPoint: number, whenEven?: boolean): Coin {

        return new Coin(breakPoint, whenEven);
    }

    private readonly _breakPoint: number;
    private readonly _whenEven: boolean;

    private constructor(breakPoint: number, whenEven?: boolean) {

        const fixedBreakPoint: number = Math.max(0, Math.min(breakPoint, 100));
        this._breakPoint = fixedBreakPoint;

        this._whenEven = Boolean(whenEven);
    }

    public toss(): boolean {

        const random: number = Math.random();
        const parsed: number = random * 100;

        if (parsed > this._breakPoint) {
            return true;
        }

        if (parsed < this._breakPoint) {
            return false;
        }

        return this._whenEven;
    }

    public tossSwitch<IT extends any = any, IF extends any = any>(ifTrue: IT, ifFalse: IF): IT | IF {

        const result: boolean = this.toss();

        if (result) {
            return ifTrue;
        }
        return ifFalse;
    }
}
