function shelfBook(book, shelf) {
  if (shelf.length < 3)
    shelf.unshift(book);
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title.includes(title)) {
      shelf.splice(i, 1);
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};
