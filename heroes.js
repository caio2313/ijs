class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    if ((this.type = "warrior")) {
      this.attacks = "sword";
    } else if ((this.type = "mage")) {
      this.attacks = "magic";
    } else if ((this.type = "ninja")) {
      this.attacks = "shuriken";
    } else if ((this.type = "monk")) {
      this.attacks = "martial arts";
    }

    console.log(`The ${this.type} ${this.name} attacked using ${this.attacks}`);
  }
}

let one = new Hero("superSuper", 299, "warrior");

one.attack();
