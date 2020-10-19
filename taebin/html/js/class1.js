class Food {
    constructor(name){
        this.name = name;
        this.brands = [];
    }
    addBrand(brand){
        this.brands.push(brand)
        
    }
    print(){
        console.log(`${this.name}을 파는 음식점들`);
        console.log(this.brands.join(','));
    }
}

const pizza = new Food('피자');
pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');

const chiken = new Food('치킨');
chiken.addBrand('굽네 치킨');
chiken.addBrand('BBQ');

pizza.print();
chiken.print();
