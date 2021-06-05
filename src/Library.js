function createLibrary (name) {
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

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
