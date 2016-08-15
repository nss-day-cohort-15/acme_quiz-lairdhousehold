var Xplode = (function(call){
  var fireworks=[]
  var desruction =[]
  call.loadPage = (categories, types, products){
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

function fireworks(){
  $("#output").empty()
  fireworks.forEach(function(safeFire){
    $("#output").append('
      <div class ="col-md-3">
      <div class ="display">
      <h3>Category
      <h3>Type
      <h5>Name ')

  })

  $()
  }
}
})
