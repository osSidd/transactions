export interface Transactions{
    id: number
    title: string
    description: string
    category: string
    price: number
    sold: boolean
    dateOfSale: number
    date: string
    image: string
}

export interface PriceRange{
    range: string
    value: number
    total: number
}