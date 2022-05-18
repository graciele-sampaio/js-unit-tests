const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string; 

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
    it('Verifica se `productDetails` é uma função', () => {
    expect(typeof productDetails).toBe('function');
    });
    // Teste se o retorno da função é um array.
    it('Verifica se o retorno de `productDetails` é um array', () => {
    productDetails.isArray;
    });
    // Teste se o array retornado pela função contém dois itens dentro.
    it('Verifica se o array retornado por `productDetails` contém dois itens dentro', () => {
      expect(productDetails()).toHaveLength(2);
    });
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    it('Verifica se os dois itens retornados por `productDetails` são objetos', () => {
      expect(typeof productDetails.entries).toEqual('object');
    });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    it('Verifica se quando passados parâmetros diferentes entre si, o retorno de `productDetails` são dois objetos diferentes entre si', () => {
      expect(productDetails()).not.toEqual({});
    });
    // Teste se os dois productIds terminam com 123.
    it('Verifica se os dois productIds  de `productDetails` terminam com 123', () => {
      expect(productDetails()).endsWith('123');
    });
 
});
