if(Products.find().count() === 0) {
    Products.insert({title: 'Details 1', price: '200$', link: ''});
    Products.insert({title: 'Details 2', price: '400$', link: ''});
    Products.insert({title: 'Details 3', price: '500$', link: ''});
}