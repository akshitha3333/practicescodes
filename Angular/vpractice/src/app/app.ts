import { Component, LOCALE_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './model/student_model';
import{CapitalizePipe} from "./pipes/capitalize.pipes"
import { Concatpipe } from './pipes/concate.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { DatedifferPipe } from './pipes/timeago.pipe';
import { CurrencyPipe, DatePipe, DecimalPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[{provide: LOCALE_ID, useValue: 'en-In'}],
  imports: [CapitalizePipe, Concatpipe, PhonePipe,DatedifferPipe, DecimalPipe,CurrencyPipe, DatePipe, I18nPluralPipe , I18nSelectPipe,JsonPipe, LowerCasePipe,UpperCasePipe,TitleCasePipe,PercentPipe,KeyValuePipe,SlicePipe]
})
export class App {
  students: Student[]=[
  { 
    name: "Akshu",
    email:"Akshu@gmail.com",
    status:"active",
    pasttime:'2025-03-01T21:50',
    dob:"2002-10-22T18:51",
    phone:"7075516924",
    emcetRank: 17349,
    yearlyFee:60000,
    aggregate: 9.3,
    backlogs:0,
    gender:"Female",
    marks:{
      java:89,
      python:56,
    }
  },
  { 
    name: "Mahi",
    email:"Mahi@gmail.com",
    status:"active",
    pasttime:'2026-03-05T20:40',
    dob:"2000-10-22T05:54",
    phone:"6305612347",
    emcetRank: 174549,
    yearlyFee:80000,
    aggregate: 9.4,
    backlogs:2,
    gender:"Male",
    marks:{
      java:60,
      python:46,
      ios:75,
    }
  },
  { 
    name: "Pradeep",
    email:"Pradeep@gmail.com",
    status:"active",
    pasttime:'2026-03-10T18:45',
    dob:"2000-10-18T12:00",
    phone:"7032416324",
    emcetRank: 20349,
    yearlyFee:70000,
    aggregate: 8.3,
    backlogs:0,
    gender:"Male",
    marks:{
      java:80,
      python:66,
      php:55
    }
  },
  { 
    name: "Kichu",
    email:"Kichu@gmail.com",
    status:"active",
    pasttime:'2026-02-01T14:30',
    dob:"2001-08-25T03:45",
    phone:"7992246855",
    emcetRank: 10349,
    yearlyFee:90000,
    aggregate: 7.3,
    backlogs:1,
    gender:"Female",
    marks:{
      java:80,
      python:66,
      php:45
    }
  },
  { 
    name: "xxxx",
    email:"xxxx@gmail.com",
    status:"active",
    pasttime:'2026-02-01T14:30',
    dob:"2001-08-25T03:45",
    phone:"7992246855",
    emcetRank: 10349,
    yearlyFee:90000,
    aggregate: 7.3,
    backlogs:5,
    gender:"Other",
    marks:{
      java:80,
      python:66,
      php:45
    }
  }
  ]
  backlogsMessage={
    '=0':"No Backlogs",
    '=1':"1 Backlog",
    'other':"# Backlogs"
  }
  genderMessage={
    'Male':"Boy",
    'Female':"Girl",
    'other':"Other"
  }
}
