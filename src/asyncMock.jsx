const products = [
    {
        id: '1',
        name: 'iphone 12',
        price: '$1000',
        category: 'celular',
        img: 'https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wx0F2Bx_RjEu2TXh7BFfnwHaHa%26pid%3DApi',
        stock: 25,
        description: 'Super Retina XDR display 15.40 cm / 6.1‑inch (diagonal) all‑screen OLED display 2532x1170-pixel resolution at 460 ppi HDR display True Tone Wide colour (P3) Haptic Touch'
    },
    { 
        id: '2',
        name: 'iPad 13',
        price: '$1000',
        category: 'tablet',
        img: 'https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wx0F2Bx_RjEu2TXh7BFfnwHaHa%26pid%3DApi',
        stock: 25,
        description: 'Super Retina XDR display 15.40 cm / 6.1‑inch (diagonal) all‑screen OLED display 2532x1170-pixel resolution at 460 ppi HDR display True Tone Wide colour (P3) Haptic Touch'
    },
    { 
        id: '3',
        name: 'funda iphone 14',
        price: '$1000',
        category: 'accesorios',
        img: 'https://you.com/proxy?url=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.wx0F2Bx_RjEu2TXh7BFfnwHaHa%26pid%3DApi',
        stock: 25,
        description: 'Super Retina XDR display 15.40 cm / 6.1‑inch (diagonal) all‑screen OLED display 2532x1170-pixel resolution at 460 ppi HDR display True Tone Wide colour (P3) Haptic Touch'
    },
]

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId ? products.filter (prod => prod.category === categoryId) : products)
        }, 1000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}