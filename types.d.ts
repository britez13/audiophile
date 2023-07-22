type responsiveImages = {
    mobile: string,
    tablet: string,
    desktop: string
}

type includes = {
    quantity: number,
    item: string
}

type galllery = {
    first: responsiveImages,
    second: responsiveImages,
    third: responsiveImages
}

type others = {
    name: string, 
    slug: string, 
    image: responsiveImages
}

interface IProduct {
    name: string,
    price: number,
    image: responsiveImages,
    category: string,
    categoryImage: responsiveImages,
    new: boolean,
    description: string,
    features: string,
    includes: includes[] ,
    galllery: galllery,
    ohters: others
}

interface IProductCart extends IProduct {
    quantity: number
}
