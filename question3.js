function orderPizza(callback) {

    console.log("Baking...")
    setTimeout(() => {
        const pizza = "Pepperoni"
        callback(pizza)
    }, 2000)

}

orderPizza((pizza) => {
    console.log(`Ready: ${pizza}`)
})