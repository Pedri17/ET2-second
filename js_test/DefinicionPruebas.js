pruebas_test =

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
    Array (28, 56, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true)
    Array (29, 57, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'D.pdf', false),
    Array (29, 58, 'congreso', 'ficheropdf_congreso', 'ADD/EDIT/SEARCH', 'DocumentoAnt.pdf', true)

//Usuario------------------------------------------------------------------------------------------------------------