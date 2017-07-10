class List {
  constructor() {
    this.items = []
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(listItem) {
    this.items = this.items.filter(item => {
      return item.name + item.price !== listItem.name + listItem.price
    })
  }

  render() {
    $('.list').empty()
    this.items.map(item => {
      $('.list').append(item.renderList())
    })
  }
}
