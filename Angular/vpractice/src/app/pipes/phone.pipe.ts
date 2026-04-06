import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
    name:"phonesep",
    standalone:true
})
export class PhonePipe implements PipeTransform{
    transform (value: string, ...args: any[]){
        // return value.charAt().toUpperCase()+ value.slice(1,value.length)
        return value.slice(0,3)+"-"+value.slice(3,6)+"-"+value.slice(6)
    }
}