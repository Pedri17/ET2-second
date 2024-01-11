def_test = 

//Congreso---------------------------------------------------------------------------------------------------

    //CodigoC:
    Array(1, 'congreso', 'codigo_congreso', 'SEARCH', 'vacío', 'Éxito', 'Código introducido válido', true),
    Array(2, 'congreso', 'codigo_congreso', 'SEARCH', 'caracteres no numéricos', 'El código del congreso solo puede poseer dígitos', 'Código introducido inválido', false),
    Array(3, 'congreso', 'codigo_congreso', 'SEARCH', 'longitud entre 4 y 11, conformado por caracteres permitidos', 'Éxito', 'Código introducido válido', true),

    //nombreC:
    Array(4, 'congreso', 'nombre_congreso', 'ADD/EDIT', 'tamaño menor a 2', 'El nombre del congreso no puede contener menos de 2 caracteres', 'Nombre introducido inválido', false),
    Array(5, 'congreso', 'nombre_congreso', 'SEARCH', 'vacío', 'Éxito', 'Nombre introducido válido', true),
    Array(6, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El nombre del congreso no puede contener más de 100 caracteres', 'Nombre introducido inválido', false),
    Array(7, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El nombre del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Nombre introducido inválido', false),
    Array(8, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 100, conformado por carateres permitidos', 'Éxito', 'Nombre introducido válido', true),

    //AcronimoC:
    Array(9, 'congreso', 'acronimo_congreso', 'ADD/EDIT', 'tamaño menor a 2', 'El acronimo del congreso no puede contener menos de 2 caracteres', 'Acronimo introducido inválido', false),
    Array(10, 'congreso', 'acronimo_congreso', 'SEARCH', 'vacío', 'Éxito', 'Acronimo introducido válido', true),
    Array(11, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El acronimo del congreso no puede contener más de 20 caracteres', 'Acronimo introducido inválido', false),
    Array(12, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El acronimo del congreso solo puede contener caracteres alfabéticos, sin acento', 'Acronimo introducido inválido', false),
    Array(13, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 20, conformado por carateres apermitidos', 'Éxito', 'Acronimo introducido válido', true),

    //AnhoC:
    Array(14, 'congreso', 'anho_congreso', 'ADD/EDIT', 'tamaño menor a 10', 'La fecha del congreso debe seguir el formato dd/mm/aaaa', 'Fecha introducida inválida', false),
    Array(15, 'congreso', 'anho_congreso', 'SEARCH', 'vacío', 'Éxito', 'Fecha introducida válida', true),
    Array(16, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 10', 'La fecha del congreso debe seguir el formato dd/mm/aaaa', 'Fecha introducida inválida', false),
    Array(17, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'fecha inválida', 'la fecha del congreso debe ser válida, respetando los dias y meses existentes ', 'Fecha introducida inválida', false),
    Array(18, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'longitud igual a 10, con el formato correcto', 'Éxito', 'Fecha introducida válida', true),

    //LugarC:
    Array(4, 'congreso', 'lugar_congreso', 'ADD/EDIT', 'tamaño menor a 4', 'El lugar del congreso no puede contener menos de 2 caracteres', 'Lugar introducido inválido', false),
    Array(5, 'congreso', 'lugar_congreso', 'SEARCH', 'vacío', 'Éxito', 'Lugar introducido válido', true),
    Array(6, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El lugar del congreso no puede contener más de 20 caracteres', 'Lugar introducido inválido', false),
    Array(7, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El lugar del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Lugar introducido inválido', false),
    Array(8, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 4 y 20, conformado por carateres permitidos', 'Éxito', 'Lugar introducido válido', true),

    //FicheropdfC:
    Array(43, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT', 'tamaño menor que 1', 'El fichero PDF del congreso debe tener una longitud mínima de 10 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(44, 'congreso', 'ficheropdf_congreso', 'SEARCH', 'vacío', 'Éxito', 'Fichero PDF del congreso intrducido válido', true),
    Array(45, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'tamaño mayor que 20', 'El fichero PDF del congreso debe tener una longitud máxima de 100 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(46, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'extensión distinta a pdf', 'El fichero PDF del congreso debe ser un fichero con la extensión .pdf', 'Fichero PDF del congreso introducido inválido', false),
    Array(47, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'alfanumérico con acentos, con ñ ,espacios, caracteres especiales y signos de puntuación', 'El fichero PDF del congreso contiene algunos caracteres no permitidos', 'Fichero PDF del congreso introducido inválido', false),
    Array(48, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 20, con caracteres y extensión permitidos', 'Éxito', 'Fichero PDF del congreso intrducido válido', true)

//Usuario---------------------------------------------------------------------------------------------------