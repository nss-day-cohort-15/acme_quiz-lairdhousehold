var Xplode = (function(boomStix){
  var fireworks=[];
  var destruction =[];
boomStix.loadPage = function(categories, types, products){
    for(var i in products){
      if (products[i].type <=2){
        fireworks.push(products[i]);
      }
      else {
        destruction.push(products[i]);

      }
  }
$("#").click("fireworx");
$("#").click("destruxtion");
console.log(fireworks)
function fireworx(){
  $("").empty();
  fireworks.forEach(function(safeFire){
    $("#").append(`  `)})
function destruxtion(){
  $("").empty();
  destruction.forEach(function(deathFire){
    $("#").append(`

    console.log(destruction)
  })
}
  }
}
return boomStix
})
(Xplode || {})
Xplode.loadJson(Xplode.loadPage)
