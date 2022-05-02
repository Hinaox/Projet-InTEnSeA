import { Injectable } from "@angular/core";

@Injectable()
export class Services{
    writeCSV(lieu,genre,id,dtn){
        let content = lieu+";"+genre+";"+id+";"+dtn;
        let fs = require("fs");

        //tohiny
    }
}