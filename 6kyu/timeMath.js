/*
Time Math by Austin Haws

Given two times in hours, minutes, and seconds (ie '15:04:24'), add or subtract them. This is a 24 hour clock. Output should be two digits for all numbers: hours, minutes, seconds (ie '04:02:09').

timeMath('01:24:31', '+', '02:16:05') === '03:40:36'

timeMath('01:24:31', '-', '02:31:41') === '22:52:50'
*/

function timeMath(time1, op, time2) {
    // Split time strings into arrays.
    const leftTime = time1.split(':');
    const rightTime = time2.split(':');

    // Calculate sum or difference of each unit i.e. hour, minute, and seconds based on the operator parameter.
    let sd = op === '+' ? +leftTime[2] + +rightTime[2] : +leftTime[2] - +rightTime[2];
    let md = op === '+' ? +leftTime[1] + +rightTime[1] : +leftTime[1] - +rightTime[1];
    let hd = op === '+' ? +leftTime[0] + +rightTime[0] : +leftTime[0] - +rightTime[0];
    
    // Add a minute if seconds are equal to or greater than 60.
    if (sd >= 60) {
      sd -= 60;
      md++;
    }
    
    // Add an hour if minutes are equal to or greater than 60.
    if (md >= 60) {
      md -= 60;
      hd++;
    }
    
    // Roll over if hours are greater than 24.
    if (hd >= 24) {
      hd -= 24;
    }
    
    // "Borrow" 60 seconds from the minute to complete the subtraction.
    if (sd < 0) {
      sd += 60;
      md--;
    }
    
    // "Borrow" 60 minutes from the hour to complete the subtraction.
    if (md < 0) {
      md += 60;
      hd--;
    }
    
    // Roll over and restart from 24 hour.
    if (hd < 0) {
      hd += 24
    }
    
    // Format the result appropriately.
    return [hd, md, sd].map(num => String(num).padStart(2, '0')).join(':');
  }
  