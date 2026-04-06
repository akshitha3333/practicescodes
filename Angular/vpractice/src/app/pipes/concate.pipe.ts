import {Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"Concate",
    standalone: true
})
export class Concatpipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return value+" "+"GVS"
    }    
}