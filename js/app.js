'use strict';

// GLOBAL VARIABLES

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var numberOfHours = times.length;

// STORE CONSTRUCTOR - properties

function Stores(location, minCust, maxCust, aveCookiesBought, hourlyTotalsArr, dailyTotal) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveCookiesBought = aveCookiesBought;
  this.hourlyTotalsArr = hourlyTotalsArr;
  this.dailyTotal = dailyTotal;
}

// STORE CONSTRUCTOR - methods

// Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
Stores.prototype.customersPerHour = function () {
  //console.log('min' + this.minCust);
  return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
};

// Generate hourly & daily totals of cookies, store object passed as a parameter
Stores.prototype.cookieTotals = function () {
  for (var i = 0; i < numberOfHours; i++) {
    //console.log('random number of customers' + this.customersPerHour());
    var cookiesInAnHour = parseInt(this.aveCookiesBought * this.customersPerHour());
    this.hourlyTotalsArr.push(cookiesInAnHour);
    this.dailyTotal = this.dailyTotal + cookiesInAnHour;
  }
};

// Add row displaying a store's cookie sales
Stores.prototype.renderRow = function () {

  // Populate the array for hourly cookie sales
  this.cookieTotals();

  // Identify the parent
  var cookieTable = document.getElementById('cookie-count-container');

  // Create a row item to display store informtion
  var storeRow = document.createElement('tr');

  // Add store name to the storeTable
  var storeNameH2 = document.createElement('td');
  storeNameH2.textContent = this.location;
  storeRow.appendChild(storeNameH2);

  for (var l = 0; l < this.hourlyTotalsArr.length; l++) {
    // Add hourly cookie sales
    var hourlySalesTd = document.createElement('td');
    hourlySalesTd.textContent = this.hourlyTotalsArr[l];
    storeRow.appendChild(hourlySalesTd);
  }

  // Add daily cookie sales
  var dailySalesTd = document.createElement('td');
  dailySalesTd.textContent = this.dailyTotal;
  storeRow.appendChild(dailySalesTd);

  // Add store row to the table
  cookieTable.appendChild(storeRow);

};

// Create store objects

var firstPike = new Stores('1st and Pike', 23, 65, 6.3, [], 0);
var seatac = new Stores('SeaTac Airport', 3, 24, 1.2, [], 0);
var seattleCenter = new Stores('Seattle Center', 11, 38, 3.7, [], 0);
var capHill = new Stores('Capitol Hill', 20, 38, 2.3, [], 0);
var alki = new Stores('Alki', 2, 16, 4.6, [], 0);

var storesArr = [firstPike, seatac, seattleCenter, capHill, alki];

// Function to add header row to table

var createHeaderRow = function () {
  // Identify the parent
  var cookieTable = document.getElementById('cookie-count-container');

  // Create a header row
  var headerRow = document.createElement('tr');

  // Create first column header in the heaer row with "Store Location"
  var storeColumnHeading = document.createElement('th');
  storeColumnHeading.textContent = 'Store Location';
  headerRow.appendChild(storeColumnHeading);

  // Fill the rest of the column headers with times
  for (var k = 0; k < times.length; k++) {
    var timeHeading = document.createElement('th');
    timeHeading.textContent = times[k];
    headerRow.appendChild(timeHeading);
  }
  cookieTable.appendChild(headerRow);

  // Create last column header in the hedaer row with "Daily Location Total"
  var dailyTotalHeading = document.createElement('th');
  dailyTotalHeading.textContent = 'Daily Location Total';
  headerRow.appendChild(dailyTotalHeading);
};


createHeaderRow();

for (var j = 0; j < storesArr.length; j++) {
  storesArr[j].renderRow();
}




