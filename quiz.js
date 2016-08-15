var Xplode = (function(boomStix){
  var types = null;
  var categories = null;
  var products = null;
    boomStix.loadJson = function (loadPage){
      Promise.all([
      $.getJSON('categories.json'),
      $.getJSON('types.json'),
      $.getJSON('products.json'),
      ])
        .then(function(catalog){
          console.log(catalog)
          categories = catalog[0].categories
          types = catalog[1].types
          products = catalog[2].products[0]
          loadPage(categories,types, products)

        })
    }
return boomStix;

})

(Xplode || {})

