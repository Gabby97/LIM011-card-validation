export const isValid = (creditCardNumber) => {
    const digitos = creditCardNumber.split('');
    const pares = digitos.filter((_, indice) => indice % 2 === 0);
    const impares = digitos.filter((_, indice) => indice % 2 !== 0);
  
    const paso1 = pares.map(par => 
      parseInt(par) * 2 > 9
      ? 1 + ((parseInt(par)* 2) % 10)
      : parseInt(par) * 2
      );
      const paso2 = paso1.reduce(
        (acumulador, elemento) => acumulador + elemento, 
        0
        );
       const paso3 = impares.reduce(
         (acumulador, element) => parseInt(acumulador) + parseInt(element),
       0
       );
       const paso4 = paso2 + paso3;
       const paso5 = paso4 % 10;
  
       const esValido = paso5 === 0;
      return esValido;
  };

  // ...
