const Comment = require("./comment")

class Post {
    constructor(title, content, autor) {
        this.title = title
        this.content = content
        this.autor = autor 
        this.comment = []
    }
    insertComment (conteudo) {
        this.comment.push(new Comment (conteudo))
    }
}

module.exports = Post