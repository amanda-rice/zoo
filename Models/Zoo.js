import Alpaca from "./Alpaca.js"
import Baboon from "./Baboon.js"
import Chickadee from "./Chickadee.js"
import Dingo from "./Dingo.js"
import Emu from "./Emu.js"
import Falcon from "./Falcon.js"
import Gopher from "./Gopher.js"
import Herring from "./Herring.js"
import Iguana from "./Iguana.js"
import Jellyfish from "./Jellyfish.js"
import Kiwi from "./Kiwi.js"
import Lizard from "./Lizard.js"
import Meerkat from "./Meerkat.js"
import Narwhal from "./Narwhal.js"
import Octopus from "./Octopus.js"
import Peacock from "./Peacock.js"
import Rattlesnake from "./Rattlesnake.js"
import Salmon from "./Salmon.js"
import Turkey from "./Turkey.js"
import Uakari from "./Uakari.js"
import Vaquita from "./Vaquita.js"
import Xerus from "./Xerus.js"
import Zebu from "./Zebu.js"

// // NOTE the 'new' keyword instantiates (creates) an object of that type
// let pick = new Upgrade('pick', 10, 3)
let zoo = {
  aquarium: {
    herring: new Herring('Harry', 'gray', 'male', 2),
    jellyfish: new Jellyfish('James', 'white', 'male', 60),
    narwhal: new Narwhal('Angela', 'white', 'female', 2000),
    octopus: new Octopus('Lily', 'gray', 'female', 33),
    salmon: new Salmon('Mark', 'pink', 'male', 40),
    vaquita: new Vaquita('Bart', 'gray', 'male', 90),
  },
  largeCreatures: {
    alpaca: new Alpaca('Timothy', 'white', 'male', 120),
    baboon: new Baboon('Annie', 'brown', 'female', 40),
    dingo: new Dingo('Max', 'red', 'male', 42),
    zebu: new Zebu('Sam', 'grey', 'female', 450)
  },
  smallAnimals: {
    gopher: new Gopher('Gary', 'gray', 'male', 20),
    iguana: new Iguana('Iggy', 'gray', 'male', 7),
    lizard: new Lizard('Lizzy', 'red', 'female', 1),
    meerkat: new Meerkat('Mary', 'tan', 'female', 2),
    rattlesnake: new Rattlesnake('Mark', 'grey', 'male', 2),
    ukari: new Uakari('Stephanie', 'red', 'female', 7),
    xerus: new Xerus('Peter', 'red', 'male', 2)
  },
  Aviary: {
    chickadee: new Chickadee('Christine', 'white', 'female', 1),
    emu: new Emu('Sara', 'brown', 'female', 100),
    falcon: new Falcon('Franklin', 'brown', 'male', 15),
    kiwi: new Kiwi('Carolyn', 'brown', 'female', 7),
    peacock: new Peacock('Stewart', 'blue', 'male', 30),
    turkey: new Turkey('Bob', 'Red', 'male', 20)

  }
}
let cheese = 0

export default class Zoo {
  // called by the button click
  speak(type, name, sound) {
    zoo[type][name].speak(sound)
  }
  eat(type, name, food) {
    let obj = zoo[type][name]
    zoo[type][name].eat(food)
    obj.gainWeight()
  }
  introduction(type, name) {
    let obj = zoo[type][name]
    obj.introduction(obj, name)
  }
}