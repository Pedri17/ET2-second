pruebas_test = Array(

//Congreso--------------------------------------------------------------------------------------------------------------

    //Pruebas de CodigoC:
    Array (1, 1, 'congreso', 'CodigoC', 'SEARCH', ' ', true),
    Array (2, 2, 'congreso', 'CodigoC', 'SEARCH', 'A', false),
    Array (2, 3, 'congreso', 'CodigoC', 'SEARCH', '1234A,', false),
    Array (2, 4, 'congreso', 'CodigoC', 'SEARCH', '12345', true),
    Array (3, 5, 'congreso', 'CodigoC', 'SEARCH', '12 34', false),
    Array (3, 6, 'congreso', 'CodigoC', 'SEARCH', '12345', true),

    //Pruebas de NombreC:
    Array (4, 7, 'congreso', 'NombreC', 'ADD/EDIT', 'A', false),
    Array (4, 8, 'congreso', 'NombreC', 'ADD/EDIT', 'Congreso de Antón', true),
    Array (5, 9, 'congreso', 'NombreC', 'SEARCH', ' ', true),
    Array (6, 10, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', false),
    Array (6, 11, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),
    Array (7, 12, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Congreso?', false),
    Array (7, 13, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Congreso de Antón 2', false),
    Array (7, 14, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),
    Array (8, 15, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'A', false),
    Array (8, 16, 'congreso', 'NombreC', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true),

    //Pruebas de AcronimoC:
    Array (9, 17, 'congreso', 'AcronimoC', 'ADD/EDIT', 'A', false),
    Array (9, 18, 'congreso', 'AcronimoC', 'ADD/EDIT', 'CongresoAnton', true),
    Array (10, 19, 'congreso', 'AcronimoC', 'SEARCH', ' ', true),
    Array (11, 20, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaa', false),
    Array (11, 21, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),
    Array (12, 22, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'Congreso?', false),
    Array (12, 23, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'CongresoAntón', false),
    Array (12, 24, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),
    Array (13, 25, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'A', false),
    Array (13, 26, 'congreso', 'AcronimoC', 'ADD/EDIT/SEARCH', 'CongresoAnton', true),

    //Pruebas de AnhoC:
    Array (14, 27, 'congreso', 'AnhoC', 'ADD/EDIT', '07/06', false),
    Array (14, 28, 'congreso', 'AnhoC', 'ADD/EDIT', '07/06/2002', true),
    Array (15, 29, 'congreso', 'AnhoC', 'SEARCH', ' ', true),
    Array (16, 30, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '0007/0006/2002', false),
    Array (16, 31, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '07/06/2002', true),
    Array (17, 32, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '99/99/9999', false),
    Array (17, 33, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '35/13/3002', false),
    Array (17, 34, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '07/06/2002', true),
    Array (18, 35, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '07/06', false),
    Array (18, 36, 'congreso', 'AnhoC', 'ADD/EDIT/SEARCH', '07/06/2002', true),

    //Pruebas de LugarC:
    Array (19, 37, 'congreso', 'LugarC', 'ADD/EDIT', 'Ou', false),
    Array (19, 38, 'congreso', 'LugarC', 'ADD/EDIT', 'Ourense', true),
    Array (20, 39, 'congreso', 'LugarC', 'SEARCH', ' ', true),
    Array (21, 40, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourenseeeeeeeeeeeeeeeeeeeeeee', false),
    Array (21, 41, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourense', true),
    Array (22, 42, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourense?', false),
    Array (22, 43, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourense 36002', false),
    Array (22, 44, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourense', true),
    Array (23, 45, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ou', false),
    Array (23, 46, 'congreso', 'LugarC', 'ADD/EDIT/SEARCH', 'Ourense', true),

    //Prueabs de FicheropdfC:
    Array (24, 47, 'congreso', 'FicheropdfC', 'ADD/EDIT', 'D.pdf', false),
    Array (24, 48, 'congreso', 'FicheropdfC', 'ADD/EDIT', 'DocumentoAnt.pdf', true),
    Array (25, 49, 'congreso', 'FicheropdfC', 'SEARCH', ' ', true),
    Array (26, 50, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoDelCongresoDeAntonElMejorCongresoDeTodos.pdf', false),
    Array (26, 51, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (27, 52, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAnt.mp4', false),
    Array (27, 53, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (28, 54, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAñt.pdf', false),
    Array (28, 55, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAntón.pdf', false),
    Array (28, 56, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),
    Array (29, 57, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'D.pdf', false),
    Array (29, 58, 'congreso', 'FicheropdfC', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true),

//Usuario------------------------------------------------------------------------------------------------------------

    //LoginU:
    Array (30, 59, 'usuario', 'LoginU', 'ADD/EDIT', 'Ant', false),
    Array (30, 60, 'usuario', 'LoginU', 'ADD/EDIT', 'Antón5', true),
    Array (31, 61, 'usuario', 'LoginU', 'SEARCH', ' ', true),
    Array (32, 62, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antttttttttttttttttttt', false),
    Array (32, 63, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antón5', true),
    Array (33, 64, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antón?', false),
    Array (33, 65, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antón.', false),
    Array (33, 66, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antón5', true),
    Array (34, 67, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Ant', false),
    Array (34, 68, 'usuario', 'LoginU', 'ADD/EDIT/SEARCH', 'Antón5', true),

    //PaswordU:
    Array (35, 69, 'usuario', 'PasswordU', 'ADD/EDIT', 'Cn', false),
    Array (35, 70, 'usuario', 'PasswordU', 'ADD/EDIT', 'Contraseña5', true),
    Array (36, 71, 'usuario', 'PasswordU', 'SEARCH', ' ', true),
    Array (37, 72, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contttttttttttttttttttttttttt', false),
    Array (37, 73, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contraseña5', true),
    Array (38, 74, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contraseña?', false),
    Array (38, 75, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contraseña.', false),
    Array (38, 76, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contraseña5', true),
    Array (39, 77, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Cn', false),
    Array (39, 78, 'usuario', 'PasswordU', 'ADD/EDIT/SEARCH', 'Contraseña5', true),

    //NombreU:
    Array (40, 79, 'usuario', 'NombreU', 'ADD/EDIT', 'An', false),
    Array (40, 80, 'usuario', 'NombreU', 'ADD/EDIT', 'Antón', true),
    Array (41, 81, 'usuario', 'NombreU', 'SEARCH', ' ', true),
    Array (42, 82, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Annnnnnnnnnnnnnnnnnn', false),
    Array (42, 83, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Antón', true),
    Array (43, 84, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Antón?', false),
    Array (43, 85, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Antón 2', false),
    Array (43, 86, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Antón', true),
    Array (44, 87, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'An', false),
    Array (44, 88, 'usuario', 'NombreU', 'ADD/EDIT/SEARCH', 'Antón', true),

    //ApellidosU:
    Array (45, 89, 'usuario', 'ApellidosU', 'ADD/EDIT', 'Frz', false),
    Array (45, 90, 'usuario', 'ApellidosU', 'ADD/EDIT', 'Fernández', true),
    Array (46, 91, 'usuario', 'ApellidosU', 'SEARCH', ' ', true),
    Array (47, 92, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernandezzzzzzzzzzzzzzzzzzzzzzzzz', false),
    Array (47, 93, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernández', true),
    Array (48, 94, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernández?', false),
    Array (48, 95, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernández 2', false),
    Array (48, 96, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernández', true),
    Array (49, 97, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Frz', false),
    Array (49, 98, 'usuario', 'ApellidosU', 'ADD/EDIT/SEARCH', 'Fernández', true),

    //TituloAcademicoU:
    Array (50, 99, 'usuario', 'TituloAcademicoU', 'ADD/EDIT', 'Tl', false),
    Array (50, 100, 'usuario', 'TituloAcademicoU', 'ADD/EDIT', 'Titulo académico, de prueba', true),
    Array (51, 101, 'usuario', 'TituloAcademicoU', 'SEARCH', ' ', true),
    Array (52, 102, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', false),
    Array (52, 103, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),
    Array (53, 104, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba 2', false),
    Array (53, 105, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba @', false),
    Array (53, 106, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),
    Array (54, 107, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Tl', false),
    Array (54, 108, 'usuario', 'TituloAcademicoU', 'ADD/EDIT/SEARCH', 'Titulo académico, de prueba', true),

    //TipoCOntratoU:
    Array (55, 109, 'usuario', 'TipoContratoU', 'ADD/EDIT', 'T', false),
    Array (55, 110, 'usuario', 'TipoContratoU', 'ADD/EDIT', 'Tipo de contrato A', true),
    Array (56, 111, 'usuario', 'TipoContratoU', 'SEARCH', ' ', true),
    Array (57, 112, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Ttttttttttttttttttttttttttttttttttttttttttttttttt', false),
    Array (57, 113, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),
    Array (58, 114, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Tipo de contrato A 2', false),
    Array (58, 115, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Tipo de contrato A @', false),
    Array (58, 116, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),
    Array (59, 117, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'T', false),
    Array (59, 118, 'usuario', 'TipoContratoU', 'ADD/EDIT/SEARCH', 'Tipo de contrato A', true),

    //CentroU:
    Array (60, 119, 'usuario', 'CentroU', 'ADD/EDIT', 'Cent', false),
    Array (60, 120, 'usuario', 'CentroU', 'ADD/EDIT', 'Centro académico, de prueba', true),
    Array (61, 121, 'usuario', 'CentroU', 'SEARCH', ' ', true),
    Array (62, 122, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centrooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', false),
    Array (62, 123, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),
    Array (63, 124, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba 2', false),
    Array (63, 125, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba @', false),
    Array (63, 126, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),
    Array (64, 127, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Cent', false),
    Array (64, 128, 'usuario', 'CentroU', 'ADD/EDIT/SEARCH', 'Centro académico, de prueba', true),

    //DepartamentoU:
    Array (65, 129, 'usuario', 'DepartamentoU', 'ADD/EDIT', 'Dep', false),
    Array (65, 130, 'usuario', 'DepartamentoU', 'ADD/EDIT', 'Departamento de informática', true),
    Array (66, 131, 'usuario', 'DepartamentoU', 'SEARCH', ' ', true),
    Array (67, 132, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeepartamento', false),
    Array (67, 133, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),
    Array (68, 134, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Departamento de informática 2', false),
    Array (68, 135, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Departamento de : informática', false),
    Array (68, 136, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),
    Array (69, 137, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Dep', false),
    Array (69, 138, 'usuario', 'DepartamentoU', 'ADD/EDIT/SEARCH', 'Departamento de informática', true),

    //UniversidadU:
    Array (70, 119, 'usuario', 'UniversidadU', 'ADD/EDIT', 'Uni', false),
    Array (70, 120, 'usuario', 'UniversidadU', 'ADD/EDIT', 'Universidad de Vigo', true),
    Array (71, 121, 'usuario', 'UniversidadU', 'SEARCH', ' ', true),
    Array (72, 122, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Uniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', false),
    Array (72, 123, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),
    Array (73, 124, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Universidad de Vigo 2', false),
    Array (73, 125, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Universidad de Vigo.', false),
    Array (73, 126, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),
    Array (74, 127, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Uni', false),
    Array (74, 128, 'usuario', 'UniversidadU', 'ADD/EDIT/SEARCH', 'Universidad de Vigo', true),

    //FotoU:
    Array (75, 129, 'usuario', 'FotoU', 'ADD/EDIT', 'A.jpg', false),
    Array (75, 130, 'usuario', 'FotoU', 'ADD/EDIT', 'FotoAntón.jpg', true),
    Array (76, 131, 'usuario', 'FotoU', 'SEARCH', ' ', true),
    Array (77, 132, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoDelAlumnoAntónUnAlumnoDeLaESEI.pdf', false),
    Array (77, 133, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (78, 134, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.mp3', false),
    Array (78, 135, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (78, 136, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.jpeg', true),
    Array (79, 137, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón?.jpg', false),
    Array (79, 138, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón2.jpg', false),
    Array (79, 139, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),
    Array (80, 140, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'A.jpg', false),
    Array (80, 141, 'usuario', 'FotoU', 'ADD/EDIT/SEARCH', 'FotoAntón.jpg', true),

    //TipoU:
    Array (81, 142, 'usuario', 'TipoU', 'ADD/EDIT', 'B', false),
    Array (81, 143, 'usuario', 'TipoU', 'ADD/EDIT', 'A', true),
    Array (81, 144, 'usuario', 'TipoU', 'ADD/EDIT', 'P', true),
    Array (82, 145, 'usuario', 'TipoU', 'SEARCH', ' ', true),
    Array (83, 146, 'usuario', 'TipoU', 'ADD/EDIT', 'B', false),
    Array (83, 147, 'usuario', 'TipoU', 'ADD/EDIT', 'A', true)

);