//Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
//■ поле, хранящее радиус окружности;
//■ get-свойство, возвращающее радиус окружности;
//■ set-свойство, устанавливающее радиус окружности;
//■ get-свойство, возвращающее диаметр окружности;
//■ метод, вычисляющий площадь окружности;
//■ метод, вычисляющий длину окружности.
//Продемонстрировать работу свойств и методов.

// class Circle {
//   #radius;
//   constructor(radius) {
//     this.#radius = radius;
//   }

//   get radius() {
//     return this.#radius;
//   }

//   set radius(value) {
//     this.#radius = value;
//   }

//   get diameter() {
//     return 2 * this.#radius;
//   }

//   area() {
//     return Math.PI * Math.pow(this.#radius, 2);
//   }

//   circumference() {
//     return 2 * Math.PI * this.#radius;
//   }
// }

// let newCircle = new Circle(5);
// console.log("Радиус окружности: " + newCircle.radius);
// console.log("Диаметр окружности: " + newCircle.diameter);
// console.log("Площадь окружности: " + newCircle.area());
// console.log("Длина окружности: " + newCircle.circumference());

//Реализовать класс, описывающий html элемент.
//Класс HtmlElement должен содержать внутри себя:
//■ название тега;
//■ самозакрывающийся тег или нет;
//■ текстовое содержимое;
//■ массив атрибутов;
//■ массив стилей;
//■ массив вложенных таких же тегов
// метод для установки атрибута;
//■ метод для установки стиля;
//■ метод для добавления вложенного элемента в конец текущего элемента;
//■ метод для добавления вложенного элемента в начало текущего элемента;
//■ метод getHtml(), который возвращает html код в виде
//строки, включая html код вложенных элементов.

class HtmlElement {
  constructor(tagName, isSelfClosing = false, textContent = "") {
    this.tagName = tagName;
    this.isSelfClosing = isSelfClosing;
    this.textContent = textContent;
    this.attributes = {};
    this.children = [];
  }

  setAttribute(attributeName, attributeValue) {
    this.attributes[attributeName] = attributeValue;
  }

  appendChild(childElement) {
    this.children.push(childElement);
  }

  prependChild(childElement) {
    this.children = [childElement, ...this.children];
  }
}
const div = new HtmlElement("div");
div.setAttribute("id", "main");
div.setAttribute("class", "container");
div.prependChild(new HtmlElement("span", false, "This is a span element."));
div.prependChild(new HtmlElement("p", false, "This is a paragraph."));


//Реализовать класс, который описывает css класс.
//Класс CssClass должен содержать внутри себя:
//■ название css класса;
//■ массив стилей;
//■ метод для установки стиля;
//■ метод для удаления стиля;
//■ метод getCss(), который возвращает css код в виде строки.

// class CssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = {};
//   }

//   setStyle(property, value) {
//     this.styles[property] = value;
//   }

//   removeStyle(property) {
//     delete this.styles[property];
//   }
//   getCss() {
//     let cssCode = `.${this.className} {`;
//     for (const property in this.styles) {
//       cssCode += `\n    ${property}: ${this.styles[property]};`;
//     }
//     cssCode += `\n}`;
//     return cssCode;
//   }
// }

// const myCssClass = new CssClass(`Styles Class`);
// myCssClass.setStyle("color", "red");
// myCssClass.setStyle("font-size", "16px");
// myCssClass.setStyle("background-color", "blue");
// console.log(myCssClass.getCss());

//Реализовать класс, описывающий блок html документ.
//Класс HtmlBlock должен содержать внутри себя:
//■ коллекцию стилей, описанных с помощью класса CssClass;
//■ корневой элемент, описанный с помощью класса HtmlElement;
//■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом
//все html содержимое из корневого тега и его вложенных
//элементов).
//С помощью написанных классов реализовать следующий блок
//(см. рис. 2) и добавить его на страницу с помощью document.write().
