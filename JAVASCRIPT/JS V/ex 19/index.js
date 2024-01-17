const Author = require("./author");

const name = new Author("Renan Cardoso");
const post = name.insertPost(
  "A força da tenologia",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
)

post.insertComment ('Achei ótimo')
post.insertComment ('Perfeito')

console.log(name)
console.log(post)


