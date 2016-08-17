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
$("#fireworx").click(fireworx);
$("#destrux").click(destruxtion);


function fireworx(){
  $(".bombArea").empty();
  fireworks.forEach(function(safeFire){
    $(".bombArea").append(`<h3>Category: ${categories[types[safeFire.type].category].name}</h3> `)})
}

function destruxtion(){
  $(".bombArea").empty();
  destruction.forEach(function(deathFire){
    $(".bombArea").append(`ham`)

    console.log(destruction)
  })
  }
}
return boomStix
})
(Xplode || {})
Xplode.loadJson(Xplode.loadPage)
