// alert("hello world");
console.log("hello world");

const foo = 1 + 1;
console.log(foo);

console.log(1 + 2);

const result = 1 + 2;
console.log(result);

let myPokemon = "ピカチュウ";
myPokemon = "ニャオハ";
myPokemon = "ホゲータ";
console.log(myPokemon);

console.log(typeof "ピカチュウ");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof "null");

console.log("ピカチュウ" + "ライチュウ");

console.log("ピカチュウ" + "lev" + 10);

const pokemonName = ["ニャオハ", "ホゲータ", "クワッス"];
console.log(pokemonName[1]);

const myMoney = 1000;
let isShipping = false;
if (myMoney >= 500) {
    isShipping = true;
}

console.log(isShipping);

const sonicBoom = () => {
    return 20;
}
console.log(sonicBoom());

const metalBurst = (lastDamage) => {
    return lastDamage * 1.5;
}
console.log(metalBurst(50));

const hornDrill = (theirHp) => {
    if (Math.random() <= 0.3) {
        return theirHp;
    } else {
        return 0;
    }
}
console.log(hornDrill(100));

const pikachu = {
    name: "ピカチュウ",
    level: 18,
    types: ["電気"],
    skills: ["10万ボルト", "でんこうせっか", "たいあたり"],
    levelUp: function () {
        this.level++;
        if (this.level >= 20) {
            this.skills.push("スパーク");
        }
    }
}