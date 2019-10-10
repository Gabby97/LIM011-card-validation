// importamos el objeto `validator`, que contiene la función `isValid`
import {isValid} from "../src/validator";


  /* it('debería ser un objeto', () => {
    expect(typeof isValid).toBe('object');
  }); */

  describe('validator.isValid', () => {

    it('debería ser una función', () => {
      expect(typeof isValid).toBe('function');
    });

    it('debería retornar true para "4079076706388905"', () => {
      // escribe aquí tu test
      expect(isValid("4079076706388905")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      // escribe aquí tu test
      expect(isValid("1234567890")).toBe(false);

    });

  });
