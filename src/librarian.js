var {
  searchShelf
}=require('./shelf')

var {
  checkoutBook
}=require('./library')

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, morning) {
    if (morning) {
      return `Good morning, ${patronName}!`
    }
    else {
      return `Hello, ${patronName}!`
    }
  }

  findBook(title) {
    var shelves = Object.keys(this.library.shelves)
    for (let i of shelves) {
      if (searchShelf(this.library.shelves[i], title)) {
        checkoutBook(this.library, title, i)
        return `Yes, we have ${title}`
        break
      }
      else if (i = shelves.length) {
        return `Sorry, we do not have ${title}`
      }
    }
  }
}

module.exports = Librarian;
