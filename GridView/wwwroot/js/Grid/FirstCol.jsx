import { THead } from "/js/Genericos/THead.jsx"

export class FirstCol extends THead {
    constructor() {
        super()

        $("tbody > tr > th").ready(() => {
            $("tbody > tr > th").prop("scope", "row");
        });
    }    
}