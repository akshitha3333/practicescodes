let d=new Date()
console.log(d);
//display methods
// console.log(d.toISOString());//GMT 00
// console.log(d.toLocaleString());//current location GMT 05:30 (short time) 
// console.log(d.toString());//wed dec 31 2025.... long time
// console.log( d.toLocaleDateString());//only date 
// console.log(d.toLocaleTimeString());//only time 
// console.log(d.toDateString());
// console.log(d.toTimeString());
// //getters
//console.log(d.getFullYear());
///console.log(d.setMonth(6));
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay(4));
// console.log(d.getTimezoneOffset());
// console.log(d.getTime());
// let d=new Date()
// console.log(d);
// // //setters
// d.setFullYear(2027)
// d.setMonth(2)
// d.setDate(22)
// d.setHours(5)
// d.setMinutes(25)
// d.setSeconds(32)
// d.setMilliseconds(788)
// d.setTime()
//  //utc
//  d.setUTCFullYear(2027)
// d.setUTCMonth(2)
// d.setUTCDate(22)
// d.setUTCHours(5)
// d.setUTCMinutes(25)
// d.setUTCSeconds(32)
// d.setUTCMilliseconds(788)
// console.log(d.toISOString());
// console.log(d.toString());

// //2026
// let d=new Date(1000*60*60*24*31*12)
// console.log(d.toISOString());

// let d=new Date()
// let time=d.getTime()
// console.log(time);
// console.log(time/1000);
//1000 =>millisec
//1000*60=>min
//1000*60*60=>hours
//1000*60*60*24=>Days
//1000*60*60*24*30=>Months
//1000*60*60*24*30*12=>years


// let d=new Date("2026-01-02T09:57:23.500z")//1970-1-1T0:0:0.0z
// let d2=new Date("2027-01-02T09:57:23.500z")
// console.log(d);
// console.log(d2);
// let diff=d2.getTime()-d.getTime()

// let years=parseInt(diff/(1000*60*60*24*30*12))
// let remaing=diff%( 1000*60*60*24*30*12)

// let Months=parseInt(remaing/(1000*60*60*24*30))
// remaing=remaing%(1000*60*60*24*30)

// let days=parseInt(remaing/(1000*60*60*24))
// remaing=remaing%(1000*60*60*24)
 
// let hours=parseInt(remaing/(1000*60*60))
// remaing=remaing%(1000*60*60)

// let minutes=parseInt(remaing/(1000*60))
// remaing=remaing%(1000*60)

// let seconds=parseInt(remaing/1000)
// remaing=remaing%1000

// let millisecounds=parseInt(remaing)

// console.log('years:'+years+' months:'+Months+' days:'+days+' hours:'+hours+' minutes:'+minutes+' seconds:'+seconds+' milliseconds:'+millisecounds);

// let d=new Date(2025,9,12,2,45,25,500)
// console.log(d.toString());

// let d2=new Date("dec 12 2024")
// console.log(d2.toString());
///comparison
// let d=new Date("2025-12-30")
// let d2=new Date("2025-9-30")
// console.log(d.getTime()==d2.getTime());
// console.log(d.getTime()>d2.getTime());
// console.log(d<d2);






