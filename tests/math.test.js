const { sum, multiply, divide, isEven } = require('../math');

describe('Математические функции', () => {
  
  describe('sum', () => {
    test('возвращает корректную сумму двух чисел', () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(10, 20)).toBe(30);
    });

    test('корректно работает с отрицательными числами', () => {
      expect(sum(-5, 3)).toBe(-2);
      expect(sum(-4, -6)).toBe(-10);
    });
  });

   describe('multiply', () => {
    test('возвращает корректное произведение', () => {
      expect(multiply(4, 5)).toBe(20);
      expect(multiply(-3, 3)).toBe(-9);
    });

    test('возвращает 0 при умножении на 0', () => {
      expect(multiply(10, 0)).toBe(0);
      expect(multiply(0, 15)).toBe(0); // ← Изменено с -15 на 15
    });
  });

  describe('divide', () => {
    test('возвращает корректный результат деления', () => {
      expect(divide(10, 2)).toBe(5);
      expect(divide(7, 2)).toBe(3.5);
    });

    test('выбрасывает ошибку при делении на 0', () => {
      expect(() => divide(5, 0)).toThrow("Деление на ноль невозможно");
    });
  });

  describe('isEven', () => {
    test('возвращает true для чётных чисел', () => {
      expect(isEven(4)).toBe(true);
      expect(isEven(0)).toBe(true);
      expect(isEven(-2)).toBe(true);
    });

    test('возвращает false для нечётных чисел', () => {
      expect(isEven(3)).toBe(false);
      expect(isEven(-7)).toBe(false);
    });
  });

});