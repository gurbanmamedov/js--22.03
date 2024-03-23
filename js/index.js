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

// class HtmlElement {
//   constructor(tagName, content = "", attributes = {}) {
//     this.tagName = tagName;
//     this.content = content;
//     this.attributes = attributes;
//     this.children = [];
//   }

//   addChild(child) {
//     this.children.push(child);
//   }

//   getCode() {
//     let htmlCode = `<${this.tagName}`;
//     for (const key in this.attributes) {
//       htmlCode += ` ${key}="${this.attributes[key]}"`;
//     }
//     htmlCode += `>${this.content}`;
//     this.children.forEach((child) => {
//       htmlCode += child.getCode();
//     });
//     htmlCode += `</${this.tagName}>`;
//     return htmlCode;
//   }
// }

// class HtmlBlock {
//   constructor() {
//     this.cssClasses = [];
//     this.rootElement = null;
//   }

//   addCssClass(cssClass) {
//     this.cssClasses.push(cssClass);
//   }

//   setRootElement(rootElement) {
//     this.rootElement = rootElement;
//   }

//   getCode() {
//     let htmlCode = "<style>";
//     this.cssClasses.forEach((cssClass) => {
//       htmlCode += `\n${cssClass.getCss()}`;
//     });
//     htmlCode += "</style>";
//     htmlCode += this.rootElement.getCode();
//     return htmlCode;
//   }
// }

// const containerCss = new CssClass("container");
// containerCss.setStyle("width", "200px");
// containerCss.setStyle("height", "200px");
// containerCss.setStyle("background-color", "lightblue");

// const textCss = new CssClass("text");
// textCss.setStyle("color", "red");
// textCss.setStyle("font-size", "24px");

// const containerDiv = new HtmlElement("div", "", { class: "container" });
// const textDiv = new HtmlElement("div", "Hello, world!", { class: "text" });

// containerDiv.addChild(textDiv);

// const block = new HtmlBlock();
// block.addCssClass(containerCss);
// block.addCssClass(textCss);
// block.setRootElement(containerDiv);
