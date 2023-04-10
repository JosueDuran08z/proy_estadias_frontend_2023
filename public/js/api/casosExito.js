function regresar(){
    document.getElementById('card-1').style.display="none";
    document.getElementById('card-2').style.display="none";
    document.getElementById('card-3').style.display="none";
    document.getElementById('card-4').style.display="none";
    document.getElementById('card-5').style.display="none";
    document.getElementById('card-6').style.display="none";
    document.getElementById('textoCasosExito').innerHTML="";
    document.getElementById('casosExito1').style.visibility="visible";
    document.getElementById('casosExito2').style.visibility="visible";
}
function noticia(option){

    if(option == 1){
        document.getElementById('card-1').style.display="block";
        var noticia=" <h3>CERTIFICADO DE SECUNDARIA LE AYUDA A MEJORAR EN SU TRABAJO</h3><br><br>Para Yolanda, la educación es la principal herramienta para detonar el desarrollo personal y profesional de las y los guanajuatenses.<br><br>"+
    "San Diego de la Unión, Guanajuato, a 26 de septiembre de 2021.- De pequeña, María Yolanda Hernández Guerrero solo pudo concluir sus estudios de primaria, dijo que, anteriormente las oportunidades para las mujeres eran escasas.<br><br>"+
    "Afortunadamente, dice que, los tiempos ya cambiaron y hoy en día existe la oportunidad de retomar o iniciar sus estudios de educación básica con INAEBA.<br><br>"+
    "A los 50 años, María Yolanda logró acreditar la secundaria y recibió por parte del director general del instituto, Eusebio Vega Pérez su certificado con validez oficial.<br><br>"+
    "Para mí es un nivel más de oportunidades porque hoy en día las personas mejores preparadas, con nivel educativo más alto, tienen mejores oportunidades de trabajo; para mí es un orgullo y pienso seguir superándome, porque es muy importante en el trabajo donde estoy y por mi vida personal.<br><br>"+
    "Doña Yolanda habita en el Área Natural Protegida Presa de San Francisco, ubicada en el municipio de San Diego de la Unión y se desempeña como artesana, al dedicarse a la preparación de productos elaborados a mano como: pomadas, mermeladas, extractos de plantas medicinales, cápsulas, salsas, entre otros.<br><br>"+
    "Además, apoya en las actividades que tienen como objetivo impulsar el turismo en su comunidad, por lo que frecuentemente se inscribe a cursos que le ayudan a mejorar la experiencia de los visitantes.<br><br>"+
    "Para mí, la educación tiene un nivel muy importante en mi vida, porque estamos cada día enfrentándonos a nuevas formas de ventas y ahí necesitamos estar cada día mejor preparados a nivel educativo, porque es importante en lo personal y en lo profesional.<br><br>"+
    "A la par de su trabajo, ella estudió la secundaria y su deseo es continuar con la preparatoria y para ello cuenta con el apoyo de su familia.<br><br>"+
    "Yo les puedo decir que, se animen a estudiar, que sí se puede, que así vamos a tener mejores oportunidades de trabajo y claro, ponerles ese ejemplo a nuestros hijos; a mis 50 años pude, claro que las demás personas pueden y nunca es tarde para prepararse, no hay persona más pobre que aquella que carece de conocimientos; además no pudo evitar decir con orgullo ahora ya puedo decir que tengo secundaria terminada.<br><br><center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    if(option == 2){
        document.getElementById('card-2').style.display="block";
        var noticia="<h3>DEJA LAS DROGAS Y LE DA UN IMPULSO A SU VIDA POR MEDIO DE LA EDUCACIÓN</h3>Con el apoyo de “YouthBuild” en alianza con INAEBA más jóvenes que buscan abandonar el rezago educativo salen adelante.<br><br>"+
        "León, Guanajuato, a 05 de septiembre de 2021.- En la vida de Fátima Guadalupe García Fuentes, la educación se convirtió en la llave y pieza clave para dejar atrás el mundo de las drogas al aprovechar esta nueva oportunidad, decidió darle un impulso a su vida y así alcanzar sus sueños.<br><br>"+
        "Su historia se remonta a cuando cursó el segundo grado de secundaria, en esa época comenzó a consumir sustancias ilícitas, lo que la orilló a abandonar la escuela y su proyecto de vida se vino abajo y luego desapareció.<br><br>"+
        "Yo empecé a desbalagarme en las drogas, entonces me salí de segundo de secundaria, todo estaba perdido para mí hasta que, cambié mi forma de pensar, me pregunté qué estaba haciendo; me metí al INAEBA y con ese ímpetu terminé mi secundaria.<br><br>"+
        "Ahora con 21 años, Fátima dice haber cambiado el chip de su mente y ahora el tener un mejor futuro como el principal motivo para superarse.<br><br>"+
        "Con los servicios educativos de INAEBA, ella logró acreditar sus estudios de secundaria y al obtener su certificado oficial de este nivel fue canalizada al programa “Jóvenes con Rumbo” que opera la asociación civil <b>YouthBuild México</b>, donde logró concluir posteriormente la preparatoria.<br><br>"+
        "Yo creo que tengo bastantes metas en mi mente por ahora y fue una esperanza para mí haber entrado a INAEBA y a Jóvenes con Rumbo, porque yo pensé que no acabaría la secundaria; pensar en un porvenir es lo que me impulsó y me abrió el camino.<br><br>"+
        "Hoy, con su certificado de preparatoria, ella busca emprender un negocio propio y próximamente abrirá su tienda de abarrotes, proyecto que construyó desde varios meses atrás y del cual aprendió de su familia, pues varios se dedican al comercio.<br><br>"+
        "Ahora estoy completamente decidida y concentrada en lo venidero; el pasado ya lo dejé ahí y pretendo seguir con el sueño de tener algo mío y echar para adelante para mis metas”.<br><br>"+
        "Yo pienso que la preparación académica es la base de todo, porque sin educación no vas a tener un buen trabajo o no vas a tener ningún negocio o algo así, todo tiene que ver con la educación. Todo se puede en esta vida”.<br><br>"+
        "Para Fátima, la educación, hoy en día, es la herramienta que cambió su vida, pues pasó de estar inmersa en una situación complicada, sin un rubo definido en su proyecto de vida a tener un entorno diferente que cambió su calidad de vida para bien. Ahora busca convertirse en ejemplo para más jóvenes guanajuatenses a través de sus vivencias<center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    if(option == 3){
        document.getElementById('card-3').style.display="block";
        var noticia="<h3>BUSCA CONVERTIRSE EN VETERINARIA CON AYUDA DE INAEBA</h3>Lizbeth sueña con estudiar la universidad, actualmente cursa la prepa y trabaja en la farmacia de un hospital.<br><br>"+
        "León, Guanajuato, a 28 de julio de 2021.- El Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) brinda a las y los guanajuatenses, de 15 años o más que se encuentran en rezago educativo, la oportunidad de iniciar o retomar sus estudios de primaria y secundaria, así como aprender a leer y escribir.<br><br>"+
        "Muestra de ello es la historia de Lizbeth Zapata, que se escribe desde muy pequeña cuando llegó al municipio de León para comenzar a vivir con sus abuelos.<br><br>"+
        "Pese a inscribirse a la secundaria, los gastos familiares la obligaron a que abandonara la escuela y comenzara a trabajar.<br><br>"+
        "En su colonia, ella se encargaba de realizar algunos mandados a los vecinos a cambio de monedas que ayudaron a la economía del hogar, sin embargo, nunca abandonó el objetivo de estudiar, deseo que más tarde se le cumpliría paso a paso.<br><br>"+
        "“De verdad que era lo que anhelaba mucho, pero desgraciadamente era trabajar porque no había para solventar los gastos que implicaba el estudiar”.<br><br>"+
        "A los 25 años de edad, Lizbeth navegaba por la red social Facebook y se encontró con una imagen del INAEBA que llamó su atención, por lo cual no dudó en pedir informes de los servicios educativos.<br><br>"+
        "También, una de sus excompañeras de la secundaria realizaba su servicio social con el instituto, por lo que le ofreció mayor información y le ayudó a inscribirse para retomar sus estudios.<br><br>"+
        "“Nadie me sacaba de la cabeza que quería estudiar la universidad, entonces le seguí con la prepa y estoy en que la tengo que terminar porque sí puedo, quiero seguir avanzando en mis estudios; INAEBA se adaptó a mis horarios de trabajo”.<br><br>"+
        "Después de recibir su certificado de secundaria, Lizbeth comenzó la prepa abierta y trabaja en el área de farmacia dentro de un hospital.<br><br>"+
        "Su meta es convertirse en veterinaria, pues es algo que le atrae desde pequeña y es mucho su interés por ayudar a los animales.<br><br>"+
        "“Ya he trabajado en algunas veterinarias, la verdad desde siempre me ha gustado, aparte de que me gustan mucho los animales; desde que tengo uso de razón he dicho que quiero estudiar veterinaria, nunca es tarde, si quiero lo voy a hacer”.<br><br>"+
        "Pese a que sus abuelos fallecieron hace 5 años, ella no olvida el apoyo incondicional que siempre le brindaron para que retomara sus estudios y ahora, su esposo se ha convertido en su apoyo, pues él la motiva para continuar con su formación académica y lograr esa meta de ser profesionista.<br><br>"+
        "“Sigan adelante, mientras tú quieras hacer las cosas se puede y eso de la edad, la verdad hay que dejar esos prejuicios de lado, porque nunca es tarde para hacer las cosas, más aún si tienes muchas metas”, fue el mensaje que quiso dar Lizbeth a las y los guanajuatenses que se encuentran en rezago educativo, con la intención de motivarlos en acercarse al INAEBA para iniciar o retomar sus estudios.<br><br>"+
        "<center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    if(option == 4){
        document.getElementById('card-4').style.display="block";
        var noticia="<h3>PASA MÁS TIEMPO CON SUS HIJOS Y AHORA TIENE UN MEJOR EMPLEO</h3>Al obtener su certificado de secundaria, Sayra pudo acceder a mejores oportunidades laborales, que le permiten pasar más tiempo con sus hijos.<br><br>"+
        "León, Guanajuato, a 27 de junio de 2021.- Cuando Sayra Guadalupe Jasso Martínez recién ingresaba a la secundaria, en su familia se presentaron algunos problemas económicos, lo que le impidió continuar con sus estudios y tuvo que abandonar la escuela.<br><br>"+
        "Mediante una visita que realizaron los promotores del Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) a su trabajo, se enteró de la oportunidad que tenía para poder concluir con la secundaria a sus 24 años; inmediatamente se inscribió a los servicios educativos.<br><br>"+
        "“Prácticamente en todos los trabajos, ya es un requisito la secundaria, entonces yo soy madre soltera y quería avanzar, crecer y sin la secundaria o los estudios no te dan trabajo; en varias ocasiones, me preguntaban hasta qué grado estudié, decía que primaria y me decían que necesitaban a alguien con secundaria mínimo, hay veces en que te desesperas porque sientes que se te cierran las puertas por falta de estudios”, dijo.<br><br>"+
        "Ya con el certificado de secundaria en sus manos, Sayra consiguió empleo en una oficina, el cual le permite tener tiempo para dedicárselo a sus hijos.<br><br>"+
        "Su meta es continuar con la preparatoria y servir de ejemplo para ellos, al hablarles sobre la importancia de la educación para poder acceder a mejores oportunidades laborales, económicas y personales.<br><br>"+
        "“Ahorita que tengo mis papeles, mi certificado en la mano, para mí fue algo muy bonito, maravilloso, porque antes se me cerraba mi mundo y era una desesperación; si puedo seguir estudiando lo voy a seguir haciendo para progresar y eso les digo a mis hijos, que deben estudiar porque como está la situación, solamente los estudios te hacen crecer”.<br><br>"+
        "Sayra tuvo que combinar su trabajo con el rol de mamá, además de estudiar para sus exámenes de secundaria, que, a pesar de ser un periodo difícil, ahora le satisface contar con su certificado de secundaria, el cual le sirvió para obtener un mejor empleo.<br><br>"+
        "“El que quiere puede, yo siempre decía que no tenía tiempo porque entraba a trabajar a las 6 de la mañana y salía a las 2 de la tarde, de repente cuando hacía falta el dinero me quedaba a doblar tuno y salía hasta las 6 o 7 de la noche; pero cuando uno quiere y se propone hacer las cosas, uno busca la manera”.<br><br>"+
        "El INAEBA atiende a la población guanajuatense, mayor de 15 años, a aprovechar los servicios educativos que, de manera gratuita, ofrece el instituto y así poder obtener un certificado de primaria y secundaria que permita a las personas continuar con sus sueños.<br><br>"+
        "<center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    if(option == 5){
        document.getElementById('card-5').style.display="block";
        var noticia="<h3>SE CONVIERTE EN EJEMPLO DE SUPERACIÓN PARA SUS HIJOS</h3>Georgina estudió la secundaria con INAEBA y gracias a su esfuerzo está por titularse de la Licenciatura de Derecho por la Universidad de Guanajuato.<br><br>"+
        "Guanajuato, Guanajuato, a 09 de abril de 2021.- La historia de Georgina inicia cuando era muy pequeña. Al ser parte de una familia numerosa, con la creencia de que las mujeres no estudian y solo se dedicaban al hogar, solo pudo estudiar la primaria.<br><br>"+
        "Se casó joven y a los 16 años tuvo a su primera bebé, una niña, posteriormente llegaron dos hijos más; su matrimonio no funcionó, decidió emprender e iniciar su propio camino para convertirse en la única fuente de ingreso para su familia, convencida de que la educación es parte fundamental del desarrollo de cualquier persona.<br><br>"+
        "“Yo empecé a trabajar para mis hijos y siempre con la ilusión de estudiar; entonces, cuando me divorcio comienzo a estudiar en escuelas abiertas, la secundaria con INAEBA, después la preparatoria y me gustó el estudio. Yo dije, tengo que estudiar, algo que me llamaba la atención es que no puedes decirles a tus hijos estudia, échale ganas, sí se puede, si tú no eres el ejemplo, no eres el motor que los inspire”.<br><br>"+
        "Ella se reunió con un grupo de personas interesadas en estudiar la secundaria y con la atención educativa que brinda el Instituto de Alfabetización y Educación Básica para Adultos (INAEBA) logró obtener su certificado. Posteriormente, cursó el siguiente nivel en una preparatoria abierta y también la terminó.<br><br>"+
        "“Recuerdo que cuando hice la secundaria, mi hija la mediana se tenía que ir conmigo, en lo que yo entraba a clases, ella se quedaba en los jueguitos cuidando a su hermanito; era difícil, pero nunca me han dejado sola, siempre he tenido su apoyo”.<br><br>"+
        "Para poder motivar a sus hijos y convertirse en su ejemplo, Ginna, como le dicen sus amigos y familiares, hizo todo el esfuerzo posible para darle continuidad a su formación académica. Actualmente cursa el noveno semestre de la carrera de Derecho en la Universidad de Guanajuato y este año se titulará como Abogada.<br><br>"+
        "Este ejemplo sirve de impulso para sus hijos, pues la mayor está por concluir la licenciatura en Educación, la siguiente cursa el cuarto semestre de arquitectura y el pequeño recientemente ingresó a la Preparatoria Oficial en la capital del estado.<br><br>"+
        "“Estoy contenta, orgullosa de mí misma, de lo poco o mucho que he logrado con mis hijos; es difícil porque no es lo mismo un joven que sus papás le dan la mensualidad para estudiar, además son los hijos, el papel de papá y mamá, de estudiante, pero todo es posible”.<br><br>"+
        "Ahora, Ginna trabaja en un despacho de abogados, lo cual le sirve para poner en práctica los conocimientos adquiridos en la universidad. También, estudió computación, el idioma italiano y está por ingresar a estudiar el idioma inglés, a largo plazo quiere cursar la maestría en Ciencias Jurídico Penales, que también imparte la UG.<br><br>"+
        "“El mensaje que les transmites a tus hijos es de que la educación y la preparación para enfrentar la vida es primordial, tanto para trabajo como para ti mismo, porque una persona preparada siempre tiene trabajo, tiene más oportunidades de desarrollo”.<br><br>"+
        "“Yo quisiera que mi historia hiciera mella o inspirara, sobre todo, en ese pequeño grupo de mujeres que nos quedamos en un momento de la vida divorciadas, dejadas, abandonadas; (…) normalmente cuando una mujer se queda sola con sus hijos, te ves indefensa, frustrada, que fallaste como esposa y te tienes que enfrentar a la vida con hijos, sin estudios y dices qué voy a hacer, se te cierran muchas cosas, pero somos muy capaces”.<br><br>"+
        "Ginna busca que su historia de superación y éxito inspire e impulse a todas aquellas mujeres y hombres que pasan por alguna separación o divorcio, donde a veces pueden sentir que el mundo se les cierra y creen que fracasaron en el intento por formar una familia.<br><br>"+
        "<center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    if(option == 6){
        document.getElementById('card-6').style.display="block";
        var noticia="<h3>ALCANZA EL EMPLEO DE SUS SUEÑOS CON INAEBA.</h3>María Concepción obtuvo su certificado de secundaria y con el pudo integrarse al Sistema Integrado de Transporte de León.<br><br>"+
        "León, Guanajuato, a 07 de marzo de 2021.- Para alcanzar el empleo de sus sueños María Concepción decidió combinar su rol de mamá de cuatro hijos y superarse al retomar sus estudios, para lograrlo e inspirar a más mujeres guanajuatenses a alcanzar sus metas.<br><br>"+
        "En entrevista a bordo de la unidad articulada número 072, a diario agradece el poder disfrutar de su trabajo, el cual además le brinda la oportunidad de llevar el sustento a su hogar; en sus descansos, disfruta el tiempo en compañía de sus hijos.<br><br>"+
        "Dijo que, abandonó la escuela por dificultades económicas en su familia al cursar el tercer grado de primaria; sin embargo, para poder alcanzar su sueño la educación era primordial y el INAEBA le ayudó.<br><br>"+
        "“Yo sé que el estudio es muy importante para superarte y salir adelante; te tienes que preparar, debes de tener estudios y yo quería seguir adelante, superarme y decidí, aún con mis niños llevarlos a los cursos, a las clases y hacer la secundaria”, dijo.<br><br>"+
        "Anteriormente, María se desempeñaba como trabajadora doméstica, pero, su sueño de convertirse en operadora del transporte público en León, la hizo esforzarse día a día; en varias ocasiones, el no contar con el certificado de secundaria le cerró las puertas, por lo que no lo pensó más y decidió retomar su formación académica.<br><br>"+
        "Gracias a Francis, una promotora del INAEBA, conoció los servicios educativos del Instituto de Alfabetización y Educación Básica para Adultos y con esta información se enteró de que podía retomar sus estudios; fue así como logró obtener su certificado de primaria y después terminar la secundaria.<br><br>"+
        "Aunque su proceso de preparación no fue fácil, en ningún momento descuidó su rol de mamá, ella dijo que, con esfuerzo y dedicación logró terminar la secundaria.<br><br>"+
        "“Desde hace 5 años y con mis 42 años, soy operadora en el Sistema Integrado de Transporte (SIT), en el municipio de León; este empleo me ha regalado muchas satisfacciones y la oportunidad para terminar mis estudios de preparatoria”.<br><br>"+
        "Ella está convencida que la educación es la herramienta clave para poder acceder a más y mejores oportunidades laborales, económicas y personales que favorecen la calidad de vida de las personas y sus familias, por ello con su historia de superación, busca inspirar a sus hijos y que no abandonen sus estudios para que forjen un mejor futuro.<br><br>"+
        "“Es muy importante, sin la educación y preparación prácticamente nos quedamos estancados en algo; si nos preparamos y estudiamos se nos abren más puertas, a más posibilidades de empleos, de desarrollo profesional, de hacer muchas más cosas”.<br><br>"+
        "Actualmente está agradecida por tener un trabajo honesto, digno y pesado, pero que al final del día la llena de satisfacciones, al ser una ocupación que buscó, porque le apasiona y enamora al desempeñarlo.<br><br>"+
        "“Todo lo que nos propongamos en la vida, lo podemos lograr, por ejemplo, yo ahora estoy aquí porque fui perseverante; yo puedo darme mi tiempo para prepararme, con sacrificios tal vez, pero que esto servirá para que no se queden estancadas, que no se queden ahí, por eso hagan lo posible por estudiar, prepararse, porque Aquí Sí se puede salir adelante”.<br><br>"+
        "En el marco del Día Internacional de la Mujer, el INAEBA mantiene su compromiso con la educación de las mujeres, al otorgar igualdad de oportunidades al retomar o iniciar sus estudios para aprender a leer, escribir o acreditar primaria y secundaria; además, reconocer su valioso papel en la sociedad guanajuatense.<br><br>"+
        "El Dato<br><br>"+
        "Un promotor, es aquella figura dentro del instituto que se encarga de promover los servicios educativos que ofrece el Gobierno del Estado para beneficiar a aquellas personas que quieren aprender a leer, escribir o acreditar su educación básica.<br><br>"+
        "<center><button class='btn btn-warning' onclick='regresar()'>Regresar</button></center>";
    }
    document.getElementById('textoCasosExito').innerHTML=noticia;
    document.getElementById('casosExito1').style.visibility="hidden";
    document.getElementById('casosExito2').style.visibility="hidden";
}