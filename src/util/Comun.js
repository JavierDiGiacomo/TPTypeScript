"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comun = void 0;
// Se utliza el modulo por defecto de node JS para poder exportar a formato JSON
const fs = __importStar(require("fs"));
// El namespace Comun contiene clases comunes que son utilizadas por otras clases.
var Comun;
(function (Comun) {
    // Representa la clase ayuda que contiene las funciones.
    class Ayuda {
        // Método para exportar los eventos a un archivo JSON, esta clase permite recibir una interfaz IEvento
        // esta hecha asi para que a futuro se puede pasar cualquier clase derivada de la interfaz-
        exportarAJson(eventos) {
            const eventosJson = JSON.stringify(eventos, null, 2);
            fs.writeFileSync("eventos.json", eventosJson, "utf-8");
            console.log("Eventos exportados a eventos.json.");
        }
    }
    Comun.Ayuda = Ayuda;
})(Comun || (exports.Comun = Comun = {}));
