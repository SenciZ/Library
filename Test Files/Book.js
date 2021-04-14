function Book (title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function(){
        return `${title} by ${author}, ${pages}, not ${status} yet`;
    }
}

const hobbit = new Book("The Hobbit", "J J Toilken", 254, "read");

function Car(make, model, color, fuel){
    this.make = make
    this.model = model
    this.color = color
    this.fuel = fuel
    this.vin = function(){
        return `${make}${model}${color}${fuel}`.toLowerCase();
    }
}

const cary = new Car("Ford", "Fusion", "Red", "Electric");
