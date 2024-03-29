export interface Circulero {
  id: number,
  name: string,
  apodo: string,
  image: string,
  roles: Array<Rol>
}
export type Rol = "Audiovisualista"
  | "DP"
  | "Fotógrafo"
  | "Redactor"
  | "Cuentas"
  | "Desarrollador IT"
  | "Diseñador/a IT"
  | "Planner IT"
  | "Planner"
  | "Planner de Pauta"
  | "Administrativo/a"
  | "Director/a de Arte"
  | "Productor/a Audiovisual"
  | "Contenidista de Marketing"
  | "Contenidista"
  | "Data Analyst en Marketing"
  | "de Recursos Humanos"
  | "Socio"
  | "Diseñador/a"
  | "Director/a de Creatividad"
  | "Director general Creativo"
  | "Ejecutivo Comercial"



export const circuleros: Circulero[] = [
  {
    id: 1,
    name: "Aguirre Jeremias",
    apodo: "Jere",
    image: "img-jere",
    roles: [
      "Audiovisualista"
    ]
  },
  {
    id: 2,
    name: "Alarcon Mariana",
    apodo: "Maki",
    image: "img-maki",
    roles: [
      "DP",
    ]
  },
  {
    id: 3,
    name: "Avalos Ariel",
    apodo: "Ari",
    image: "img-ari",
    roles: [
      "Fotógrafo"
    ]
  },
  {
    id: 4,
    name: "BARBERO JUAN PABLO",
    apodo: "Juanpa",
    image: "img-juanpa",
    roles: [
      "Redactor", "Contenidista"
    ]
  },
  {
    id: 5,
    name: "Castillo Gonzalo Emanuel",
    apodo: "Gonza",
    image: "img-gonza",
    roles: [
      "Desarrollador IT", "Diseñador/a IT"
    ]
  },
  {
    id: 6,
    name: "Diaz Renzo",
    apodo: "Ren",
    image: "img-renzo",
    roles: [
      "Diseñador/a"
    ]
  },
  {
    id: 7,
    name: "Garcia Ivette Gaia",
    apodo: "Ivette",
    image: "img-ive",
    roles: [
      "Cuentas", "Diseñador/a"
    ]
  },
  {
    id: 8,
    name: "Garcia Malbran Natalia",
    apodo: "Nati G",
    image: "img-nati-g",
    roles: [
      "de Recursos Humanos"
    ]
  },
  {
    id: 9,
    name: "Godoy Brenda",
    apodo: "Bren",
    image: "img-godoy-brenda",
    roles: [
      "Cuentas"
    ]
  },
  {
    id: 10,
    name: "Guzman Viviana",
    apodo: "Vivis",
    image: "img-vivs",
    roles: [
      "Director/a de Creatividad"
    ]
  },
  {
    id: 11,
    name: "Hefling Facundo",
    apodo: "Facu",
    image: "img-facu",
    roles: [
      "Ejecutivo Comercial"
      /* sacar de cuntas */
    ]
  },
  {
    id: 12,
    name: "Jones Andreina",
    apodo: "Andy",
    image: "img-andy",
    roles: [
      "DP"
    ]
  },
  {
    id: 13,
    name: "Kek Danisa",
    apodo: "Danis",
    image: "img-danisa",
    roles: [
      "Diseñador/a IT"
    ]
  },
  {
    id: 14,
    name: "Lievano Fernando",
    apodo: "Fernandito",
    image: "img-fer-lievano",
    roles: [
      "Desarrollador IT"
    ]
  },
  {
    id: 15,
    name: "Marin Francisco",
    apodo: "Fachy",
    image: "img-francisco",
    roles: [
      "Diseñador/a"
    ]
  },
  {
    id: 16,
    name: "Martinez Enzo",
    apodo: "Enzo",
    image: "img-enzo",
    roles: [
      "Planner de Pauta"
    ]
  },
  {
    id: 17,
    name: "Matteucci Jordana",
    apodo: "Jordi",
    image: "img-jordy",
    roles: [
      "DP"
    ]
  },
  {
    id: 18,
    name: "Mihof Lisandro",
    apodo: "Jejo",
    image: "img-lisandro",
    roles: [
      "Director/a de Arte"
    ]
  },
  {
    id: 19,
    name: "Milan Roy",
    apodo: "Roy",
    image: "img-roy",
    roles: [
      "Diseñador/a", "Director/a de Arte"
    ]
  },
  {
    id: 20,
    name: "Nuñez Pablo",
    apodo: "Pablo",
    image: "img-pablo",
    roles: [
      "Planner IT", "Desarrollador IT"
    ]
  },
  {
    id: 21,
    name: "Olivello Aldana",
    apodo: "Aldo",
    image: "img-aldi",
    roles: [
      "Productor/a Audiovisual"
    ]
  },
  {
    id: 22,
    name: "Pedroso Nahuel",
    apodo: "Nawe",
    image: "img-nahuel",
    roles: [
      "Desarrollador IT"
    ]
  },
  {
    id: 23,
    name: "Rangel Valeska",
    apodo: "Valesk",
    image: "img-valeska",
    roles: [
      "Contenidista", "Planner"
    ]
  },
  {
    id: 24,
    name: "Talavan Juanpi",
    apodo: "Tala",
    image: "img-tala",
    roles: [
      "Director general Creativo", "Redactor"
    ]
  },
  {
    id: 25,
    name: "Toloza Augusto",
    apodo: "August",
    image: "img-augusto",
    roles: [
      "Diseñador/a"
    ]
  },
  /*   {
      id: 26,
      name: "Vivoli Lucia",
      apodo: "Luli",
      image: "img-luli",
      roles: [
        "Administrativo/a"
      ]
    }, */
  {
    id: 27,
    name: "Sarrua Gastón",
    apodo: "Gastón",
    image: "img-gaston",
    roles: [
      "DP",
      "Planner"
    ]
  },
  {
    id: 28,
    name: "Brea Alejandra",
    apodo: "Ale",
    image: "img-ale-brea",
    roles: [
      "Data Analyst en Marketing"
    ]
  },
  {
    id: 29,
    name: "Mumare Natalia",
    apodo: "Nati",
    image: "img-mumare",
    roles: [
      "Administrativo/a"
    ]
  },
  {
    id: 30,
    name: "Sleiman Parra Valentina",
    apodo: "Valen Parra",
    image: "img-parra-valen",
    roles: [
      "Contenidista de Marketing"
    ]
  },
  {
    id: 31,
    name: "Mendez Matias",
    apodo: "Mati",
    image: "img-mati",
    roles: [
      "Cuentas"
    ]
  },
  {
    id: 32,
    name: "Fernandez Soledad",
    apodo: "Sole",
    image: "img-sol",
    roles: [
      "Director/a de Arte"
    ]
  },
  {
    id: 33,
    name: "Alunni Juan Ignacio",
    apodo: "Alunni",
    image: "img-alunni",
    roles: [
      "Audiovisualista"
    ]
  },
  {
    id: 34,
    name: "Florentin Lara",
    apodo: "Lara",
    image: "img-lara",
    roles: [
      "Audiovisualista"
    ]
  },
  {
    id: 35,
    name: "Romero Maria Eugenia",
    apodo: "Maru",
    image: "img-maru",
    roles: [
      "Audiovisualista"
    ]
  },

  {
    id: 36,
    name: "Zacariaz Victoria",
    apodo: "Vick",
    image: "img-vico",
    roles: [
      "Diseñador/a"
    ]
  },
  {
    id: 37,
    name: "Sponton Valentina",
    apodo: "Valen Sponton",
    image: "img-valen-sponton",
    roles: [
      "Diseñador/a"
    ]
  },
  {
    id: 38,
    name: "Robledo Micaela",
    apodo: "Mica",
    image: "img-mica-robledo",
    roles: [
      "Diseñador/a", "Contenidista"
    ]
  },
  {
    id: 39,
    name: "Tello Aldana",
    apodo: "Aldana T",
    image: "img-aldi-tello",
    roles: [
      "Audiovisualista"
    ]
  },
  {
    id: 40,
    name: "Magariños Andres Manuel",
    apodo: "Andrés",
    image: "img-andres",
    roles: [
      "Redactor", "Director/a de Arte", "Contenidista"
    ]
  },
  {
    id: 41,
    name: "Durand Santiago",
    apodo: "Santi",
    image: "img-santi",
    roles: [
      "Cuentas", "Audiovisualista"
    ]
  },
  {
    id: 42,
    name: "Vicente Agustina",
    apodo: "Agus",
    image: "img-agustina",
    roles: [
      "Cuentas"
    ]
  },
  {
    id: 43,
    name: "Iabichella Robert Agustin",
    apodo: "Agustin",
    image: "img-agustin",
    roles: [
      "Audiovisualista"
    ]
  },
  {
    id: 44,
    name: "Kike",
    apodo: "Kike",
    image: "img-kike",
    roles: [
      "Socio", "Diseñador/a IT", "Diseñador/a"
    ]
  }
]
export interface Question {
  id: number;
  pregunta: string;
  roles: Array<RolPregunta>
}

