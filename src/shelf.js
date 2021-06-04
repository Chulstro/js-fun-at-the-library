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

function listTitles(shelf) {
  shelflist = shelf.map(x => " " + x.title)
  return shelflist.toString().trim()
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  // searchShelf
};
