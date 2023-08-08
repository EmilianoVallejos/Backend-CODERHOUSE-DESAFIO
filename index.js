class productManager {
    static code = 0;
    constructor (){
        this.addProducts = []
    }
    inventario(title, description, price, thumbnail, code, stock){      
        const product = {
        title,
        description,
        price,
        thumbnail,
        code: productManager.code,
        stock,
        }
        this.addProducts.push (product)
        productManager.code++
        return product
    }

    getProducts (){
        return this.products;        
    }  
    getProductsbyId(){
        return this.products.filter ((product)=> product.code === code) }

}

let manager = new productManager ();

console.log(manager.products);
console.log(productManager.filter())

const product2 = manager.inventario ('producto prueba', 'Este es un producto prueba', 200, 'no image', abc123, 25)
