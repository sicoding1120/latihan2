// soal 1

const minimal = (a: number, b: number): number => {
  return a > b || b < a || a === b ? b : a;
};
console.log(minimal(9, 6));

// soal 2

const power = (a: number, b: number) => {
  return a ** b;
};

console.log(power(2,3));


// soal 3

const penumlahanBilangan = (a: number[], b: "ganjil" | "genap"): number => {
    return a.filter((a) => (a % 2 === 0 && b === "genap") || (a % 2 === 1 && b === "ganjil")).reduce((a, b) => { return a + b });
};

console.log(penumlahanBilangan([1, 2, 3, 5, 12, 33], "ganjil"));
console.log(penumlahanBilangan([1, 2, 3, 5, 12, 33], "genap"));

// soal 4

class Animal {
    name: string;
    age: number;
    isMammal: boolean;
    
    constructor(name:string, age:number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}


// soal 5

class Rabbit extends Animal {
    constructor(name: string, age: number,isMammal?: boolean) {
        super(name, age, isMammal = true);
    }

    eat = ():string => {
      return  `${this.name} yang berumur ${this.age} sedang makan!`;
    }
}

const rabbit = new Rabbit("Labi" , 2)

// soal 6

class Eagle extends Animal {
  speed: number;
  constructor(name: string, age: number, speed: number, isMammal?: boolean ) {
    super(name, age, isMammal = false, );
    this.speed = speed;
  }

  fly = (): string => {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  };

  protected run = (speed: number): string => {
    return `${this.name} berlari dengan kecepatan ${speed} km ";"`;
  };
}

// soal 7


class EagleRun extends Eagle {
  constructor( name: string, age: number,speed?:number, isMammal?:boolean) {
    super(name, age,speed = 220, isMammal = false);
    
  }

  fly = (): string => {
    return `${this.name} yang berumur ${this.age} sedang terbang!`;
  };

  runEagle = () => {
    return this.run(this.speed);
  };
}

// soal 8

const myRabbit = new Rabbit("Labbi", 2);

console.log(myRabbit.eat());

// soal 9

const myEagle = new Eagle("Elo", 4,220);
// console.log(myEagle.run());

// soal 10

const speedTes = new EagleRun("Kuku", 2);
console.log(speedTes.runEagle());






