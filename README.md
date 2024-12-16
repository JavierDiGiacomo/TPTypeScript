Descripcion del proyecto
------------------------

El proyecto consiste en una clase Evento y un enum TipoDeEvento, la clase Evento contiene
un constructor que permite inicializar, esta clase representa los eventos del sistema.
Existe otra clase que posibilita trabajar con la clase Evento y Tipo de Evento que permite
realizar operaciones como cargar eventos en un a lista y realizar operaciones de estadisticas.

Como ejecutar el proyecto
-------------------------

En la carpeta src existe un archivo index.ts (index.js) que contiene la instanciacion de la clase
y la utilizacion de los metodos creados segun el ejercicio.

El procedimiento es el siguiente :

// Crear una instancia del sistema de eventos
const sistema = new SistemaDeEventos.Manejador();

// Crear algunos eventos, en este caso se crean 2 eventos
const evento1 = new Evento(
"Conferencia sobre TypeScript",
new Date(2024, 5, 15, 10, 0), // 15 de junio de 2024 a las 10:00
"Madrid, España",
["Juan Pérez", "Ana Gómez", "Luis Sánchez"],
TipoDeEvento.Conferencia
);

const evento2 = new Evento(
"Taller de React",
new Date(2024, 7, 20, 14, 30), // 20 de agosto de 2024 a las 14:30
"Barcelona, España",
["María Fernández", "Carlos López"],
TipoDeEvento.Taller
);

// Añadir eventos al sistema
sistema.anadirEvento(evento1);
sistema.anadirEvento(evento2);

// Mostrar todos los eventos
sistema.mostrarEventos();

// Obtener las estadisticas
sistema.obtenerEstadisticas();

// Buscar por tipo de evento
sistema.buscarEventosPorTipo(TipoDeEvento.Conferencia);

// Exportar a Excel
sistema.exportarAJson();

Todos los resultados son mostrados por consola 

Nota : instalar la dependencia fs para la generacion de los archivos JSON

npm install --save-dev @types/node

Estructura del sistema
----------------------

El sistema esta compuesto de la siguiente manera :

node_modules (Se agrega para agregar la funcionalidad de generacion de archivos JSON)

- src
    - models (Contiene las clases que presentan el modelo, Evento y Tipo Evento)
        - Evento.ts
        - Evento.js
        - TipoDeEvento.ts
        - TipoDeEvento.js
    - services (Contiene la clase manejador que permite administrar las funcionalidades para la clase Evento y Tipo Evento)
        - SistemaDeEventos.ts
        - SistemaDeEventos.js
    - util (Contiene una clase comun para poder ayudar a las demas clases)
        - Comun.ts
        - Comun.js
    - eventos.json (Archivo json de salida)
    - index.ts (Archivo utilizado para la ejcucion del sistema)
- gitingnore (Archivo utilizado para ingnorar las carpetas o archivos que se suben el repositorio github)
- package-lock.json (Archivo utilizado para el contenido de la carpeta node_modules)
- package.json (Archivo utilizado para la configuracion)
- tsconfir.json (Archivo utilizaod para la confoguracion de typescript)

