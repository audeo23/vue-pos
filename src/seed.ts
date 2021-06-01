export const seed = {

    articles: [
        { id: 1, name: 'Water', price: 2.5 },
        { id: 2, name: 'Coke', price: 2 },
        { id: 3, name: 'Fanta', price: 2 },
        { id: 4, name: 'Beer', price: 4 },
        { id: 6, name: 'Hot dog', price: 4 },
        { id: 7, name: 'French fries', price: 2 },
        { id: 8, name: 'Pizza', price: 7.5 },
        { id: 9, name: 'Donut', price: 2 },
        { id: 10, name: 'Cookie', price: 2 },
        { id: 11, name: 'Ice cream', price: 2 },
    ],

    transactions: [
        {
            id: 1, totalPrice: 2.5, cart: [
                { id: 1, name: 'Water', price: 2.5, quantity: 1 }
            ]
        },
        {
            id: 2, totalPrice: 11.5, cart: [
                { id: 4, name: 'Beer', price: 4, quantity: 1 },
                { id: 8, name: 'Pizza', price: 7.5, quantity: 1 }
            ]
        },
        {
            id: 3, totalPrice: 4, cart: [
                { id: 11, name: 'Ice cream', price: 2, quantity: 2 },
            ]
        },
        {
            id: 4, totalPrice: 33, cart: [
                { id: 8, name: 'Pizza', price: 7.5, quantity: 2 },
                { id: 6, name: 'Hot dog', price: 4, quantity: 1 },
                { id: 4, name: 'Beer', price: 4, quantity: 1 },
                { id: 3, name: 'Fanta', price: 2, quantity: 2 },
                { id: 10, name: 'Cookie', price: 2, quantity: 3 }
            ]
        },
        {
            id: 5, totalPrice: 10, cart: [
                { id: 2, name: 'Coke', price: 2, quantity: 3 },
                { id: 7, name: 'French fries', price: 2, quantity: 2 }
            ]
        },
        {
            id: 6, totalPrice: 2, cart: [
                { id: 9, name: 'Donut', price: 2, quantity: 1 }
            ]
        },
        {
            id: 7, totalPrice: 17, cart: [
                { id: 8, name: 'Pizza', price: 7.5, quantity: 2 },
                { id: 2, name: 'Coke', price: 2, quantity: 1 },
            ]
        }
    ]

}