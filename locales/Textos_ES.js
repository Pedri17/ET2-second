let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'', // action realizada con exito
    'SQL_KO':'Error con SQL', // action falla en la operacion en la bd
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'CodigoC_es_nulo_KO': 'No se ha enviado el CodigoC',

    'dni_es_nulo_KO':'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'controlador_invalido':'', // no se envia la entidad
    'action_invalido':'', // no se envia la accion

//Congreso-----------------------------------------------------------

    "titulo_pagina_congreso": "Gestión de congreso",

    //Atributos:
   'CodigoC': 'Codigo del congreso',
   'NombreC': 'Nombre del congreso',
   'AcronimoC': 'Acronimo del congreso',
   'AnhoC': 'Fecha del congreso',
   'LugarC': 'Lugar del congreso',
   'FicheropdfC': 'Fichero PDF del congreso',
   'nuevo_FicheropdfC': 'Nuevo fichero PDF del congreso',

   'label_CodigoC': 'Codigo del congreso',
   'label_NombreC': 'Nombre del congreso',
   'label_AcronimoC': 'Acronimo del congreso',
   'label_AnhoC': 'Fecha del congreso',
   'label_LugarC': 'Lugar del congreso',
   'label_FicheropdfC': 'Fichero PDF del congreso',
   'label_nuevo_FicheropdfC': 'Nuevo fichero PDF del congreso',

    //Acciones:
    'ADD': 'Añadir',
    'SEARCH': 'Buscar',
    'titulo_form_ADD_congreso': 'Añadir un congreso',
    'titulo_form_EDIT_congreso': 'Editar un congreso',
    'titulo_form_DELETE_congreso': 'Eliminar un congreso',
    'titulo_form_SEARCH_congreso': 'Buscar un congreso',
    'titulo_form_SHOWCURRENT_congreso': 'Información del congreso',

    //Validaciones:
    'KO_CodigoC_tam_min': 'El código del congreso no puede contener menos de 4 caracteres',
    'KO_CodigoC_tam_max': 'El código del congreso no puede contener más de 11 caracteres',
    'KO_CodigoC_numeros': 'El código del congreso solo puede contener dígitos',

    'KO_NombreC_tam_min': 'El nombre del congreso no puede contener menos de 2 caracteres',
    'KO_NombreC_tam_max': 'El nombre del congreso no pede contener más de 100 caracteres',
    'KO_NombreC_acentos_ñ_espacios': 'El nombre del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_AcronimoC_tam_min': 'El acronimo del congreso no puede contener menos de 2 caracteres',
    'KO_AcronimoC_tam_max': 'El acronimo del congreso no puede contener más de 20 caracteres',
    'KO_AcronimoC_no_acentos_ñ_espacios': 'El acronimo del congreso solo puede contener caracteres alfabéticos, sin acentos',

    'KO_AnhoC_tam_min': 'El año del congreso debe poseer 4 dígitos',
    'KO_AnhoC_tam_max': 'El año del congreso debe poseer 4 dígitos',
    'KO_AnhoC_solo_numeros': 'El año del congreso solo puede contener dígitos',

    'KO_LugarC_tam_min': 'El lugar del congreso no puede contener menos de 2 caracteres',
    'KO_LugarC_tam_max': 'El lugar del congreso no pede contener más de 20 caracteres',
    'KO_LugarC_acentos_ñ_espacios': 'El lugar del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_FicheropdfC_tam_min': 'El nombre del fichero PDF del congreso no puede contener menos de 1 caracter',
    'KO_FicheropdfC_tam_max': 'El nombre del fichero PDF del congreso no puede contener más de 20 caracteres',
    'KO_FicheropdfC_no_acentos_ñ_espacios_fich': 'El nombre del fichero PDF del congreso solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_FicheropdfC_extension_fich_pdf': 'El fichero PDF del congreso debe tener la extensión .pdf',

    'KO_nuevo_FicheropdfC_tam_min': 'El nombre del nuevo fichero PDF del congreso no puede contener menos de 1 caracter',
    'KO_nuevo_FicheropdfC_tam_max': 'El nombre del nuevo fichero PDF del congreso no puede contener más de 20 caracteres',
    'KO_nuevo_FicheropdfC_no_acentos_ñ_espacios_fich': 'El nombre del nuevo fichero PDF del congreso solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_nuevo_FicheropdfC_extension_fich_pdf': 'El nuevo fichero PDF del congreso debe tener la extensión .pdf',

