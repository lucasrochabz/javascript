// const button = {
//   get tamanho() {
//     return this._numero;
//   },
//   set tamanho(numero) {
//     this._numero = numero;
//   }
// }


class Button {
  constructor(text) {
    this.text = text;
  }
  get element() {
    const elementType = this._elementType || 'button';
    const buttonElement = document.createElement(elementType);
    buttonElement.innerText = this.text;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button('Comprar');
blueButton.element; // retorna o elemento
