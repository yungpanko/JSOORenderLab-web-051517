$(function () {
  const list = new List()
  const cart = new Cart()
  listListener(list)
  addToCart(cart, list)
});

function listListener(list) {
  $('button').on("click", function () {
    let name = $('#name').val()
    let price = $('#price').val()
    let newItem = new Item(name, price)
    list.addItem(newItem)
    list.render()
    $('#name').val('')
    $('#price').val('')
  })
}

function addToCart(cart, list) {
  $('.list').on("click", '.add-cart', (event) => {
    let name = event.target.attributes.itemName.value
    let price = event.target.attributes.itemPrice.value
    let listItem = new Item(name, price)
    cart.addItem(listItem)
    list.removeItem(listItem)
    list.render()
    cart.render()
  })

}
