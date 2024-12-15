import { Evento } from "../models/Evento";
import { TipoDeEvento } from "../models/TipoDeEvento";

import * as fs from "fs";

import { Comun } from "../util/Comun";

// El namespace representa el modulo que permite manejar las funcionalidades de Evento y TipoDeEvento
export namespace SistemaDeEventos 
{

    export class Manejador 
    {
        eventos: Evento[] = [];

        // Método para añadir un nuevo evento
        anadirEvento(evento: Evento): void 
        {
            this.eventos.push(evento);
            console.log("Evento añadido correctamente.");
        }

        // Método para mostrar todos los eventos registrados
        mostrarEventos(): void 
        {
            this.eventos.forEach((evento, index) => 
            {
            console.log(`Evento ${index + 1}:`);
            evento.mostrarDetalles();
            console.log("-------------------------------");
            }
            );
        }

        // Método para buscar eventos por tipo
        buscarEventosPorTipo(tipo: TipoDeEvento): void 
        {
            const eventosFiltrados = this.eventos.filter(evento => evento.tipo === tipo);
            if (eventosFiltrados.length === 0) 
            {
                console.log(`No se encontraron eventos de tipo ${tipo}.`);
                return;
            }

            eventosFiltrados.forEach((evento, index) => 
            {
                console.log(`Evento ${index + 1}:`);
                evento.mostrarDetalles();
                console.log("-------------------------------");
            }
            );
        }

        // Método para calcular las estadísticas
        obtenerEstadisticas(): void 
        {
            const totalEventos = this.eventos.length;
            const totalAsistentes = this.eventos.reduce((acc, evento) => acc + evento.asistentes.length, 0);
            const promedioAsistentes = totalEventos > 0 ? totalAsistentes / totalEventos : 0;

            console.log(`Total de eventos registrados: ${totalEventos}`);
            console.log(`Cantidad promedio de asistentes por evento: ${promedioAsistentes.toFixed(2)}`);
        }

        // Método para exportar los eventos a un archivo JSON, utiliza la clase Ayuda del namespace Comun, que permite 
        // Eportar a un formato JSON
        exportarAJson(): void 
        {
            const comun = new Comun.Ayuda();

            comun.exportarAJson(this.eventos);
        }
    }
}