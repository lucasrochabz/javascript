// function Button (text, background) {
//   this.text = text;
//   this.background = background
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background
//   return buttonElement
// }

// const blueButton = new Button('Comprar', 'blue')


// class Button {
//   constructor(text, background) {
//     this.text = text;
//     this.background = background;
//   }
//   element() {
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     return buttonElement;
//   }
// }

// const blueButton = new Button('Comprar', 'blue');


class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const elementButton = document.createElement('button');
    elementButton.innerText = this.text;
    elementButton.style.background = this.background;
    return elementButton
  }
  static createBlue(text) {
    return new Button(text, 'blue');
  }
}

const blueButton = Button.createBlue('Comprar');
