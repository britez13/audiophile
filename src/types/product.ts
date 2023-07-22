interface IProduct {
    id: number,
    slug: string,
    name: string,
    price: number,
    img: string,
}

interface IProductCart extends IProduct {
    quantity: number
}
