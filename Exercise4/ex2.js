class Person {
    planet = "Земя";
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Здравей ${this.name} от планетата ${this.planet}`);
    }
}

let ivan = new Person("Ivan");
let petkan = new Person("Petkan");
let mariika = new Person("Mariika");

ivan.greet();
petkan.greet();
mariika.greet();