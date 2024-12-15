"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evento = void 0;
// Creo la clase evento, que hereda de la interfaz IEvento, esta clase tiene un cosntructor y
// Un metodo mostrardetalle que muestra el detalle de los eventos por consola.
class Evento {
    // Constructor que inicializa los datos.
    constructor(titulo, fecha, ubicacion, asistentes, tipo) {
        this.titulo = titulo;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.asistentes = asistentes;
        this.tipo = tipo;
    }
    // Método para mostrar los detalles del evento en la consola.
    mostrarDetalles() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Fecha: ${this.fecha.toLocaleString()}`);
        console.log(`Ubicación: ${this.ubicacion}`);
        console.log(`Asistentes: ${this.asistentes.join(", ")}`);
        console.log(`Tipo de Evento: ${this.tipo}`);
    }
}
exports.Evento = Evento;
