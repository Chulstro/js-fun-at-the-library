function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  };
}

function saveReview(review, array) {
  if (array.includes(review)) {
    console.log("Review is already present")
  } else {
    return array.push(review)
  }
}

function calculatePageCount(title) {
  return title.length * 20
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}
