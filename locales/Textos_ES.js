let textos_ES={

    // mensajes BACK
    // ---------------------------------
    'SQL_OK':'', // action realizada con exito
    'SQL_KO':'', // action falla en la operacion en la bd
    //'ATRIBUTO_es_nulo_KO':'', significa que un atributo necesario no se ha enviado
    'dni_es_nulo_KO':'No se ha enviado el dni',
    //'ERROR_UPLOAD_ATRIBUTO_KO':'', significa que un atributo de tipo file no cumple condiciones de extension o tamaño, viene descrito en el resource
    'controlador_invalido':'', // no se envia la entidad
    'action_invalido':'', // no se envia la accion

//Congreso-----------------------------------------------------------

    "titulo_pagina_congreso": "Gestión de congreso",

    //Atributos:
   'codigo_congreso' :'Codigo del congreso',
   'nombre_congreso' :'Nombre del congreso',
   'acronimo_congreso' :'Acronimo del congreso',
   'anho_congreso' :'Fecha del congreso',
   'lugar_congreso' :'Lugar del congreso',
   'ficheropodf_congreso' :'Fichero PDF del congreso',
   'nuevo_ficheropdf_congreso' :'Nuevo fichero PDF del congreso',

   'label_codigo_congreso' :'Codigo del congreso',
   'label_nombre_congreso' :'Nombre del congreso',
   'label_acronimo_congreso' :'Acronimo del congreso',
   'label_anho_congreso' :'Fecha del congreso',
   'label_lugar_congreso' :'Lugar del congreso',
   'label_ficheropodf_congreso' :'Fichero PDF del congreso',
   'label_nuevo_ficheropdf_congreso' :'Nuevo fichero PDF del congreso',

    //Acciones:
    'ADD': 'Añadir',
    'SEARCH': 'Buscar',
    'titulo_form_ADD_congreso': 'Añadir un congreso',
    'titulo_form_EDIT_congreso': 'Editar un congreso',
    'titulo_form_DELETE_congreso': 'Eliminar un congreso',
    'titulo_form_SEARCH_congreso': 'Buscar un congreso',
    'titulo_form_SHOWCURRENT_congreso': 'Información del congreso',

    //Validaciones:
    'KO_codigo_congreso_tam_min': 'El código del congreso no puede contener menos de 4 caracteres',
    'KO_codigo_congreso_tam_max': 'El código del congreso no puede contener más de 11 caracteres',
    'KO_codigo_congreso_numeros': 'El código del congreso solo puede contener dígitos',

    'KO_nombre_congreso_tam_min': 'El nombre del congreso no puede contener menos de 2 caracteres',
    'KO_nombre_congreso_tam_max': 'El nombre del congreso no pede contener más de 100 caracteres',
    'KO_nombre_congreso_acentos_ñ_espacios': 'El nombre del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_acronimo_congreso_tam_min': 'El acronimo del congreso no puede contener menos de 2 caracteres',
    'KO_acronimo_congreso_tam_max': 'El acronimo del congreso no puede contener más de 20 caracteres',
    'KO_acronimo_congreso_no_acentos_ñ_espacios': 'El acronimo del congreso solo puede contener caracteres alfabéticos, sin acentos',

    'KO_anho_congreso_tam_min': 'La fecha del congreso debe seguir el formato dd/mm/aaaa',
    'KO_anho_congreso_tam_max': 'La fecha del congreso debe seguir el formato dd/mm/aaaa',
    'KO_anho_congreso_formato_fecha_correcto': 'La fecha del congreso debe ser correcta',

    'KO_lugar_congreso_tam_min': 'El lugar del congreso no puede contener menos de 2 caracteres',
    'KO_lugar_congreso_tam_max': 'El lugar del congreso no pede contener más de 20 caracteres',
    'KO_lugar_congreso_acentos_ñ_espacios': 'El lugar del congreso solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_ficheropdf_congreso_tam_min': 'El nombre del fichero PDF del congreso no puede contener menos de 1 caracter',
    'KO_ficheropdf_congreso_tam_max': 'El nombre del fichero PDF del congreso no puede contener más de 20 caracteres',
    'KO_ficheropdf_congreso_no_acentos_ñ_espacios_fich': 'El nombre del fichero PDF del congreso solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_ficheropdf_congreso_extension_fich_pdf': 'El fichero PDF del congreso debe tener la extensión .pdf',

    'KO_nuevo_ficheropdf_congreso_tam_min': 'El nombre del nuevo fichero PDF del congreso no puede contener menos de 1 caracter',
    'KO_nuevo_ficheropdf_congreso_tam_max': 'El nombre del nuevo fichero PDF del congreso no puede contener más de 20 caracteres',
    'KO_nuevo_ficheropdf_congreso_no_acentos_ñ_espacios_fich': 'El nombre del nuevo fichero PDF del congreso solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_nuevo_ficheropdf_congreso_extension_fich_pdf': 'El nuevo fichero PDF del congreso debe tener la extensión .pdf',

//Usuario-----------------------------------------------------------

    "titulo_pagina_usuario": "Gestión de usuario",

    //Atributos:
    'login_usuario': 'login del usuario',
    'password_usuario': 'Contraseña del usuario',
    'nombre_usuario': 'Nombre del usuario',
    'apellidos_usuario': 'Apellidos el usuario',
    'tituloacademico_usuario': 'Titulo académico del usuario',
    'tipocontrato_usuario': 'Tipo de contrato del usuario',
    'centro_usuario': 'Centro del usuario',
    'departamento_usuario': 'Departamento del usuario',
    'universidad_usuario': 'Universidad del usuario',
    'foto_usuario': 'Foto del usuario',
    'nueva_foto_usuario': 'Nueva foto del usuario',
    'tipo_usuario': 'Tipo de usuario',

    'label_login_usuario': 'login del usuario',
    'label_password_usuario': 'Contraseña del usuario',
    'label_nombre_usuario': 'Nombre del usuario',
    'label_apellidos_usuario': 'Apellidos el usuario',
    'label_tituloacademico_usuario': 'Titulo académico del usuario',
    'label_tipocontrato_usuario': 'Tipo de contrato del usuario',
    'label_centro_usuario': 'Centro del usuario',
    'label_departamento_usuario': 'Departamento del usuario',
    'label_universidad_usuario': 'Universidad del usuario',
    'label_foto_usuario': 'Foto del usuario',
    'label_nueva_foto_usuario': 'Nueva foto del usuario',
    'label_tipo_usuario': 'Tipo de usuario',

    //Acciones:
    'ADD': 'Añadir',
    'SEARCH': 'Buscar',
    'titulo_form_ADD_usuario': 'Añadir un usuario',
    'titulo_form_EDIT_usuario': 'Editar un usuario',
    'titulo_form_DELETE_usuario': 'Eliminar un usuario',
    'titulo_form_SEARCH_usuario': 'Buscar un usuario',
    'titulo_form_SHOWCURRENT_usuario': 'Información del usuario',

    //Validaciones:
    'KO_login_usuario_tam_min': 'El login del usuario no puede contener menos de 4 caracteres',
    'KO_login_usuario_tam_max': 'El login del usuario no puede contener más de 15 caracteres',
    'KO_login_usuario_acentos_ñ_espacios_numeros': 'El login del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos',

    'KO_password_usuario_tam_min': 'El password del usuario no puede contener menos de 3 caracteres',
    'KO_password_usuario_tam_max': 'El password del usuario no puede contener más de 32 caracteres',
    'KO_password_usuario_acentos_ñ_espacios_numeros': 'El password del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y dígitos',

    'KO_nombre_usuario_tam_min': 'El nombre del usuario no puede contener menos de 2 caracteres',
    'KO_nombre_usuario_tam_max': 'El nombre del usuario no pede contener más de 15 caracteres',
    'KO_nombre_usuario_acentos_ñ_espacios': 'El nombre del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_apellidos_usuario_tam_min': 'Los apellidos del usuario no pueden contener menos de 3 caracteres',
    'KO_apellidos_usuario_tam_max': 'Los apellidos del usuario no peden contener más de 30 caracteres',
    'KO_apellidos_usuario_acentos_ñ_espacios': 'Los apellidos del usuario solo pueden contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_tituloacademico_usuario_tam_min': 'El titulo academico del usuario no puede contener menos de 5 caracteres',
    'KO_tituloacademico_usuario_tam_max': 'El titulo academico del usuario no pede contener más de 100 caracteres',
    'KO_tituloacademico_usuario_acentos_ñ_espacios_puntuacion': 'El titulo academico del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_tipocontrato_usuario_tam_min': 'El tipo de contrato del usuario no puede contener menos de 1 caracter',
    'KO_tipocontrato_usuario_tam_max': 'El tipo de contrato del usuario no pede contener más de 40 caracteres',
    'KO_tipocontrato_usuario_acentos_ñ_espacios_puntuacion': 'El tipo de contrato del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_centro_usuario_tam_min': 'El centro del usuario no puede contener menos de 5 caracteres',
    'KO_centro_usuario_tam_max': 'El centro del usuario no pede contener más de 100 caracteres',
    'KO_centro_usuario_acentos_ñ_espacios_puntuacion': 'El centro del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ, espacios y signos de puntuación',

    'KO_departamento_usuario_tam_min': 'El departamento del usuario no puede contener menos de 5 caracteres',
    'KO_departamento_usuario_tam_max': 'El departamento del usuario no pede contener más de 100 caracteres',
    'KO_departamento_usuario_acentos_ñ_espacios': 'El departamento del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_universidad_usuario_tam_min': 'La universidad del usuario no puede contener menos de 5 caracteres',
    'KO_universidad_usuario_tam_max': 'La universidad del usuario no pede contener más de 40 caracteres',
    'KO_universidad_usuario_acentos_ñ_espacios': 'La universidad del usuario solo puede contener caracteres alfabéticos, con o sin acento, ñ y espacios',

    'KO_foto_usuario_tam_min': 'El nombre de la foto del usuario no puede contener menos de 1 caracter',
    'KO_foto_usuario_tam_max': 'El nombre de la foto del usuario no puede contener más de 20 caracteres',
    'KO_foto_usuario_no_acentos_ñ_espacios_fich': 'El nombre de la foto del usuario solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_foto_usuario_extension_fich_jpg_jpeg': 'La foto del usuario debe tener la extensión .jpg o .jpeg',

    'KO_nueva_foto_usuario_tam_min': 'El nombre de la nueva foto del usuario no puede contener menos de 1 caracter',
    'KO_nueva_foto_usuario_tam_max': 'El nombre de la nueva foto del usuario no puede contener más de 20 caracteres',
    'KO_nueva_foto_usuario_no_acentos_ñ_espacios_fich': 'El nombre de la nueva foto del usuario solo puede contener caracteres alfabéticos, . , \/ y \\',
    'KO_nueva_foto_usuario_extension_fich_jpg_jpeg': 'La nueva foto del usuario debe tener la extensión .jpg o .jpeg',

    "KO_tipo_usuario_formato":"El tipo de usuario solo puede ser uno de los valores permitidos (A o P)",

};

traduccion = textos_ES;

