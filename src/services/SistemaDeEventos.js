"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SistemaDeEventos = void 0;
const Comun_1 = require("../util/Comun");
var SistemaDeEventos;
(function (SistemaDeEventos) {
    class Manejador {
        constructor() {
            this.eventos = [];
        }
        // Método para añadir un nuevo evento
        anadirEvento(evento) {
            this.eventos.push(evento);
            console.log("Evento añadido correctamente.");
        }
        // Método para mostrar todos los eventos registrados
        mostrarEventos() {
            this.eventos.forEach((evento, index) => {
                console.log(`Evento ${index + 1}:`);
                evento.mostrarDetalles();
                console.log("-------------------------------");
            });
        }
        // Método para buscar eventos por tipo
        buscarEventosPorTipo(tipo) {
            const eventosFiltrados = this.eventos.filter(evento => evento.tipo === tipo);
            if (eventosFiltrados.length === 0) {
                console.log(`No se encontraron eventos de tipo ${tipo}.`);
                return;
            }
            eventosFiltrados.forEach((evento, index) => {
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
            console.log(`Total de eventos registrados: ${totalEventos}`);
            console.log(`Cantidad promedio de asistentes por evento: ${promedioAsistentes.toFixed(2)}`);
        }
        // Método para exportar los eventos a un archivo JSON
        exportarAJson() {
            const comun = new Comun_1.Comun.Ayuda();
            comun.exportarAJson(this.eventos);
        }
    }
    SistemaDeEventos.Manejador = Manejador;
})(SistemaDeEventos || (exports.SistemaDeEventos = SistemaDeEventos = {}));
