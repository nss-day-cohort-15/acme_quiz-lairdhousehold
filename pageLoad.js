var Xplode = (function(boom){
  var fireworks=[]
  var desruction =[]
loadPage =  function (categories, types, products){
    for(var i in products){
      if (products[i].type <=2){
        fireworks.push(products[i])
      }
      else {
        destruction.push(products[i])

      }
  }
$("#fireworks").click("fireworks")
$("#destruction").click("destruction")
console.log(fireworks)
function fireworks(){
  $("#output").empty()
  fireworks.forEach(function(safeFire){
    $("#output").append(`
      <div class ="col-md-3">
      <div class="display">
      <h3>Category</h3>
      <h3>Type</h3>
      <h5>Name</h5>
      <h5>Description</h5>
      </div> </div>`)})


  }
}
return loadPage
})
(Xplode || {})
Xplode.loadPage
