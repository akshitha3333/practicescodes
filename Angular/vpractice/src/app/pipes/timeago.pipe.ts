import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datediffer'
})
export class DatedifferPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let d1=new Date(value);
    let d2=new Date();
    let diff=d2.getTime()-d1.getTime();
    let yearDiff=Math.floor(diff/(1000*60*60*24*30*12));
    let monthDiff=Math.floor(diff/(1000*60*60*24*30));
    let dayDiff=Math.floor(diff/(1000*60*60*24));
    let hourDiff=Math.floor(diff/(1000*60*60));
    let minDiff=Math.floor(diff/(1000*60));
     
    if(yearDiff>0){
      return yearDiff+"years ago"
    }
    if(monthDiff>0){
      return monthDiff+"months ago"
    }
    if(dayDiff>0){
      return dayDiff+"days ago"
    }
    if(hourDiff>0){
      return hourDiff+"hours ago"
    }
    if(minDiff>0){
      return minDiff+"mins ago"
    }
    return "just now"
  }
}