export interface RolPregunta {
  buscado: string;
  correcto: Array<Rol>;
  descripcion: string
}

export const preguntas: Array<Question> = [
  {
    id: 0,
    pregunta: "Seleccionemos a la dupla inicial",
    roles:
      [
        {
          buscado: "DP",
          correcto: ["DP"],
          descripcion: "Un/a <span class='font-bold'>DP</span> se encarga de dirigir la estrategia general del proyecto. Es responsable de armar el equipo, crear la propuesta y darle seguimiento a los avances."
        },
        {
          buscado: "Cuentas",
          correcto: ["Cuentas"],
          descripcion: "Un/a <span class='font-bold'>CUENTAS</span> es su mano derecha. Acompaña en la organización interna y en la comunicación con el cliente para solicitar información."
        },
      ]

  },
  {
    id: 1,
    pregunta: "Sumemos a Creatividad",
    roles: [
      {
        buscado: "Dir. de Arte",
        correcto: ["Director/a de Arte", "Director/a de Creatividad"],
        descripcion: "Necesitamos un <span class='font-bold'>DIR. DE ARTE</span> que se encargará de la estrategia visual."
      },
      {
        buscado: "Redactor",
        correcto: ["Redactor", "Director general Creativo"],
        descripcion: "Y necesitaremos un <span class='font-bold'>REDACTOR</span> que se encargará de desarrollar la estrategia discursiva de las campañas."
      }
    ]
  },
  {
    /* preguntar por gonza */
    id: 2,
    pregunta: "Sigamos armando el equipo de Branding",
    roles: [
      {
        buscado: "Diseñador",
        correcto: ["Diseñador/a"],
        descripcion: "Necesitamos un/a <span class='font-bold'>DISEÑADOR/A</span> que se encargará de plasmar visualemente todas las estrategias, discurso y objetivos planteados."
      },
      {
        buscado: "Audiovisualista",
        correcto: ["Audiovisualista"],
        descripcion: "Y nuestro/a <span class='font-bold'>AUDIOVISUALISTA</span> se encargará de dirigir el proyecto desde el enfoque audiovisual. Esta persona puede ser animadora, editora o productora."
      }
    ]
  },
  {
    id: 3,
    pregunta: "Armemos el equipo de Marketing",
    roles: [
      {
        buscado: "Contenidista",
        correcto: ["Contenidista", "Contenidista de Marketing"],
        descripcion: "El/la <span class='font-bold'>CONTENIDISTA DE MARKETING</span> nos ayudará a realizar (ya sea diseñando o redactando) las piezas y publicaciones de redes."
      },
      {
        buscado: "Estratega",
        correcto: ["Planner", "Data Analyst en Marketing", "Planner de Pauta"],
        descripcion: "Y nuestro/a <span class='font-bold'>ESTRATEGA DE MARKETING</span> ayudará a gestionar el proyecto ya sea desde la supervisión al equipo, el planning o la administración de pauta"
      }
    ]
  },
  {
    id: 4,
    pregunta: "Solo nos falta IT",
    roles: [
      {
        buscado: "Diseñador/a Web",
        correcto: ["Diseñador/a IT"],
        descripcion: "El/a <span class='font-bold'>DISEÑADOR/A WEB</span> nos ayudará darle forma, función e identidad al contenido que se plasmará en el sitio web."
      },
      {
        buscado: "Programador",
        correcto: ["Desarrollador IT"],
        descripcion: "El <span class='font-bold'>PROGRAMADOR</span> es quien se encargará de lograr que los códigos muestren lo planteado por la Diseñadora web."
      }
    ]
  }
]

