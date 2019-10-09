export const isValid = (creditCardNumber) => {
    const digitos = creditCardNumber.split('');
    const pares = digitos.filter((_, indice) => indice % 2 === 0);
    const impares = digitos.filter((_, indice) => indice % 2 !== 0);
  
    const multiSumaPares = pares.map(par =>  
      parseInt(par) * 2 > 9
      ? 1 + ((parseInt(par)* 2) % 10)
      : parseInt(par) * 2
      );
      const acumuladorDeElementos = multiSumaPares.reduce(
        (acumulador, elemento) => acumulador + elemento, 
        0
        );
       const acumuladorDeElementos1 = impares.reduce(
         (acumulador, element) => parseInt(acumulador) + parseInt(element),
       0
       );
       const sumaDeAcumulados = acumuladorDeElementos + acumuladorDeElementos1;
       const total = sumaDeAcumulados % 10;
  
       const esValido = total === 0;
      return esValido;
  };

  // ...
