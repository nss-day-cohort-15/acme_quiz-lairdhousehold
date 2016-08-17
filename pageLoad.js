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
    $(".bombArea").append(`
      <div class="col-md-4" height: 20%>
      <div class="products" style="background-color: rgba(0, 0, 255, 0.3); color: black">
      <h3>Category: ${categories[types[safeFire.type].category].name}</h3>
      <h4>Type: ${types[safeFire.type].name}</h4>
      <h5>Product: ${safeFire.name}</h5>
      <P>${safeFire.description}</p>
      </div>
      </div>
      `)})
}

function destruxtion(){
  $(".bombArea").empty();
  destruction.forEach(function(deathFire){
    $(".bombArea").append(`
      <div class="col-md-4">
      <div class="products" style="background-color: rgba(0, 0, 255, 0.3); color: black">
      <h3>Category: ${categories[types[deathFire.type].category].name}</h3>
      <h4>Type: ${types[deathFire.type].name}</h4>
      <h5>Product: ${deathFire.name}</h5>
      <P>${deathFire.description}</p>
      </div>
      </div>
      `)

    console.log(destruction)
  })
  }
}
return boomStix
})
(Xplode || {})
Xplode.loadJson(Xplode.loadPage)
