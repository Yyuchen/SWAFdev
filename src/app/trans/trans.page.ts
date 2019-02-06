import { ParamLocs } from '../service/service';
import {Component, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {ItemSliding} from "@ionic/angular";

@Component({
    selector: 'app-trans',
    templateUrl: './trans.page.html',
    styleUrls: ['./trans.page.scss'],
})
export class TransLoc implements OnInit {
    private subs: Subscription;
    locs: TransLoc[] = [];

    constructor(private router: Router, private param: ParamLocs) {
    }


    clickDisp(loc: TransLoc) {
        this.param.loc = loc;
        this.router.navigateByUrl('/app/tabs/(locs:dloc)');
    }

    clickEdit(sliding: ItemSliding, loc: TransLoc) {
        sliding.close();
        this.param.loc = loc;
        this.router.navigateByUrl('/app/tabs/(locs:edit)');
    }

    ngOnInit(): void {
    }
}