//Usuario-----------------------------------------------------------

    "titulo_pagina_usuario": "Gestión de usuario",

    //Atributos:
    'LoginU': 'login del usuario',
    'PasswordU': 'Contraseña del usuario',
    'NombreU': 'Nombre del usuario',
    'ApellidosU': 'Apellidos el usuario',
    'TituloAcademicoU': 'Titulo académico del usuario',
    'TipoContratoU': 'Tipo de contrato del usuario',
    'CentroU': 'Centro del usuario',
    'DepartamentoU': 'Departamento del usuario',
    'UniversidadU': 'Universidad del usuario',
    'FotoU': 'Foto del usuario',
    'nueva_FotoU': 'Nueva foto del usuario',
    'TipoU': 'Tipo de usuario',

    'label_LoginU': 'login del usuario',
    'label_PasswordU': 'Contraseña del usuario',
    'label_NombreU': 'Nombre del usuario',
    'label_ApellidosU': 'Apellidos el usuario',
    'label_TituloAcademicoU': 'Titulo académico del usuario',
    'label_TipoContratoU': 'Tipo de contrato del usuario',
    'label_CentroU': 'Centro del usuario',
    'label_DepartamentoU': 'Departamento del usuario',
    'label_UniversidadU': 'Universidad del usuario',
    'label_FotoU': 'Foto del usuario',
    'label_nueva_FotoU': 'Nueva foto del usuario',
    'label_TipoU': 'Tipo de usuario',

    //Acciones:
    'ADD': 'Añadir',
    'SEARCH': 'Buscar',
    'titulo_form_ADD_usuario': 'Añadir un usuario',
    'titulo_form_EDIT_usuario': 'Editar un usuario',
    'titulo_form_DELETE_usuario': 'Eliminar un usuario',
    'titulo_form_SEARCH_usuario': 'Buscar un usuario',
    'titulo_form_SHOWCURRENT_usuario': 'Información del usuario',

    //Validaciones:
    'KO_LoginU_tam_min': 'El login del usuario no puede contener menos de 4 caracteres',
    'KO_LoginU_tam_max': 'El login del usuario no puede contener más de 15 caracteres',
    'KO_LoginU_acentos_ñ_espacios_numeros': 'El login del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos',

    'KO_PasswordU_tam_min': 'El password del usuario no puede contener menos de 3 caracteres',
    'KO_PasswordU_tam_max': 'El password del usuario no puede contener más de 32 caracteres',
    'KO_PasswordU_acentos_ñ_espacios_numeros': 'El password del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos',

    'KO_NombreU_tam_min': 'El nombre del usuario no puede contener menos de 2 caracteres',
    'KO_NombreU_tam_max': 'El nombre del usuario no pede contener más de 15 caracteres',
    'KO_NombreU_acentos_ñ_espacios': 'El nombre del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_ApellidosU_tam_min': 'Los apellidos del usuario no pueden contener menos de 3 caracteres',
    'KO_ApellidosU_tam_max': 'Los apellidos del usuario no peden contener más de 30 caracteres',
    'KO_ApellidosU_acentos_ñ_espacios': 'Los apellidos del usuario solo pueden contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_TituloAcademicoU_tam_min': 'El titulo academico del usuario no puede contener menos de 5 caracteres',
    'KO_TituloAcademicoU_tam_max': 'El titulo academico del usuario no pede contener más de 100 caracteres',
    'KO_TituloAcademicoU_acentos_ñ_espacios_puntuacion': 'El titulo academico del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_TipoContratoU_tam_min': 'El tipo de contrato del usuario no puede contener menos de 1 caracter',
    'KO_TipoContratoU_tam_max': 'El tipo de contrato del usuario no pede contener más de 40 caracteres',
    'KO_TipoContratoU_acentos_ñ_espacios_puntuacion': 'El tipo de contrato del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_CentroU_tam_min': 'El centro del usuario no puede contener menos de 5 caracteres',
    'KO_CentroU_tam_max': 'El centro del usuario no pede contener más de 100 caracteres',
    'KO_CentroU_acentos_ñ_espacios_puntuacion': 'El centro del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_DepartamentoU_tam_min': 'El departamento del usuario no puede contener menos de 5 caracteres',
    'KO_DepartamentoU_tam_max': 'El departamento del usuario no pede contener más de 100 caracteres',
    'KO_DepartamentoU_acentos_ñ_espacios': 'El departamento del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_UniversidadU_tam_min': 'La universidad del usuario no puede contener menos de 5 caracteres',
    'KO_UniversidadU_tam_max': 'La universidad del usuario no pede contener más de 40 caracteres',
    'KO_UniversidadU_acentos_ñ_espacios': 'La universidad del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_FotoU_tam_min': 'El nombre de la foto del usuario no puede contener menos de 1 caracter',
    'KO_FotoU_tam_max': 'El nombre de la foto del usuario no puede contener más de 20 caracteres',
    'KO_FotoU_no_acentos_ñ_espacios_fich': 'El nombre de la foto del usuario solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_FotoU_extension_fich_jpg_jpeg': 'La foto del usuario debe tener la extensión .jpg o .jpeg',

    'KO_nueva_FotoU_tam_min': 'El nombre de la nueva foto del usuario no puede contener menos de 1 caracter',
    'KO_nueva_FotoU_tam_max': 'El nombre de la nueva foto del usuario no puede contener más de 20 caracteres',
    'KO_nueva_FotoU_no_acentos_ñ_espacios_fich': 'El nombre de la nueva foto del usuario solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_nueva_FotoU_extension_fich_jpg_jpeg': 'La nueva foto del usuario debe tener la extensión .jpg o .jpeg',

    "KO_TipoU_formato":"El tipo de usuario solo puede ser uno de los valores permitidos (A o P)",

};

traduccion = textos_ES;

