const regexp = /\w+/gi;

const regexp1 = new RegExp('\\d', 'gi');

const frase = 'JavaScript Linguagem 101';

console.log(frase.replace(regexp1, 'X'));

const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

const regexp2 = /ul/g;

const resultado = tags.replace(regexp2, 'div');
console.log(resultado);

tags.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>
