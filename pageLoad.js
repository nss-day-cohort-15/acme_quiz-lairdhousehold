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
    $("#").append(`

  `)})
function destruxtion(){
  $("").empty();
  destruction.forEach(function(deathFire){
    $("#").append(`
      <div class ="col-md-3">
      <div class="display">
      <h3>Category</h3>
      <h3>Type</h3>
      <h5>Name</h5>
      <h5>Description</h5>
      </div> </div>`)
    console.log(destruction)
  })
}
  }
}
return boomStix
})
(Xplode || {})
Xplode.loadJson(Xplode.loadPage)
