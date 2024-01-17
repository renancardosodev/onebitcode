class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(qnt){
        this.inStock += qnt
    }
    calculateDiscount(desc){
        return this.price - ((this.price * desc)/100)
    }
}

const prod = new Product('sabão', 'rico em vitamina E e minerais nobres', 7.90)
prod.addToStock(5)
console.log(`O valor total com desconto é de R$${prod.calculateDiscount(20)}`)
console.log(prod)