'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var customerControlCurve = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];


// This is constructor function that stores common properties among the store
// minNumStaffPerHour = minimum number of staff working at every hour 
// numCustomerPerStaff = number of customers that one staff member can handle
// totalCookiesPerDay = the sum of all the cookies sold from 6am to 8pm for one store
// cookieSaleHour = array that holds the number of cookies sold per hour for one store
// customerHour = array that holds the number of customers per hour for one store
// numStaffPerHour = array that holds the number of staff members at every hour for one store
function Store(location, minCustomer, maxCustomer, avgCookiesPerHour) { 
  this.location = location;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPerHour = avgCookiesPerHour;
  this.minNumStaffPerHour = 2;
  this.numCustomerPerStaff = 20;
  this.totalCookiesPerDay = 0;
  this.cookieSaleHour = [];
  this.customerHour = [];
  this.numStaffPerHour = [];
  Store.list.push(this);
}

// This is the constructor's prototype that holds common functions that are accessible to all location of the Store constructor
Store.prototype = { 

  // Calculate cookies sold per hour and push it into the array cookieSaleHour. Calculation uses the control curve for the max customer at every hour and use that max to calculate the random number of customers which then use to calculate number of cookie sold per hour. 
  cookiesPerHour: function() { 
    var numCustomer;
    var numCookies;
    var curveMaxCustomer;

    for (var i=0; i < time.length; i++) { 
      curveMaxCustomer = this.maxCustomer * customerControlCurve[i];
      numCustomer = Math.floor(Math.random() * (curveMaxCustomer - this.minCustomer + 1)) + this.minCustomer;
      this.customerHour.push(Math.round(numCustomer));

      numCookies = numCustomer * this.avgCookiesPerHour;
      this.cookieSaleHour.push(Math.round(numCookies));
    }
    this.totalCookiesPerDay = this.cookieSaleHour.reduce(sum);
  },

  // Calculate number of staff needed to work at every hour and store it in the array numStaffPerHour
  staffPerHour: function() { 
    var numStaff;
    for (var i = 0; i < time.length; i++) {
      numStaff = this.customerHour[i]/this.numCustomerPerStaff;
      if (numStaff < this.minNumStaffPerHour) { 
        numStaff = 2;
        this.numStaffPerHour.push(numStaff);
      } else { 
        this.numStaffPerHour.push(Math.round(numStaff));
      }
    }
  },

  // Render the information for the cookies sold per hour for each store to the sales.html in a table format. 
  cookieRender: function() { 
    var tableBody = document.getElementById('cookie-table-body');
    var tableRow = document.createElement('tr');
    var cell = document.createElement('td');

    cell.textContent = this.location;
    tableRow.appendChild(cell);

    for (var i = 0; i < time.length; i++) {
      cell = document.createElement('td'); 
      cell.textContent = this.cookieSaleHour[i];
      tableRow.appendChild(cell);
    }

    cell = document.createElement('td');
    cell.textContent = this.totalCookiesPerDay;
    tableRow.appendChild(cell);

    tableBody.appendChild(tableRow);
  },

  // Render the information for the amount of staff per hour for each store to the sales.html in a table format. 
  staffRender: function() { 
    var tableBody = document.getElementById('staff-table-body');
    var tableRow = document.createElement('tr');
    var cell = document.createElement('td');

    cell.textContent = this.location;
    tableRow.appendChild(cell);

    for (var i = 0; i < time.length; i++) {
      cell = document.createElement('td'); 
      cell.textContent = this.numStaffPerHour[i];
      tableRow.appendChild(cell);
    }

    cell = document.createElement('td');
    cell.textContent = this.numStaffPerHour.reduce(sum);
    tableRow.appendChild(cell);

    tableBody.appendChild(tableRow);
  }
}

// Render the header row that contains the times of each hour of the table for both cookies sold per hour and the amount of staff per hour. Takes in an id which indicates which table to put the header in.
function headerRow(id) { 
  var tableHeader = document.getElementById(id);
  var tableRow = document.createElement('tr');
  var cell = document.createElement('th');

  cell.textContent = ' ';
  tableRow.appendChild(cell);

  for (var i= 0; i < time.length; i++) { 
    cell = document.createElement('th');
    cell.textContent = time[i];
    tableRow.appendChild(cell);
  }

  cell = document.createElement('th');
  cell.textContent = 'Daily Location Total';
  tableRow.appendChild(cell);

  tableHeader.appendChild(tableRow);
}

// Render the footer row to show the sum of the cookies sold per hour for every store. Also calculate the sum of cookies sold per hour of every store.   
function cookieFooterRow() { 
  var tableFooter = document.getElementById("cookie-table-foot");
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  var total;

  cell.textContent = "Totals";
  tableRow.appendChild(cell);

  for (var i = 0; i < time.length; i++) { 
    cell = document.createElement('td');
    total = 0;
    for (var j = 0; j < Store.list.length; j++) {
      total += Store.list[j].cookieSaleHour[i];
    }
    cell.textContent = total;
    tableRow.appendChild(cell);
  }

  cell = document.createElement('td');
  total = 0;
  for (var k = 0; k < Store.list.length; k++) { 
    total += Store.list[k].totalCookiesPerDay;
  }
  cell.textContent = total;
  tableRow.appendChild(cell);

  tableFooter.appendChild(tableRow);
}

// Calculate and render the sum of the hours worked by staff at every hour for every store. 
function staffFooterRow() { 
  var tableFooter = document.getElementById("staff-table-foot");
  var tableRow = document.createElement('tr');
  var cell = document.createElement('td');
  var total;

  cell.textContent = "Totals";
  tableRow.appendChild(cell);

  for (var i = 0; i < time.length; i++) { 
    cell = document.createElement('td');
    total = 0;
    for (var j = 0; j < Store.list.length; j++) {
      total += Store.list[j].numStaffPerHour[i];
    }
    cell.textContent = total;
    tableRow.appendChild(cell);
  }

  cell = document.createElement('td');
  total = 0;
  for (var k = 0; k < Store.list.length; k++) { 
    total += Store.list[k].numStaffPerHour.reduce(sum);
  }
  cell.textContent = total;
  tableRow.appendChild(cell);

  tableFooter.appendChild(tableRow);
}

function sum(total, num) { 
  return total + num;
}


// Initializing the store list to have every new instance of Store be put inside the list
Store.list = [];

new Store('1st and Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

// Call the functions to calculate the cookies per hour and staff per hour for every store.
for (var i = 0; i < Store.list.length; i++) { 
  Store.list[i].cookiesPerHour();
  Store.list[i].staffPerHour();
}

headerRow("cookie-table-head");

// Use the cookie render function for every store
for (var i = 0; i < Store.list.length; i++) { 
  Store.list[i].cookieRender();
}
cookieFooterRow();

headerRow("staff-table-head");

// Use the staff render function for every store.
for (var i = 0; i < Store.list.length; i++) { 
  Store.list[i].staffRender();
}
staffFooterRow();