export const frases = [
  '“Creíamos que iba a ser difícil, pero con este equipazo se volvió todo muy fácil”',
  '“El único verdadero conflicto fue cuando nos quedamos sin yerba”',
  '“Izi pizi, facilito el trabajo”',
  '“Salió tan lindo todo que queremos armar un caso sobre este trabajo”',
  '“Empezamos, activamos, le metimos, pusimos en común y cerramos. Un éxito”',
  '“Nos dijeron que esto iba a ser un desafío, al final fue un lujo”',
  '“¡Esto es un trabajo de primera!”',
  '“¡Una obra maestra!”',
  '“Quedamos de cara con el resultado.”',
  '“Un trabajo impecable.”',
  '“No hay caracteres para describirlo.”',
  '“Todo orgullo esta gente.”',
  '“No quedó ni un cabo suelto.”',
  '“Hicimos historia con esta campaña, ¡bien ahí!”',
  '“Los días pasaron volando, estábamos muy inspirados.”',
  '“¡Wep weeepp!”',
  '“¡Hoy se saleee!”',
  "El trabajo está tan bien hecho que parece que lo hizo un robot.",
  '“DALE CAMPEEÓOONN”',
  '“Es un trabajo tan bueno que hasta el cliente lo aprobó.”',
  '“Gracias a este trabajo bajé 5 tallas de pantalón”',
  '“Solo puedo aplaudir por este equipazo”',
  '“Los amo a todos, milbesos milbesitos”',
  '“Espero volver a encontrar trabajos tan inspiradores”',
  '“Perdón, me emocioné, ¿cuál fue la pregunta?”'

]
