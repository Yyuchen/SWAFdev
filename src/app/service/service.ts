import { Injectable } from '@angular/core';
import { TransLoc } from '../trans/trans.page';

@Injectable({
    providedIn: 'root'
})
export class ParamLocs {
    private _loc: TransLoc;

    set loc(l: TransLoc) {
        this._loc = l;
    }

    get loc(): TransLoc {
        const tmp: TransLoc = this._loc;
        this._loc = undefined;
        return tmp;
    }

}
