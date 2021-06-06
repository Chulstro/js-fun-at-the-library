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
}

module.exports = Librarian;
