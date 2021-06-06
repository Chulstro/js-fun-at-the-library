const searchShelf = require('./shelf').searchShelf;
const unshelfBook = require('./shelf').unshelfBook;

function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  library.shelves[book.genre].unshift(book)
}

function checkoutBook(library, title, shelfName) {
  shelf = library.shelves[shelfName]
  if (searchShelf(shelf, title)) {
    unshelfBook(title, shelf)
    return `You have now checked out ${title} from the ${library.name}`
  }
  else {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
