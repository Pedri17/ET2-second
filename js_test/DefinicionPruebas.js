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
    Array (8, 16, 'congreso', 'nombre_congreso', 'ADD/EDIT/SEARCH', 'Congreso de Antón', true)

    //Pruebas de 