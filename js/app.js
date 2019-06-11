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

// Create store objects

var firstPike = new Stores('1st and Pike', 23, 65, 6.3, [], 0);
var seatac = new Stores('SeaTac Airport', 3, 24, 1.2, [], 0);
var seattleCenter = new Stores('Seattle Center', 11, 38, 3.7, [], 0);
var capHill = new Stores('Capitol Hill', 20, 38, 2.3, [], 0);
var alki = new Stores('Alki', 2, 16, 4.6, [], 0);

var storesArr = [firstPike, seatac, seattleCenter, capHill, alki];


// Function to add stores & totals to the page

var displayStoreSales = function () {
  for (var j = 0; j < storesArr.length; j++) {

    // Populate the array for hourly cookie sales
    storesArr[j].cookieTotals();

    // Identify the parent
    var cookieContainerUlEl = document.getElementById('cookie-count-container');

    // Create list item to hold store informtion
    var storeLi = document.createElement('li');

    // Add store name to the storeLi
    var storeNameH2 = document.createElement('h2');
    storeNameH2.textContent = storesArr[j].location;
    storeLi.appendChild(storeNameH2);

    // Add hourly totals to the storeli
    var hourlyTotalList = document.createElement('ul');
    for (var k = 0; k < times.length; k++) {
      var hourTotalLi = document.createElement('li');
      hourTotalLi.textContent = times[k] + ': ' + storesArr[j].hourlyTotalsArr[k];
      hourlyTotalList.appendChild(hourTotalLi);
    }

    // Add daily total to the storeLi
    var dailyTotalLi = document.createElement('li');
    dailyTotalLi.textContent = 'Total: ' + storesArr[j].dailyTotal;
    hourlyTotalList.appendChild(dailyTotalLi);

    //hourlyTotalList.textContent = storesArr[j].hourlyTotalsArr;
    storeLi.appendChild(hourlyTotalList);

    // Add the storeLi into the cookieContainer
    cookieContainerUlEl.appendChild(storeLi);
  }
};

displayStoreSales();
