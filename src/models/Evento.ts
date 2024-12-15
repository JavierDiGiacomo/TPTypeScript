import { TipoDeEvento } from "./TipoDeEvento";

// Creo una interfaz base, por si en el futuro tengo que extender con otras clases la misma.
export interface IEvento
{
    titulo: string;
    fecha: Date;
    ubicacion: string;
    asistentes: string[];
    tipo: TipoDeEvento;

    mostrarDetalles(): void;
}

// Creo la clase evento, que hereda de la interfaz IEvento, esta clase tiene un cosntructor y
// Un metodo mostrardetalle que muestra el detalle de los eventos por consola.
export class Evento implements IEvento
{
    titulo: string;
    fecha: Date;
    ubicacion: string;
    asistentes: string[];
    tipo: TipoDeEvento;
    
    // Constructor que inicializa los datos.
    constructor
    (
        titulo: string,
        fecha: Date,
        ubicacion: string,
        asistentes: string[],
        tipo: TipoDeEvento
    ) 
    {
        this.titulo = titulo;
        this.fecha = fecha;
        this.ubicacion = ubicacion;
        this.asistentes = asistentes;
        this.tipo = tipo;
    }
    
    // Método para mostrar los detalles del evento en la consola.
    mostrarDetalles(): void 
    {
        console.log(`Título: ${this.titulo}`);
        console.log(`Fecha: ${this.fecha.toLocaleString()}`);
        console.log(`Ubicación: ${this.ubicacion}`);
        console.log(`Asistentes: ${this.asistentes.join(", ")}`);
        console.log(`Tipo de Evento: ${this.tipo}`);
    }
}
