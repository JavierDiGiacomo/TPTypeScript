"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDeEventos = void 0;
const Comun_1 = require("../util/Comun");
// El namespace representa el modulo que permite manejar las funcionalidades de Evento y TipoDeEvento
var SistemaDeEventos;
(function (SistemaDeEventos) {
    // Representa la clase que contiene las funciones que permiten llevar adelanta la funcionalidad 
    class Manejador {
        constructor() {
            this.eventos = [];
        }
        // Método para añadir un nuevo evento
        anadirEvento(evento) {
            this.eventos.push(evento);
            // Muestra en consola los resultados
            console.log("Evento añadido correctamente.");
            console.log("-------------------------------");
        }
        // Método para mostrar todos los eventos registrados
        mostrarEventos() {
            this.eventos.forEach((evento, index) => {
                // Muestra en consola los resultados
                console.log(`Evento ${index + 1}:`);
                evento.mostrarDetalles();
                console.log("-------------------------------");
            });
        }
        // Método para buscar eventos por tipo
        buscarEventosPorTipo(tipo) {
            const eventosFiltrados = this.eventos.filter(evento => evento.tipo === tipo);
            if (eventosFiltrados.length === 0) {
                // Muestra en consola los resultados
                console.log(`No se encontraron eventos de tipo ${tipo}.`);
                console.log("-------------------------------");
                return;
            }
            eventosFiltrados.forEach((evento, index) => {
                // Muestra en consola los resultados
                console.log(`Evento ${index + 1}:`);
                evento.mostrarDetalles();
                console.log("-------------------------------");
            });
        }
        // Método para calcular las estadísticas
        obtenerEstadisticas() {
            const totalEventos = this.eventos.length;
            const totalAsistentes = this.eventos.reduce((acc, evento) => acc + evento.asistentes.length, 0);
            const promedioAsistentes = totalEventos > 0 ? totalAsistentes / totalEventos : 0;
            // Muestra en consola los resultados
            console.log(`Total de eventos registrados: ${totalEventos}`);
            console.log(`Cantidad promedio de asistentes por evento: ${promedioAsistentes.toFixed(2)}`);
            console.log("-------------------------------");
        }
        // Método para exportar los eventos a un archivo JSON, utiliza la clase Ayuda del namespace Comun, que permite 
        // Eportar a un formato JSON
        exportarAJson() {
            const comun = new Comun_1.Comun.Ayuda();
            // Muestra en consola los resultados
            comun.exportarAJson(this.eventos);
            console.log("-------------------------------");
        }
    }
    SistemaDeEventos.Manejador = Manejador;
})(SistemaDeEventos || (exports.SistemaDeEventos = SistemaDeEventos = {}));
