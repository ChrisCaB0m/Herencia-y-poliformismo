// Definición de la clase FiguraGeometrica
function FiguraGeometrica() {
    
    this.area = function() {};
    this.perimetro = function() {};
}

// Definición de la clase Circulo que hereda de FiguraGeometrica
function Circulo(radio) {
    this.radio = radio;

    // Herencia
    Circulo.prototype = Object.create(FiguraGeometrica.prototype);
    Circulo.prototype.constructor = Circulo;

    // Implementación de métodos
    this.area = function() {
        return Math.PI * Math.pow(this.radio, 2);
    };

    this.perimetro = function() {
        return 2 * Math.PI * this.radio;
    };
}

// Definición de la clase Cuadrado que hereda de FiguraGeometrica
function Cuadrado(lado) {
    this.lado = lado;

    // Herencia
    Cuadrado.prototype = Object.create(FiguraGeometrica.prototype);
    Cuadrado.prototype.constructor = Cuadrado;

    // Implementación de métodos
    this.area = function() {
        return Math.pow(this.lado, 2);
    };

    this.perimetro = function() {
        return 4 * this.lado;
    };
}

// Definición de la clase Rectangulo que hereda de FiguraGeometrica
function Rectangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    // Herencia
    Rectangulo.prototype = Object.create(FiguraGeometrica.prototype);
    Rectangulo.prototype.constructor = Rectangulo;

    // Implementación de métodos
    this.area = function() {
        return this.base * this.altura;
    };

    this.perimetro = function() {
        return 2 * (this.base + this.altura);
    };
}

// Ejemplo de uso
var circulo = new Circulo(5);
var cuadrado = new Cuadrado(4);
var rectangulo = new Rectangulo(3, 6);

console.log("Área y perímetro del círculo:");
console.log("Área:", circulo.area());
console.log("Perímetro:", circulo.perimetro());

console.log("\nÁrea y perímetro del cuadrado:");
console.log("Área:", cuadrado.area());
console.log("Perímetro:", cuadrado.perimetro());

console.log("\nÁrea y perímetro del rectángulo:");
console.log("Área:", rectangulo.area());
console.log("Perímetro:", rectangulo.perimetro());
