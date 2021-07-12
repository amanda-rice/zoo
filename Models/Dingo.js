class Dingo {
  /**
 *
 * @param {String} name
 * @param {String} color
 * @param {String} gender
 * @param {Number} weight
 */
  constructor(name, color, gender, weight
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.weight = weight;
  }
  eat(food) {
    console.log(`${food}, my favorite!`)
  }
  speak(noise) {
    alert(`The ${this.constructor.name} says ${noise}!`)
  }
  gainWeight() {
    this.weight += Math.ceil(this.weight * 1.1)
  }
  introduction(obj, type) {
    console.log(`Hi! My name is ${obj.name}. I'm a ${obj.color} ${type} and I weigh ${obj.weight} pounds.`)
  }
}

export default Dingo;