class Item {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  renderList() {
    return `<li class="item">${this.name} - ${this.price}
    <a href="#" class="add-cart" itemName="${this.name}"
    itemPrice="${this.price}">Add to cart</a></li>`
  }

  renderCart() {
    return `<li class="item"><p itemName="${this.name}" itemPrice="${this.price}">
    ${this.name} - ${this.price}
    </p></li>`
  }
}
