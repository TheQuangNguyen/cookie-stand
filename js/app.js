'use strict';

var time = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


/////////////////// Setting up object literals for each location ////////////////////////////// 
var PikeAnd1st = { 
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  cookieSale: [],
  cookiePurchase: function() { 
    var numCustomer;
    var numCookies;
    var cookieHourSale = [];

    for (var i = 0; i < time.length; i++) {

    numCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

    numCookies = numCustomer * this.avgCookieSale;
    
    cookieHourSale[i] = Math.floor(numCookies);
    }
    this.cookieSale = (cookieHourSale);
  },
  cookieUpdate: function () { 

    var place = document.getElementById("pikeAnd1st");

    for (var i = 0; i < time.length; i++) { 

    var hourCookie = document.createElement('li');
    hourCookie.textContent = `${time[i]}: ${this.cookieSale[i]} cookies`;
    place.appendChild(hourCookie);

    }
    var total = this.cookieSale.reduce(sum);
    hourCookie.textContent = `Total: ${total} cookies`;
    place.appendChild(hourCookie);
  }
};

var SeaTac = { 
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  cookieSale: [],
  cookiePurchase: function() { 
    var numCustomer;
    var numCookies;
    var cookieHourSale = [];

    for (var i = 0; i < time.length; i++) {

    numCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

    numCookies = numCustomer * this.avgCookieSale;
    
    cookieHourSale[i] = Math.floor(numCookies);
    }
    this.cookieSale = (cookieHourSale);
  },
  cookieUpdate: function () { 

    var place = document.getElementById("seaTac");

    for (var i = 0; i < time.length; i++) { 

    var hourCookie = document.createElement('li');
    hourCookie.textContent = `${time[i]}: ${this.cookieSale[i]} cookies`;
    place.appendChild(hourCookie);

    }
    var total = this.cookieSale.reduce(sum);
    hourCookie.textContent = `Total: ${total} cookies`;
    place.appendChild(hourCookie);
  }
};

var SeattleCenter = { 
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  cookieSale: [],
  cookiePurchase: function() { 
    var numCustomer;
    var numCookies;
    var cookieHourSale = [];

    for (var i = 0; i < time.length; i++) {

    numCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

    numCookies = numCustomer * this.avgCookieSale;
    
    cookieHourSale[i] = Math.floor(numCookies);
    }
    this.cookieSale = (cookieHourSale);
  },
  cookieUpdate: function () { 

    var place = document.getElementById("seattleCenter");

    for (var i = 0; i < time.length; i++) { 

    var hourCookie = document.createElement('li');
    hourCookie.textContent = `${time[i]}: ${this.cookieSale[i]} cookies`;
    place.appendChild(hourCookie);

    }
    var total = this.cookieSale.reduce(sum);
    hourCookie.textContent = `Total: ${total} cookies`;
    place.appendChild(hourCookie);
  }
};

var CapitolHill = { 
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  cookieSale: [],
  cookiePurchase: function() { 
    var numCustomer;
    var numCookies;
    var cookieHourSale = [];

    for (var i = 0; i < time.length; i++) {

    numCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

    numCookies = numCustomer * this.avgCookieSale;
    
    cookieHourSale[i] = Math.floor(numCookies);
    }
    this.cookieSale = (cookieHourSale);
  },
  cookieUpdate: function () { 

    var place = document.getElementById("capitolHill");

    for (var i = 0; i < time.length; i++) { 

    var hourCookie = document.createElement('li');
    hourCookie.textContent = `${time[i]}: ${this.cookieSale[i]} cookies`;
    place.appendChild(hourCookie);

    }
    var total = this.cookieSale.reduce(sum);
    hourCookie.textContent = `Total: ${total} cookies`;
    place.appendChild(hourCookie);
  }
};

var Alki = { 
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  cookieSale: [],
  cookiePurchase: function() { 
    var numCustomer;
    var numCookies;
    var cookieHourSale = [];

    for (var i = 0; i < time.length; i++) {

    numCustomer = Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;

    numCookies = numCustomer * this.avgCookieSale;
    
    cookieHourSale[i] = Math.floor(numCookies);
    }
    this.cookieSale = (cookieHourSale);
  },
  cookieUpdate: function () { 

    var place = document.getElementById("alki");

    for (var i = 0; i < time.length; i++) { 

    var hourCookie = document.createElement('li');
    hourCookie.textContent = `${time[i]}: ${this.cookieSale[i]} cookies`;
    place.appendChild(hourCookie);

    }
    var total = this.cookieSale.reduce(sum);
    hourCookie.textContent = `Total: ${total} cookies`;
    place.appendChild(hourCookie);
  }
}

function sum(total,num){ 
  return total + num;
}
////////////////////////// Calling the object methods and have it update on sales.html ///////////////////////////////////////////

PikeAnd1st.cookiePurchase();
PikeAnd1st.cookieUpdate();
SeaTac.cookiePurchase();
SeaTac.cookieUpdate();
SeattleCenter.cookiePurchase();
SeattleCenter.cookieUpdate();
CapitolHill.cookiePurchase();
CapitolHill.cookieUpdate()
Alki.cookiePurchase();
Alki.cookieUpdate();


