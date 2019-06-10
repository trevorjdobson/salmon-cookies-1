'use strict';

// STORE OBJECTS

var firstPike = {
  // Properties
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  aveCookiesBought: 6.3,
  hourlyTotalsArr: [],
  dailyTotal: 0,

  // Methods
  // Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
  customersPerHour: function () {
    //console.log('min' + this.minCust);
    return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },

};

var seatac = {
  // Properties
  location: 'SeatTac Airport',
  minCust: 3,
  maxCust: 24,
  aveCookiesBought: 1.2,
  hourlyTotalsArr: [],
  dailyTotal: 0,

  // Methods
  // Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
  customersPerHour: function () {
    //console.log('min' + this.minCust);
    return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },

};

var seattleCenter = {
  // Properties
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  aveCookiesBought: 3.7,
  hourlyTotalsArr: [],
  dailyTotal: 0,

  // Methods
  // Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
  customersPerHour: function () {
    //console.log('min' + this.minCust);
    return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },

};

var capHill = {
  // Properties
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  aveCookiesBought: 2.3,
  hourlyTotalsArr: [],
  dailyTotal: 0,

  // Methods
  // Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
  customersPerHour: function () {
    //console.log('min' + this.minCust);
    return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },

};

var alki = {
  // Properties
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  aveCookiesBought: 4.6,
  hourlyTotalsArr: [],
  dailyTotal: 0,

  // Methods
  // Returns a random number of customers between the given minimum and maximum (includes both the minimum & maximum number)
  customersPerHour: function () {
    //console.log('min' + this.minCust);
    return parseInt(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust);
  },

};

// GLOBAL VARIABLES

var times = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var numberOfHours = times.length;
var stores = [firstPike, seatac, seattleCenter, capHill, alki];


// GLOBAL FUNCTIONS

// Generate hourly & daily totals of cookies, store object passed as a parameter
function cookieTotals(whichStore) {
  for (var i = 0; i < numberOfHours; i++) {
    //console.log('random number of custormers' + whichStore.customersPerHour());
    var cookiesInAnHour = parseInt(whichStore.aveCookiesBought * whichStore.customersPerHour());
    whichStore.hourlyTotalsArr.push(cookiesInAnHour);
    whichStore.dailyTotal = whichStore.dailyTotal + cookiesInAnHour;
  }
}


// Populate cookie totals
for (var i = 0; i < stores.length; i++) {
  cookieTotals(stores[i]);
}


// Add stores & totals to the page

for (var j = 0; j < stores.length; j++) {
  // Identify the parent
  var cookieContainerUlEl = document.getElementById('cookie-count-container');

  // Create list item to hold store informtion
  var storeLi = document.createElement('li');

  // Add store name to the storeLi
  var storeNameH2 = document.createElement('h2');
  storeNameH2.textContent = stores[j].location;
  storeLi.appendChild(storeNameH2);

  // Add hourly total to the storeli
  var hourlyTotalList = document.createElement('p');
  hourlyTotalList.textContent = stores[j].hourlyTotalsArr;
  storeLi.appendChild(hourlyTotalList);

  // Add daily total to the storeLi
  var dailyTotalP = document.createElement('p');
  dailyTotalP.textContent = stores[j].dailyTotal;
  storeLi.appendChild(dailyTotalP);

  // Add the storeLi into the cookieContainer
  cookieContainerUlEl.appendChild(storeLi);
}