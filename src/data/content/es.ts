import type { LocalizedPortfolioContent } from "@/types/types";

export const esContent: LocalizedPortfolioContent = {
  	navigation: {
		about: "Sobre mí",
		skills: "Habilidades",
		projects: "Proyectos",
		experience: "Experiencia",
		education: "Educación",
		contact: "Contacto",
  	},

	web: {
		navigation: {
			about: "Sobre mí",
			skills: "Habilidades",
			projects: "Proyectos",
			experience: "Experiencia",
			contact: "Contacto",
		},

		navbarSwitches: {
			area: {
				leftLabel: "Web",
				rightLabel: "Juegos",
				ariaLabel: "Cambiar área de desarrollo",
			},
			theme: {
				leftLabel: "Claro",
				rightLabel: "Oscuro",
				ariaLabel: "Cambiar tema de color",
			},
			language: {
				leftLabel: "En",
				rightLabel: "Es",
				ariaLabel: "Cambiar idioma",
			},
		},

		nameSection: {
			role: "Desarrolladora Full-Stack",
            statement: "Soy una desarrolladora full-stack a quien le apasiona crear y ejecutar diseños de la forma más fiel posible a la visión original. Me centro en los detalles visuales, en una implementación eficiente y en crear experiencias digitales pulidas que funcionen tan bien como se ven.",
            contactButton: "Contacto",
            viewWorkButton: "Mis proyectos",
        },

		sections: [
			{header: "Sobre mí", title: "Un poco sobre mí",},
			{header: "Habilidades", title: "Herramientas Técnicas",},
			{header: "Proyectos", title: "Proyectos Seleccionados",},
			{header: "Experiencia", title: "Experiencia Laboral",},
			{header: "Educación", title: "Formación Académica",},
			{header: "Contacto", title: "Pongámonos en Contacto",},
		],

		about: {
			index: "Sobre mí",
			title: "Un poco sobre mí",
			introduction:
				"Soy graduada de Ingeniería en Ciencias de la Computación y desarrolladora full-stack, con un enfoque especial en el desarrollo front-end. Disfruto transformar conceptos visuales en interfaces pulidas y responsivas que se mantengan fieles al diseño original.",
			approach:
				"Mi experiencia en desarrollo y diseño digital me permite abordar los proyectos tanto desde una perspectiva técnica como creativa. Me preocupo por una implementación limpia, el rendimiento, la usabilidad, la escalabilidad y los pequeños detalles que hacen que un producto resulte completo.",
			basedIn: "Localizada en",
			availability: "Disponible para",
			oportunities: "Abierta a oportunidades",
			languages: "Idiomas",
		},

		contactSection: {
			text: "Disponible para oportunidades de tiempo completo, contratos freelance y trabajos de consultoría.",
			phone: "Phone",
			name: "Name",
			message: "Message",
			button: "Enviar Mensaje",
		},

		footerSection: {
			madeBy: "Hecho con",
			button: "También hago juegos",
		},

		skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Diseño", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Herramientas & Flujo de Trabajo", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],

		projects: [
            {number: 2, title: "Buscaminas Remake", description:"Remake del juego Buscaminas de Windows XP", image: "/Img/Minesweeper.png", tags: ["Angular", "TypeScript", "CSS3"], year: 2023},
            {number: 1, title: "Replicando Duolingo", description:"Replica de una página web", image: "/Img/Duolingo.png", tags: ["CSS3", "HTML5", "Photoshop", "Babel"], year: 2023},
            {number: 3, title: "Hamilmemory", description:"Juego de memoria con temática de Hamilton", image: "/Img/Hamilmemory.png", tags: ["HTML5", "JavaScript", "CSS3"], year: 2023}
        ],
		
		workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artista - Technical Artist - Modeladora 3D", startDate: "2026", description: ["Responsable de la creación de recursos 2D y elementos gráficos", "Implementación de menús y de la interfaz de usuario", "Creación e implementación de shaders y elementos gráficos", "Modelado de elementos 3D"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructora", startDate: "2026", description: ["Instructora del módulo de programación del Diplomado 'Mujeres Creando Videojuegos'"]},
            {company: "Cerial Killer Games - Student Project", position: "Programadora", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Programadora de IA de enemigos"]},
            {company: "Estudio Faser", position: "Desarrolladora Full-stack", startDate: "2025", description: ["Desarrollo full-stack", "Desarrollo de API", "Manejo de bases de datos"]},
            {company: "Spring Bus", position: "Desarrolladora Front-end", startDate: "2024", description: ["Desarrollo Front-end"]},
            {company: "Universidad del Valle de Guatemala", position: "Maestra Auxiliar", startDate: "2024", description: ["Organización de Computadoras y Assembler", "Comunicación Efectiva", "Investigación y Pensamiento Científico", "Sistemas y Tecnologías Web", "Inteligencia Artificial", "Sistemas Operativos"]},
            {company: "Laudato Si' Movement", position: "Desarrolladora de Bases de Datos", startDate: "2023", description: ["Planificación de bases de datos", "Desarrollo de bases de datos"]},
        ],

		academicExperience: [
            {institution: "Vancouver Film School", degree: "Programación para Videojuegos, Aplicaciones Móviles y Aplicaciones Web", startDate: "Sep 2025", endDate: "Ago 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Licenciatura en Ingeniería en Ciencias de la Computación y Tecnologías de la Información", startDate: "Ene 2021", endDate: "Dic 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "Bachillerato en Ciencias y Letras con Orientación en Computación", startDate: "2005", endDate: "2020"},
        ],
	},

	games: {
		navigation: {
			about: "Sobre mí",
			skills: "Habilidades",
			projects: "Proyectos",
			experience: "Experiencia",
			contact: "Contacto",
		},

		navbarSwitches: {
			area: {
				leftLabel: "Web",
				rightLabel: "Juegos",
				ariaLabel: "Cambiar área de desarrollo",
			},
			theme: {
				leftLabel: "Claro",
				rightLabel: "Oscuro",
				ariaLabel: "Cambiar tema de color",
			},
			language: {
				leftLabel: "En",
				rightLabel: "Es",
				ariaLabel: "Cambiar idioma",
			},
		},
		
		nameSection: {
            role: "Desarrolladora de Videojuegos",
            statement: "Soy una desarrolladora full-stack a quien le apasiona crear y ejecutar diseños de la forma más fiel posible a la visión original. Me centro en los detalles visuales, en una implementación eficiente y en crear experiencias digitales pulidas que funcionen tan bien como se ven.",
            contactButton: "Contacto",
            viewWorkButton: "Mis proyectos",
        },

		sections: [
			{header: "Sobre mí", title: "Un poco sobre mí",},
			{header: "Habilidades", title: "Herramientas Técnicas",},
			{header: "Proyectos", title: "Proyectos Seleccionados",},
			{header: "Experiencia", title: "Experiencia Laboral",},
			{header: "Educación", title: "Formación Académica",},
			{header: "Contacto", title: "Pongámonos en Contacto",},
		],

		about: {
			index: "Sobre mí",
			title: "Un poco sobre mí",
			introduction:
				"Soy graduada de Ingeniería en Ciencias de la Computación, desarrolladora de videojuegos y technical artist, con experiencia creando proyectos interactivos en Unity.",
			approach:
				"Disfruto trabajar en la intersección entre el arte y la programación, desarrollando interfaces, shaders, efectos visuales, sistemas de gameplay y recursos optimizados que contribuyan a experiencias de juego coherentes.",
			basedIn: "Localizada en",
			availability: "Disponible para",
			oportunities: "Abierta a oportunidades",
			languages: "Idiomas",
		},

		contactSection: {
			text: "Disponible para oportunidades de tiempo completo, contratos freelance y trabajos de consultoría.",
			phone: "Phone",
			name: "Name",
			message: "Message",
			button: "Enviar Mensaje",
		},

		footerSection: {
			madeBy: "Hecho con",
			button: "También hago desarrollo web",
		},

		skills: [
            {number: 1, title: "Desarrollo de juegos", skills: ["Unity", "C3", "Python"]},
            {number: 2, title: "Arte 3D", skills: ["Blender", "Maya"]},
            {number: 3, title: "Arte 2D", skills: ["Adobe Photoshop", "Canva"]},
			{number: 4, title: "Herramientas & Flujo de Trabajo", skills: ["GitHub", "Microsoft 365", "Google Workspace"]}
        ],

		projects: [
            {number: 1, title: "Papercut", description:"Juego 3D de tipo 'Bullet-Hell'", image: "/Img/papercut.png", tags: ["Unity", "C#", "Photoshop", "GitHub", "Blender"], year: 2026},
            {number: 2, title: "The Last Course", description:"Juego de combate y cocina Top-Down", image: "/Img/TheLastCourse.png", tags: ["Unity", "C#", "GitHub"], year: 2026},
            {number: 3, title: "Card-Jitsu Remake", description:"Remake del juego de Club Penguin", image: "/Img/Cardjitsu.png", tags: ["Python", "Photoshop", "Kivy"], year: 2023}
        ],

		workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artista - Technical Artist - Modeladora 3D", startDate: "2026", description: ["Responsable de la creación de recursos 2D y elementos gráficos", "Implementación de menús y de la interfaz de usuario", "Creación e implementación de shaders y elementos gráficos", "Modelado de elementos 3D"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructora", startDate: "2026", description: ["Instructora del módulo de programación del Diplomado 'Mujeres Creando Videojuegos'"]},
            {company: "Cerial Killer Games - Student Project", position: "Programadora", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Programadora de IA de enemigos"]},
            {company: "Estudio Faser", position: "Desarrolladora Full-stack", startDate: "2025", description: ["Desarrollo full-stack", "Desarrollo de API", "Manejo de bases de datos"]},
            {company: "Spring Bus", position: "Desarrolladora Front-end", startDate: "2024", description: ["Desarrollo Front-end"]},
            {company: "Universidad del Valle de Guatemala", position: "Maestra Auxiliar", startDate: "2024", description: ["Organización de Computadoras y Assembler", "Comunicación Efectiva", "Investigación y Pensamiento Científico", "Sistemas y Tecnologías Web", "Inteligencia Artificial", "Sistemas Operativos"]},
            {company: "Laudato Si' Movement", position: "Desarrolladora de Bases de Datos", startDate: "2023", description: ["Planificación de bases de datos", "Desarrollo de bases de datos"]},
        ],

		academicExperience: [
            {institution: "Vancouver Film School", degree: "Programación para Videojuegos, Aplicaciones Móviles y Aplicaciones Web", startDate: "Sep 2025", endDate: "Ago 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Licenciatura en Ingeniería en Ciencias de la Computación y Tecnologías de la Información", startDate: "Ene 2021", endDate: "Dic 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "Bachillerato en Ciencias y Letras con Orientación en Computación", startDate: "2005", endDate: "2020"},
        ],
	},
};