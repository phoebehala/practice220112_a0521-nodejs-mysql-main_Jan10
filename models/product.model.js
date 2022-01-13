const db = require('../util/database')

module.exports = class Products {
    constructor(id, title, imageUrl, description, price) {
        this.id = id
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }

    save(){
        // ? >>> dynamic valuable (a secure approach to insert data into db)
        return db.execute('INSERT INTO products (title, description, imageUrl, price) VALUES (?, ?, ?, ?)', [this.title, this.description, this.imageUrl, this.price])
    }

    edit(){
        return db.execute('UPDATE products SET title=?, description=?, imageUrl=?, price=? WHERE id = ?', [this.title, this.description, this.imageUrl, this.price, this.id])
    }

    static deleteById(id){
        return db.execute('DELETE FROM products WHERE products.id = ?', [id])
    }

    //fetch all products
    static fetchAll(){
        return db.execute('SELECT * FROM products')
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id])
    }
}