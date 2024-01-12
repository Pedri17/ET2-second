def_test = 

//Congreso---------------------------------------------------------------------------------------------------

    //Tests de CodigoC:
    Array(1, 'congreso', 'codigo_congreso', 'SEARCH', 'vacío', 'Éxito', 'Código introducido válido', true),
    Array(2, 'congreso', 'codigo_congreso', 'SEARCH', 'caracteres no numéricos', 'El código del congreso solo puede poseer dígitos', 'Código introducido inválido', false),
    Array(3, 'congreso', 'codigo_congreso', 'SEARCH', 'longitud entre 4 y 11, conformado por caracteres permitidos', 'Éxito', 'Código introducido válido', true),

    //Tests de NombreC:
    Array(4, 'congreso', 'nombre_congreso', 'ADD/EDIT', 'tamaño menor a 2', 'El nombre del congreso no puede contener menos de 2 caracteres', 'Nombre introducido inválido', false),
    Array(5, 'congreso', 'nombre_congreso', 'SEARCH', 'vacío', 'Éxito', 'Nombre introducido válido', true),
    Array(6, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El nombre del congreso no puede contener más de 100 caracteres', 'Nombre introducido inválido', false),
    Array(7, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El nombre del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Nombre introducido inválido', false),
    Array(8, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 100, conformado por caracteres permitidos', 'Éxito', 'Nombre introducido válido', true),

    //Tests de AcronimoC:
    Array(9, 'congreso', 'acronimo_congreso', 'ADD/EDIT', 'tamaño menor a 2', 'El acronimo del congreso no puede contener menos de 2 caracteres', 'Acronimo introducido inválido', false),
    Array(10, 'congreso', 'acronimo_congreso', 'SEARCH', 'vacío', 'Éxito', 'Acronimo introducido válido', true),
    Array(11, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El acronimo del congreso no puede contener más de 20 caracteres', 'Acronimo introducido inválido', false),
    Array(12, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El acronimo del congreso solo puede contener caracteres alfabéticos, sin acento', 'Acronimo introducido inválido', false),
    Array(13, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 20, conformado por caracteres apermitidos', 'Éxito', 'Acronimo introducido válido', true),

    //Tests de AnhoC:
    Array(14, 'congreso', 'anho_congreso', 'ADD/EDIT', 'tamaño menor a 10', 'La fecha del congreso debe seguir el formato dd/mm/aaaa', 'Fecha introducida inválida', false),
    Array(15, 'congreso', 'anho_congreso', 'SEARCH', 'vacío', 'Éxito', 'Fecha introducida válida', true),
    Array(16, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 10', 'La fecha del congreso debe seguir el formato dd/mm/aaaa', 'Fecha introducida inválida', false),
    Array(17, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'fecha inválida', 'la fecha del congreso debe ser válida, respetando los dias y meses existentes ', 'Fecha introducida inválida', false),
    Array(18, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', 'longitud igual a 10, con el formato correcto', 'Éxito', 'Fecha introducida válida', true),

    //Tests de LugarC:
    Array(19, 'congreso', 'lugar_congreso', 'ADD/EDIT', 'tamaño menor a 4', 'El lugar del congreso no puede contener menos de 2 caracteres', 'Lugar introducido inválido', false),
    Array(20, 'congreso', 'lugar_congreso', 'SEARCH', 'vacío', 'Éxito', 'Lugar introducido válido', true),
    Array(21, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'tamaño superior a 20', 'El lugar del congreso no puede contener más de 20 caracteres', 'Lugar introducido inválido', false),
    Array(22, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El lugar del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Lugar introducido inválido', false),
    Array(23, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 4 y 20, conformado por caracteres permitidos', 'Éxito', 'Lugar introducido válido', true),

    //Tests de FicheropdfC:
    Array(24, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT', 'tamaño menor que 1', 'El fichero PDF del congreso debe tener una longitud mínima de 1 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(25, 'congreso', 'ficheropdf_congreso', 'SEARCH', 'vacío', 'Éxito', 'Fichero PDF del congreso intrducido válido', true),
    Array(26, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'tamaño mayor que 20', 'El fichero PDF del congreso debe tener una longitud máxima de 20 caracteres', 'Fichero PDF del congreso introducido inválido', false),
    Array(27, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'extensión distinta a pdf', 'El fichero PDF del congreso debe ser un fichero con la extensión .pdf', 'Fichero PDF del congreso introducido inválido', false),
    Array(28, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El fichero PDF del congreso solo puede contener caracteres alfabéticos, sin acentos, . , \/ y \\', 'Fichero PDF del congreso introducido inválido', false),
    Array(29, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 20, con caracteres y extensión permitidos', 'Éxito', 'Fichero PDF del congreso intrducido válido', true)

//Usuario---------------------------------------------------------------------------------------------------

    //LoginU:
    Array(30, 'usuario', 'login_usuario', 'ADD/EDIT', 'tamaño menor a 4', 'El login del usuario no puede contener menos de 4 caracteres', 'Login introducido inválido', false),
    Array(31, 'usuario', 'login_usuario', 'SEARCH', 'vacío', 'Éxito', 'Login introducido válido', true),
    Array(32, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 15', 'El login del usuario no puede contener más de 15 caracteres', 'Login introducido inválido', false),
    Array(33, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El login del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos', 'Login introducido inválido', false),
    Array(34, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 4 y 15, conformado por caracteres permitidos', 'Éxito', 'Login introducido válido', true),

    //PasswordU:
    Array(35, 'usuario', 'password_usuario', 'ADD/EDIT', 'tamaño menor a 3', 'La contraseña del usuario no puede contener menos de 3 caracteres', 'Password introducido inválido', false),
    Array(36, 'usuario', 'password_usuario', 'SEARCH', 'vacío', 'Éxito', 'Password introducido válido', true),
    Array(37, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 32', 'La contraseña del usuario no puede contener más de 32 caracteres', 'Password introducido inválido', false),
    Array(38, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La contraseña del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos', 'Password introducido inválido', false),
    Array(39, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 3 y 32, conformado por caracteres permitidos', 'Éxito', 'Password introducido válido', true),

    //NombreU:
    Array(40, 'usuario', 'nombre_usuario', 'ADD/EDIT', 'tamaño menor a 2', 'El nombre del usuario no puede contener menos de 2 caracteres', 'Nombre introducido inválido', false),
    Array(41, 'usuario', 'nombre_usuario', 'SEARCH', 'vacío', 'Éxito', 'Nombre introducido válido', true),
    Array(42, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 15', 'El nombre del usuario no puede contener más de 15 caracteres', 'Nombre introducido inválido', false),
    Array(43, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El nombre del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Nombre introducido inválido', false),
    Array(44, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 2 y 15, conformado por caracteres permitidos', 'Éxito', 'Nombre introducido válido', true),

    //ApellidosU:
    Array(45, 'usuario', 'apellidos_usuario', 'ADD/EDIT', 'tamaño menor a 3', 'Los apellidos del usuario no puede contener menos de 3 caracteres', 'Apellidos introducidos inválidos', false),
    Array(46, 'usuario', 'apellidos_usuario', 'SEARCH', 'vacío', 'Éxito', 'Apellidos introducidos válidos', true),
    Array(47, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 30', 'Los apellidos del usuario no puede contener más de 30 caracteres', 'Apellidos introducidos inválidos', false),
    Array(48, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'Los apellidos del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Apellidos introducidos inválidos', false),
    Array(49, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 3 y 30, conformado por caracteres permitidos', 'Éxito', 'Apellidos introducidos válidos', true),

    //TituloAcademicoU:
    Array(50, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT', 'tamaño menor a 5', 'El título academico del usuario no puede contener menos de 5 caracteres', 'Título academico introducido inválido', false),
    Array(51, 'usuario', 'tituloacademico_usuario', 'SEARCH', 'vacío', 'Éxito', 'Título academico introducido válido', true),
    Array(52, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El título academico del usuario no puede contener más de 100 caracteres', 'Título academico introducido inválido', false),
    Array(53, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El título academico del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Título academico introducido inválido', false),
    Array(54, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Título academico introducido válido', true),

    //TipoContratoU:
    Array(55, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT', 'tamaño menor a 1', 'El tipo de contrato del usuario no puede contener menos de 1 caracter', 'Tipo de contrato introducido inválido', false),
    Array(56, 'usuario', 'tipocontrato_usuario', 'SEARCH', 'vacío', 'Éxito', 'Tipo de contrato introducido válido', true),
    Array(57, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 40', 'El tipo de contrato del usuario no puede contener más de 40 caracteres', 'Tipo de contrato introducido inválido', false),
    Array(58, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El tipo de contrato del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Tipo de contrato introducido inválido', false),
    Array(59, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 40, conformado por caracteres permitidos', 'Éxito', 'Tipo de contrato introducido válido', true),

    //CentroU:
    Array(60, 'usuario', 'centro_usuario', 'ADD/EDIT', 'tamaño menor a 5', 'El centro del usuario no puede contener menos de 5 caracteres', 'Centro introducido inválido', false),
    Array(61, 'usuario', 'centro_usuario', 'SEARCH', 'vacío', 'Éxito', 'Centro introducido válido', true),
    Array(62, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El centro del usuario no puede contener más de 100 caracteres', 'Centro introducido inválido', false),
    Array(63, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El centro del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación', 'Centro introducido inválido', false),
    Array(64, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Centro introducido válido', true),

    //DepartamentoU:
    Array(65, 'usuario', 'departamento_usuario', 'ADD/EDIT', 'tamaño menor a 5', 'El departamento del usuario no puede contener menos de 5 caracteres', 'Departamento introducido inválido', false),
    Array(66, 'usuario', 'departamento_usuario', 'SEARCH', 'vacío', 'Éxito', 'Departamento introducido válido', true),
    Array(67, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 100', 'El departamento del usuario no puede contener más de 100 caracteres', 'Departamento introducido inválido', false),
    Array(68, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'El departamento del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Departamento introducido inválido', false),
    Array(69, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 100, conformado por caracteres permitidos', 'Éxito', 'Departamento introducido válido', true),

    //UniversidadU:
    Array(70, 'usuario', 'universidad_usuario', 'ADD/EDIT', 'tamaño menor a 5', 'La universidad del usuario no puede contener menos de 5 caracteres', 'Universidad introducida inválida', false),
    Array(71, 'usuario', 'universidad_usuario', 'SEARCH', 'vacío', 'Éxito', 'Universidad introducida válida', true),
    Array(72, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'tamaño superior a 40', 'La universidad del usuario no puede contener más de 40 caracteres', 'Universidad introducida inválida', false),
    Array(73, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La universidad del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios', 'Universidad introducida inválida', false),
    Array(74, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 5 y 40, conformado por caracteres permitidos', 'Éxito', 'Universidad introducida válida', true),

    //FotoU:
    Array(75, 'usuario', 'foto_usuario', 'ADD/EDIT', 'tamaño menor que 1', 'La foto del usuario debe tener una longitud mínima de 1 caracteres', 'Foto del usuario introducida inválida', false),
    Array(76, 'usuario', 'foto_usuario', 'SEARCH', 'vacío', 'Éxito', 'Foto del usuario intrducida válida', true),
    Array(77, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'tamaño mayor que 20', 'La foto del usuario debe tener una longitud máxima de 20 caracteres', 'Foto del usuario introducida inválida', false),
    Array(78, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'extensión distinta a jpg o jpeg', 'La foto del usuario debe ser un fichero con la extensión .jpg o .jpeg', 'Foto del usuario introducida inválida', false),
    Array(79, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'caracteres no permitidos', 'La foto del usuario solo puede contener caracteres alfabéticos, sin acentos, . , \/ y \\', 'Foto del usuario introducido inválido', false),
    Array(80, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'longitud entre 1 y 20, con caracteres y extensión permitidos', 'Éxito', 'Foto del usuario intrducida válida', true),

    //TipoU:
    Array(81, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'valores no permitidos', 'El tipo de usuario debe seguir uno de los valores permitidos', 'Tipo de usuario introducido inválido', false),
    Array(82, 'usuario', 'tipo_usuario', 'SEARCH', 'vacío', 'Éxito', 'Tipo de usuario introducido válido', true),
    Array(83, 'usuario', 'tipo_usuario', 'ADD/EDIT/SEARCH', 'valores permitidos', 'Éxito', 'Tipo de usuario introducido válido', true)






