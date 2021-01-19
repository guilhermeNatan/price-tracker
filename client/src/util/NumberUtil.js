export default class NumberUtil {
  static mutiply(numberA = 1, numberB = 1) {
    return Number(numberA * numberB);
  }

  static add(numberA = 1, numberB = 1) {
    return Number(numberA + numberB);
  }

  static isEven = number => number % 2 === 0
}
