//ejemplo practico

class Producto {
    constructor(id, producto, imgSrc, descripcion, precio) {
        this.id = id
        this.producto = producto
        this.imgSrc = imgSrc
        this.descripcion = descripcion
        this.precio = precio
    }
}

    const producto1 = new Producto (001, 'Wrap palta pollo', ' https://www.casafe.org/wp-content/uploads/2017/03/foto-wrap-pollo-verduras.jpg ','pollo palta lechuga tomate', 1000)
    const producto2 = new Producto (002, 'Ensalada mediterranea','https://static8.depositphotos.com/1000339/1004/i/950/depositphotos_10047390-stock-photo-chicken-salad.jpg','Rucula, cherry, queso brie, aceitunas', 900)
    const producto3 = new Producto (003, 'Baguette Americana','https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/nola/colombia/calcmenu/recipes/CO-recipes/sandwiches/sandwich-de-queso-fundido/main-header.jpg', 'pan baguette, cheddar, carne desmenuzada, panceta y barbacoa', 800)


const productos = [producto1, producto2, producto3]

const cardContainerQuery = document.querySelector("#cardContainer")

productos.forEach ((producto)=> {
    const nuevoDiv = document.createElement("div")
    nuevoDiv.innerHTML= `
    <h3 class="cardTitle">${producto.producto}</h3>
    <img src="${producto.imgSrc}" class="cardImg">
    <p class="cardDesc">${producto.descripcion}</p>
    <span class="cardPrice">$${producto.precio}</span>
    <button class="butonCTA">Agregar al carrito</button>`
    nuevoDiv.className = "card"
    console.log(nuevoDiv)
    cardContainerQuery.append(nuevoDiv)
})

