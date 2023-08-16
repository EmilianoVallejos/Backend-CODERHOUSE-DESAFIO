class productManager {
    static code = 0;
    constructor (){
        this.addProducts = []
    }
    inventario(title, description, price, thumbnail, stock) {
        const myCode = Math.floor(Math.random() * 1000);
        const product = {
            title,
            description,
            price,
            thumbnail,
            code: myCode,
            stock,
        }
        this.addProducts.push(product)
        return product
    }
    getProducts (){
        return this.addProducts;
    }  
    getProductsbyId(code) {
        return this.addProducts.filter((product) => product.code === code)
    }
}
let manager = new productManager ();
console.log(manager.products);
manager.inventario('producto prueba', 'Este es un producto prueba', 200, 'no image', 3, 25)
console.log(manager.getProducts());
console.log(manager.getProductsbyId(1))
