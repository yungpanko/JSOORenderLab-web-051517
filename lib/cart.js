class Cart {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  render() {
    $('.cart').empty()
    this.items.map(item => {
      $('.cart').append(item.renderCart())
    })
  }

}
