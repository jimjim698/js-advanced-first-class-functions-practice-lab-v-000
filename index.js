// Code your solution in this file!

function logDriverNames(driver){
  driver.forEach(function(d){
    return console.log(d.name)
  })
}

function logDriversByHometown(driver,homeTown){
 let htArray= driver.filter(function (d){
   return d.hometown === homeTown
 })
 htArray.forEach(function(d){
   return console.log(d.name)
 })
}

function driversByRevenue(drivers){
  return drivers.slice(0).sort(function (a,b){
    return a.revenue - b.revenue
  })
}

function driversByName(drivers){
  return drivers.slice(0).sort(function (a,b){
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers){
  let totalPrice = 0 
   drivers.forEach(function(d){
    totalPrice += d.revenue
  })
  return totalPrice
}

const getTotalAmountForProducts = function (products) {
  let totalPrice = 0;
 
  products.forEach(function (product) {
    totalPrice += product.price;
  });
 
  return totalPrice;
};





