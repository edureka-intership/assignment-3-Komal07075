class restaurantmanager {
    constructor() {
        this.restaurantlist = []
    }
    addRestaurant(restaurant) {
        this.restaurantlist.push(restaurant)
    }
    view() {
        console.log(this.restaurantlist)
    }
    printAllRestaurantNames() {
        this.restaurantlist.forEach(ele => console.log(ele.name))
    }
    filterRestaurantByCity(city) {
let restaurantarray=this.restaurantlist.filter(restaurant=>restaurant.city === city)
console.log("Filtered by ",city,restaurantarray)    
}

}




let restaurant1 = {
    name: "green well",
    address: "sector-1",
    city: "Rewari"
}
let restaurant2 = {
    name: "kaka restaurant",
    address: "sector-2",
    city: "Delhi"
}
let restaurant3 = {
    name: "italy restaurant",
    address: "sector-3",
    city: "Mumbai"
}

let n= 100;

let object = new restaurantmanager()
object.addRestaurant(restaurant1);
object.addRestaurant(restaurant2);
object.addRestaurant(restaurant3);

object.view()
object.printAllRestaurantNames()
object.filterRestaurantByCity('Delhi')