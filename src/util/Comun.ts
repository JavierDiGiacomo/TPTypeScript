import * as fs from "fs";

import { Evento } from "../models/Evento";
import { IEvento } from "../models/Evento";

export namespace Comun
{
    export class Ayuda
    {
        // Método para exportar los eventos a un archivo JSON, esta clase permite recibir una interfaz IEvento
        // esta hecha asi para que a futuro se puede pasar cualquier clase derivada de la interfaz-
        exportarAJson(eventos: IEvento[]): void 
        {
            const eventosJson = JSON.stringify(eventos, null, 2);
            fs.writeFileSync("eventos.json", eventosJson, "utf-8");
            console.log("Eventos exportados a eventos.json.");
        }
    }
}