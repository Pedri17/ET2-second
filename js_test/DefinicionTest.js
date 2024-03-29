def_test = Array(

//Congreso---------------------------------------------------------------------------------------------------

    //Tests de CodigoC:
    Array(1, 'congreso', 'CodigoC', 'SEARCH', 'vacío', 'Éxito', 'Código introducido válido', true),
    Array(2, 'congreso', 'CodigoC', 'SEARCH', 'caracteres no numéricos', 'El código del congreso solo puede poseer dígitos', 'Código introducido inválido', false),
    Array(3, 'congreso', 'CodigoC', 'SEARCH', 'longitud entre 4 y 11, conformado por caracteres permitidos', 'Éxito', 'Código introducido válido', true),

    //Tests de NombreC:
    Array(4, 'congreso', 'NombreC', 'ADD/EDIT', 'tamaño menor a 2', 'El nombre del congreso no puede contener menos de 2 caracteres', 'Nombre introducido inválido', false),
    Array(5, 'congreso', 'NombreC', 'SEARCH', 'vacío', 'Éxito', 'Nombre introducido válido', true),
    Array(6, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El nombre del congreso no puede contener más de 100 caracteres', 'Nombre introducido inválido', false),
    Array(7, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El nombre del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Nombre introducido inválido', false),
    Array(8, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 100, conformado por caracteres permitidos', 'Éxito', 'Nombre introducido válido', true),

    //Tests de AcronimoC:
    Array(9, 'congreso', 'AcronimoC', 'ADD/EDIT', 'tamaño menor a 2', 'El acronimo del congreso no puede contener menos de 2 caracteres', 'Acronimo introducido inválido', false),
    Array(10, 'congreso', 'AcronimoC', 'SEARCH', 'vacío', 'Éxito', 'Acronimo introducido válido', true),
    Array(11, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El acronimo del congreso no puede contener más de 20 caracteres', 'Acronimo introducido inválido', false),
    Array(12, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El acronimo del congreso solo puede contener caracteres alfabéticos, sin acento', 'Acronimo introducido inválido', false),
    Array(13, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 20, conformado por caracteres apermitidos', 'Éxito', 'Acronimo introducido válido', true),

    //Tests de AnhoC:
    Array(14, 'congreso', 'AnhoC', 'ADD/EDIT', 'tamaño menor a 4', 'El año del congreso debe poseer 4 dígitos exactamente', 'Año introducida inválida', false),
    Array(15, 'congreso', 'AnhoC', 'SEARCH', 'vacío', 'Éxito', 'Año introducida válida', true),
    Array(16, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', 'tamaño superior a 4', 'El año del congreso debe poseer 4 dígitos exactamente', 'Año introducida inválida', false),
    Array(17, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El año del congreso solo puede contener dígitos ', 'Año introducida inválida', false),
    Array(18, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', 'longitud igual a 4, conformado por caracteres permitidos', 'Éxito', 'Año introducida válida', true),

    //Tests de LugarC:
    Array(19, 'congreso', 'LugarC', 'ADD/EDIT', 'tamaño menor a 4', 'El lugar del congreso no puede contener menos de 2 caracteres', 'Lugar introducido inválido', false),
    Array(20, 'congreso', 'LugarC', 'SEARCH', 'vacío', 'Éxito', 'Lugar introducido válido', true),
    Array(21, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El lugar del congreso no puede contener más de 20 caracteres', 'Lugar introducido inválido', false),
    Array(22, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El lugar del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Lugar introducido inválido', false),
    Array(23, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'longitud entre 4 y 20, conformado por caracteres permitidos', 'Éxito', 'Lugar introducido válido', true),

    //Tests de FicheropdfC:
    Array(24, 'congreso', 'FicheropdfC', 'ADD/EDIT', 'tamaño menor que 1', 'El fichero PDF del congreso debe tener una longitud mínima de 1 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(25, 'congreso', 'FicheropdfC', 'SEARCH', 'vacío', 'Éxito', 'Fichero PDF del congreso intrducido válido', true),
    Array(26, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'tamaño mayor que 20', 'El fichero PDF del congreso debe tener una longitud máxima de 20 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(27, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'extensión distinta a pdf', 'El fichero PDF del congreso debe ser un fichero con la extensión .pdf', 'Fichero PDF del congreso introducido inválido', false),
    Array(28, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El fichero PDF del congreso solo puede contener caracteres alfabéticos, sin acentos, . , \/ y \\', 'Fichero PDF del congreso introducido inválido', false),
    Array(29, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 20, con caracteres y extensión permitidos', 'Éxito', 'Fichero PDF del congreso intrducido válido', true),

//Usuario---------------------------------------------------------------------------------------------------

    //LoginU:
    Array(30, 'usuario', 'LoginU', 'ADD/EDIT', 'tamaño menor a 4', 'El login del usuario no puede contener menos de 4 caracteres', 'Login introducido inválido', false),
    Array(31, 'usuario', 'LoginU', 'SEARCH', 'vacío', 'Éxito', 'Login introducido válido', true),
    Array(32, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'tamaño superior a 15', 'El login del usuario no puede contener más de 15 caracteres', 'Login introducido inválido', false),
    Array(33, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El login del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos', 'Login introducido inválido', false),
    Array(34, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'longitud entre 4 y 15, conformado por caracteres permitidos', 'Éxito', 'Login introducido válido', true),

    //PasswordU:
    Array(35, 'usuario', 'PasswordU', 'ADD/EDIT', 'tamaño menor a 3', 'La contraseña del usuario no puede contener menos de 3 caracteres', 'Password introducido inválido', false),
    Array(36, 'usuario', 'PasswordU', 'SEARCH', 'vacío', 'Éxito', 'Password introducido válido', true),
    Array(37, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'tamaño superior a 32', 'La contraseña del usuario no puede contener más de 32 caracteres', 'Password introducido inválido', false),
    Array(38, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La contraseña del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos', 'Password introducido inválido', false),
    Array(39, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'longitud entre 3 y 32, conformado por caracteres permitidos', 'Éxito', 'Password introducido válido', true),

    //NombreU:
    Array(40, 'usuario', 'NombreU', 'ADD/EDIT', 'tamaño menor a 2', 'El nombre del usuario no puede contener menos de 2 caracteres', 'Nombre introducido inválido', false),
    Array(41, 'usuario', 'NombreU', 'SEARCH', 'vacío', 'Éxito', 'Nombre introducido válido', true),
    Array(42, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'tamaño superior a 15', 'El nombre del usuario no puede contener más de 15 caracteres', 'Nombre introducido inválido', false),
    Array(43, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El nombre del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Nombre introducido inválido', false),
    Array(44, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 15, conformado por caracteres permitidos', 'Éxito', 'Nombre introducido válido', true),

    //ApellidosU:
    Array(45, 'usuario', 'ApellidosU', 'ADD/EDIT', 'tamaño menor a 3', 'Los apellidos del usuario no puede contener menos de 3 caracteres', 'Apellidos introducidos inválidos', false),
    Array(46, 'usuario', 'ApellidosU', 'SEARCH', 'vacío', 'Éxito', 'Apellidos introducidos válidos', true),
    Array(47, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'tamaño superior a 30', 'Los apellidos del usuario no puede contener más de 30 caracteres', 'Apellidos introducidos inválidos', false),
    Array(48, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'Los apellidos del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Apellidos introducidos inválidos', false),
    Array(49, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'longitud entre 3 y 30, conformado por caracteres permitidos', 'Éxito', 'Apellidos introducidos válidos', true),

    //TituloAcademicoU:
    Array(50, 'usuario', 'TituloAcademicoU', 'ADD/EDIT', 'tamaño menor a 5', 'El título academico del usuario no puede contener menos de 5 caracteres', 'Título academico introducido inválido', false),
    Array(51, 'usuario', 'TituloAcademicoU', 'SEARCH', 'vacío', 'Éxito', 'Título academico introducido válido', true),
    Array(52, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El título academico del usuario no puede contener más de 100 caracteres', 'Título academico introducido inválido', false),
    Array(53, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El título academico del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Título academico introducido inválido', false),
    Array(54, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Título academico introducido válido', true),

    //TipoContratoU:
    Array(55, 'usuario', 'TipoContratoU', 'ADD/EDIT', 'tamaño menor a 1', 'El tipo de contrato del usuario no puede contener menos de 1 caracter', 'Tipo de contrato introducido inválido', false),
    Array(56, 'usuario', 'TipoContratoU', 'SEARCH', 'vacío', 'Éxito', 'Tipo de contrato introducido válido', true),
    Array(57, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'tamaño superior a 40', 'El tipo de contrato del usuario no puede contener más de 40 caracteres', 'Tipo de contrato introducido inválido', false),
    Array(58, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El tipo de contrato del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Tipo de contrato introducido inválido', false),
    Array(59, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 40, conformado por caracteres permitidos', 'Éxito', 'Tipo de contrato introducido válido', true),

    //CentroU:
    Array(60, 'usuario', 'CentroU', 'ADD/EDIT', 'tamaño menor a 5', 'El centro del usuario no puede contener menos de 5 caracteres', 'Centro introducido inválido', false),
    Array(61, 'usuario', 'CentroU', 'SEARCH', 'vacío', 'Éxito', 'Centro introducido válido', true),
    Array(62, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El centro del usuario no puede contener más de 100 caracteres', 'Centro introducido inválido', false),
    Array(63, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El centro del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Centro introducido inválido', false),
    Array(64, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Centro introducido válido', true),

    //DepartamentoU:
    Array(65, 'usuario', 'DepartamentoU', 'ADD/EDIT', 'tamaño menor a 5', 'El departamento del usuario no puede contener menos de 5 caracteres', 'Departamento introducido inválido', false),
    Array(66, 'usuario', 'DepartamentoU', 'SEARCH', 'vacío', 'Éxito', 'Departamento introducido válido', true),
    Array(67, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El departamento del usuario no puede contener más de 100 caracteres', 'Departamento introducido inválido', false),
    Array(68, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El departamento del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Departamento introducido inválido', false),
    Array(69, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Departamento introducido válido', true),

    //UniversidadU:
    Array(70, 'usuario', 'UniversidadU', 'ADD/EDIT', 'tamaño menor a 5', 'La universidad del usuario no puede contener menos de 5 caracteres', 'Universidad introducida inválida', false),
    Array(71, 'usuario', 'UniversidadU', 'SEARCH', 'vacío', 'Éxito', 'Universidad introducida válida', true),
    Array(72, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'tamaño superior a 40', 'La universidad del usuario no puede contener más de 40 caracteres', 'Universidad introducida inválida', false),
    Array(73, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La universidad del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Universidad introducida inválida', false),
    Array(74, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 40, conformado por caracteres permitidos', 'Éxito', 'Universidad introducida válida', true),

    //FotoU:
    Array(75, 'usuario', 'FotoU', 'ADD/EDIT', 'tamaño menor que 1', 'La foto del usuario debe tener una longitud mínima de 1 caracteres', 'Foto del usuario introducida inválida', false),
    Array(76, 'usuario', 'FotoU', 'SEARCH', 'vacío', 'Éxito', 'Foto del usuario intrducida válida', true),
    Array(77, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'tamaño mayor que 20', 'La foto del usuario debe tener una longitud máxima de 20 caracteres', 'Foto del usuario introducida inválida', false),
    Array(78, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'extensión distinta a jpg o jpeg', 'La foto del usuario debe ser un fichero con la extensión .jpg o .jpeg', 'Foto del usuario introducida inválida', false),
    Array(79, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La foto del usuario solo puede contener caracteres alfabéticos, sin acentos, . , \/ y \\', 'Foto del usuario introducido inválido', false),
    Array(80, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 20, con caracteres y extensión permitidos', 'Éxito', 'Foto del usuario intrducida válida', true),

    //TipoU:
    Array(81, 'usuario', 'TipoU', 'ADD/EDIT', 'valores no permitidos', 'El tipo de usuario debe seguir uno de los valores permitidos', 'Tipo de usuario introducido inválido', false),
    Array(82, 'usuario', 'TipoU', 'SEARCH', 'vacío', 'Éxito', 'Tipo de usuario introducido válido', true),
    Array(83, 'usuario', 'TipoU', 'ADD/EDIT/SEARCH', 'valores permitidos', 'Éxito', 'Tipo de usuario introducido válido', true)

);