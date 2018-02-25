import { Injectable } from '@angular/core';
import { Number } from '../cpu/number';

@Injectable()
export class ConversorProvider {
    toBinary(num: string){
        console.log("R:"+(+num).toString(2));
        return (+num).toString(2);
    }
    toDecimal(num: string,base:number){
        console.log("R:"+parseInt(num,base).toString());
        return parseInt(num,base).toString();
    }
    toHexadecimal(num: string){
        console.log("R:"+(+num).toString(16));        
        return (+num).toString(16);
    }
}