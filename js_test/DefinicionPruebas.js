pruebas_test = Array(

//Congreso--------------------------------------------------------------------------------------------------------------

    //Pruebas de CodigoC:
    Array (1, 1, 'congreso', 'codigo_congreso', 'SEARCH', ' ', true),
    Array (2, 2, 'congreso', 'codigo_congreso', 'SEARCH', 'A', false),
    Array (2, 3, 'congreso', 'codigo_congreso', 'SEARCH', '1234A,', false),
    Array (2, 4, 'congreso', 'codigo_congreso', 'SEARCH', '12345', true),
    Array (3, 5, 'congreso', 'codigo_congreso', 'SEARCH', '12 34', false),
    Array (3, 6, 'congreso', 'codigo_congreso', 'SEARCH', '12345', true),

    //Pruebas de NombreC:
    Array (4, 7, 'congreso', 'nombre_congreso', 'ADD/EDIT', 'A', false),
    Array (4, 8, 'congreso', 'nombre_congreso', 'ADD/EDIT', 'Congreso de Antón', true),
    Array (5, 9, 'congreso', 'nombre_congreso', 'SEARCH', ' ', true),
    Array (6, 10, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false),
    Array (6, 11, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),
    Array (7, 12, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso?', false),
    Array (7, 13, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso de Antón 2', false),
    Array (7, 14, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),
    Array (8, 15, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'A', false),
    Array (8, 16, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),

    //Pruebas de AcronimoC:
    Array (9, 17, 'congreso', 'acronimo_congreso', 'ADD/EDIT', 'A', false),
    Array (9, 18, 'congreso', 'acronimo_congreso', 'ADD/EDIT', 'CongresoAnton', true),
    Array (10, 19, 'congreso', 'acronimo_congreso', 'SEARCH', ' ', true),
    Array (11, 20, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaa', false),
    Array (11, 21, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),
    Array (12, 22, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'Congreso?', false),
    Array (12, 23, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'CongresoAntón', false),
    Array (12, 24, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),
    Array (13, 25, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'A', false),
    Array (13, 26, 'congreso', 'acronimo_congreso', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),

    //Pruebas de AnhoC:
    Array (14, 27, 'congreso', 'anho_congreso', 'ADD/EDIT', '07/06', false),
    Array (14, 28, 'congreso', 'anho_congreso', 'ADD/EDIT', '07/06/2002', true),
    Array (15, 29, 'congreso', 'anho_congreso', 'SEARCH', ' ', true),
    Array (16, 30, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '0007/0006/2002', false),
    Array (16, 31, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '07/06/2002', true),
    Array (17, 32, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '99/99/9999', false),
    Array (17, 33, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '35/13/3002', false),
    Array (17, 34, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '07/06/2002', true),
    Array (18, 35, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '07/06', false),
    Array (18, 36, 'congreso', 'anho_congreso', 'ADD/EDIT/SEARCH', '07/06/2002', true),

    //Pruebas de LugarC:
    Array (19, 37, 'congreso', 'lugar_congreso', 'ADD/EDIT', 'Ou', false),
    Array (19, 38, 'congreso', 'lugar_congreso', 'ADD/EDIT', 'Ourense', true),
    Array (20, 39, 'congreso', 'lugar_congreso', 'SEARCH', ' ', true),
    Array (21, 40, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourenseeeeeeeeeeeeeeeeeeeeeee', false),
    Array (21, 41, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourense', true),
    Array (22, 42, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourense?', false),
    Array (22, 43, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourense 36002', false),
    Array (22, 44, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourense', true),
    Array (23, 45, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ou', false),
    Array (23, 46, 'congreso', 'lugar_congreso', 'ADD/EDIT/SEARCH', 'Ourense', true),

    //Prueabs de FicheropdfC:
    Array (24, 47, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT', 'D.pdf', false),
    Array (24, 48, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT', 'DocumentoAnt.pdf', true),
    Array (25, 49, 'congreso', 'ficheropdf_congreso', 'SEARCH', ' ', true),
    Array (26, 50, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoDelCongresoDeAntonElMejorCongresoDeTodos.pdf', false),
    Array (26, 51, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (27, 52, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.mp4', false),
    Array (27, 53, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (28, 54, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAñt.pdf', false),
    Array (28, 55, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAntón.pdf', false),
    Array (28, 56, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (29, 57, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'D.pdf', false),
    Array (29, 58, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),

//Usuario------------------------------------------------------------------------------------------------------------

    //LoginU:
    Array (30, 59, 'usuario', 'login_usuario', 'ADD/EDIT', 'Ant', false),
    Array (30, 60, 'usuario', 'login_usuario', 'ADD/EDIT', 'Antón5', true),
    Array (31, 61, 'usuario', 'login_usuario', 'SEARCH', ' ', true),
    Array (32, 62, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antttttttttttttttttttt', false),
    Array (32, 63, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antón5', true),
    Array (33, 64, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antón?', false),
    Array (33, 65, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antón.', false),
    Array (33, 66, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antón5', true),
    Array (34, 67, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Ant', false),
    Array (34, 68, 'usuario', 'login_usuario', 'ADD/EDIT/SEARCH', 'Antón5', true),

    //PaswordU:
    Array (35, 69, 'usuario', 'password_usuario', 'ADD/EDIT', 'Cn', false),
    Array (35, 70, 'usuario', 'password_usuario', 'ADD/EDIT', 'Contraseña5', true),
    Array (36, 71, 'usuario', 'password_usuario', 'SEARCH', ' ', true),
    Array (37, 72, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contttttttttttttttttttttttttt', false),
    Array (37, 73, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contraseña5', true),
    Array (38, 74, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contraseña?', false),
    Array (38, 75, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contraseña.', false),
    Array (38, 76, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contraseña5', true),
    Array (39, 77, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Cn', false),
    Array (39, 78, 'usuario', 'password_usuario', 'ADD/EDIT/SEARCH', 'Contraseña5', true),

    //NombreU:
    Array (40, 79, 'usuario', 'nombre_usuario', 'ADD/EDIT', 'An', false),
    Array (40, 80, 'usuario', 'nombre_usuario', 'ADD/EDIT', 'Antón', true),
    Array (41, 81, 'usuario', 'nombre_usuario', 'SEARCH', ' ', true),
    Array (42, 82, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Annnnnnnnnnnnnnnnnnn', false),
    Array (42, 83, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Antón', true),
    Array (43, 84, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Antón?', false),
    Array (43, 85, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Antón 2', false),
    Array (43, 86, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Antón', true),
    Array (44, 87, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'An', false),
    Array (44, 88, 'usuario', 'nombre_usuario', 'ADD/EDIT/SEARCH', 'Antón', true),

    //ApellidosU:
    Array (45, 89, 'usuario', 'apellidos_usuario', 'ADD/EDIT', 'Frz', false),
    Array (45, 90, 'usuario', 'apellidos_usuario', 'ADD/EDIT', 'Fernández', true),
    Array (46, 91, 'usuario', 'apellidos_usuario', 'SEARCH', ' ', true),
    Array (47, 92, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernandezzzzzzzzzzzzzzzzzzzzzzzzz', false),
    Array (47, 93, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernández', true),
    Array (48, 94, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernández?', false),
    Array (48, 95, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernández 2', false),
    Array (48, 96, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernández', true),
    Array (49, 97, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Frz', false),
    Array (49, 98, 'usuario', 'apellidos_usuario', 'ADD/EDIT/SEARCH', 'Fernández', true),

    //TituloAcademicoU:
    Array (50, 99, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT', 'Tl', false),
    Array (50, 100, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT', 'Titulo académico, de prueba', true),
    Array (51, 101, 'usuario', 'tituloacademico_usuario', 'SEARCH', ' ', true),
    Array (52, 102, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', false),
    Array (52, 103, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),
    Array (53, 104, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba 2', false),
    Array (53, 105, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba @', false),
    Array (53, 106, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),
    Array (54, 107, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Tl', false),
    Array (54, 108, 'usuario', 'tituloacademico_usuario', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),

    //TipoCOntratoU:
    Array (55, 109, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT', 'T', false),
    Array (55, 110, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT', 'Tipo de contrato A', true),
    Array (56, 111, 'usuario', 'tipocontrato_usuario', 'SEARCH', ' ', true),
    Array (57, 112, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Ttttttttttttttttttttttttttttttttttttttttttttttttt', false),
    Array (57, 113, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),
    Array (58, 114, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Tipo de contrato A 2', false),
    Array (58, 115, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Tipo de contrato A @', false),
    Array (58, 116, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),
    Array (59, 117, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'T', false),
    Array (59, 118, 'usuario', 'tipocontrato_usuario', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),

    //CentroU:
    Array (60, 119, 'usuario', 'centro_usuario', 'ADD/EDIT', 'Cent', false),
    Array (60, 120, 'usuario', 'centro_usuario', 'ADD/EDIT', 'Centro académico, de prueba', true),
    Array (61, 121, 'usuario', 'centro_usuario', 'SEARCH', ' ', true),
    Array (62, 122, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centrooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', false),
    Array (62, 123, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),
    Array (63, 124, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba 2', false),
    Array (63, 125, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba @', false),
    Array (63, 126, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),
    Array (64, 127, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Cent', false),
    Array (64, 128, 'usuario', 'centro_usuario', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),

    //DepartamentoU:
    Array (65, 129, 'usuario', 'departamento_usuario', 'ADD/EDIT', 'Dep', false),
    Array (65, 130, 'usuario', 'departamento_usuario', 'ADD/EDIT', 'Departamento de informática', true),
    Array (66, 131, 'usuario', 'departamento_usuario', 'SEARCH', ' ', true),
    Array (67, 132, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeepartamento', false),
    Array (67, 133, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),
    Array (68, 134, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Departamento de informática 2', false),
    Array (68, 135, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Departamento de : informática', false),
    Array (68, 136, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),
    Array (69, 137, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Dep', false),
    Array (69, 138, 'usuario', 'departamento_usuario', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),

    //UniversidadU:
    Array (70, 119, 'usuario', 'universidad_usuario', 'ADD/EDIT', 'Uni', false),
    Array (70, 120, 'usuario', 'universidad_usuario', 'ADD/EDIT', 'Universidad de Vigo', true),
    Array (71, 121, 'usuario', 'universidad_usuario', 'SEARCH', ' ', true),
    Array (72, 122, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Uniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', false),
    Array (72, 123, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),
    Array (73, 124, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Universidad de Vigo 2', false),
    Array (73, 125, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Universidad de Vigo.', false),
    Array (73, 126, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),
    Array (74, 127, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Uni', false),
    Array (74, 128, 'usuario', 'universidad_usuario', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),

    //FotoU:
    Array (75, 129, 'usuario', 'foto_usuario', 'ADD/EDIT', 'A.jpg', false),
    Array (75, 130, 'usuario', 'foto_usuario', 'ADD/EDIT', 'FotoAntón.jpg', true),
    Array (76, 131, 'usuario', 'foto_usuario', 'SEARCH', ' ', true),
    Array (77, 132, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoDelAlumnoAntónUnAlumnoDeLaESEI.pdf', false),
    Array (77, 133, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (78, 134, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.mp3', false),
    Array (78, 135, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (78, 136, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.jpeg', true),
    Array (79, 137, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón?.jpg', false),
    Array (79, 138, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón2.jpg', false),
    Array (79, 139, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (80, 140, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'A.jpg', false),
    Array (80, 141, 'usuario', 'foto_usuario', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),

    //TipoU:
    Array (81, 142, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'B', false),
    Array (81, 143, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'A', true),
    Array (81, 144, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'P', true),
    Array (82, 145, 'usuario', 'tipo_usuario', 'SEARCH', ' ', true),
    Array (83, 146, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'B', false),
    Array (83, 147, 'usuario', 'tipo_usuario', 'ADD/EDIT', 'A', true)

);