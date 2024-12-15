"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SistemaDeEventos_1 = require("./src/services/SistemaDeEventos");
const TipoDeEvento_1 = require("./src/models/TipoDeEvento");
const Evento_1 = require("./src/models/Evento");
console.log("Inicio");
console.log("-----------------------------------------");
// Crear una instancia del sistema de eventos
const sistema = new SistemaDeEventos_1.SistemaDeEventos.Manejador();
// Crear algunos eventos
const evento1 = new Evento_1.Evento("Conferencia sobre TypeScript", new Date(2024, 5, 15, 10, 0), // 15 de junio de 2024 a las 10:00
"Madrid, España", ["Juan Pérez", "Ana Gómez", "Luis Sánchez"], TipoDeEvento_1.TipoDeEvento.Conferencia);
const evento2 = new Evento_1.Evento("Taller de React", new Date(2024, 7, 20, 14, 30), // 20 de agosto de 2024 a las 14:30
"Barcelona, España", ["María Fernández", "Carlos López"], TipoDeEvento_1.TipoDeEvento.Taller);
// Añadir eventos al sistema
sistema.anadirEvento(evento1);
sistema.anadirEvento(evento2);
// Mostrar todos los eventos
sistema.mostrarEventos();
sistema.obtenerEstadisticas();
sistema.buscarEventosPorTipo(TipoDeEvento_1.TipoDeEvento.Conferencia);
sistema.exportarAJson();
console.log("Fin");
console.log("-----------------------------------------");
