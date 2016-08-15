var Xplode = (function(call){
  var types = null;
  var categories = null;
  var products = null;
    call.loadJson = function (loadPage){
      Promise.all([
      $.getJSON('categories.json'),
      $.getJSON('types.json'),
      $.getJson('products.json'),
      ])
        .then(function(catalog{
          catagories = catalog[0].catagories
          types = catalog[1].types
          products = catalog[2].products[0]
          loadPage(categories,types, products)

        })
    }
return call;

})

(Xplode || {})
