 export function findAge(current_date, current_month, current_year, birth_date,
    birth_month, birth_year) {
    // days of every month 
   let month = [31, 28, 31, 30, 31, 30, 31,31, 30, 31, 30, 31]
  
    // if birth date is greater than current date 
    // then do not count this month and add 30 
    // to the date so as to subtract the date and 
    // get the remaining days 
    if (birth_date > current_date) {
      current_date = current_date + month[birth_month - 1];
      current_month = current_month - 1;
    }
  
    // if birth month exceeds current month, then do 
    // not count this year and add 12 to the month so 
    // that we can subtract and find out the difference 
    if (birth_month > current_month) {
      current_year = current_year - 1;
      current_month = current_month + 12;
    }
  
    // calculate date, month, year 
    var calculated_date = current_date - birth_date;
    var calculated_month = current_month - birth_month;
    var calculated_year = current_year - birth_year;
  
    // print the present age 
    document.querySelector('.yo').innerHTML = calculated_year;
    document.querySelector('.mo').innerHTML = calculated_month;
    document.querySelector('.do').innerHTML = calculated_date;
  
  }
 

 