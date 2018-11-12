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
  return drivers.slice(0).sort(function(a,b){
    return a.name 
  })
}






