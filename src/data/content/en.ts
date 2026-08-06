import type { LocalizedPortfolioContent } from "@/types/types";

export const enContent: LocalizedPortfolioContent = {
    navigation: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
    },

    web: {
        navigation: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        navbarSwitches: {
            area: {
                leftLabel: "Web",
                rightLabel: "Games",
                ariaLabel: "Switch development area",
            },
            theme: {
                leftLabel: "Light",
                rightLabel: "Dark",
                ariaLabel: "Switch color theme",
            },
            language: {
                leftLabel: "En",
                rightLabel: "Es",
                ariaLabel: "Switch language",
            },
        },

        nameSection: {
            role: "Full-Stack Developer",
            statement: "I'm a full-stack developer passionate about creating and bringing designs to life as faithfully as possible. I focus on visual detail, efficient implementation, and creating polished digital experiences that work as well as they look.",
            contactButton: "Contact",
            viewWorkButton: "View Work",
        },

        sections: [
			{header: "About", title: "A bit about me",},
			{header: "Skills", title: "Technical Toolkit",},
			{header: "Projects", title: "Selected Work",},
			{header: "Experience", title: "Work History",},
			{header: "Education", title: "Academic Background",},
			{header: "Contact", title: "Get in touch",},
		],


        about: {
            index: "About",
            title: "A bit about me",
            introduction:
                "I'm a Computer Science Engineering graduate and full-stack developer with a strong focus on front-end development. I enjoy translating visual concepts into polished, responsive interfaces that stay faithful to the original design.",
            approach:
                "My background in development and digital design allows me to approach projects from both a technical and creative perspective. I care about clean implementation, performance, usability, scalability, and the small details that make a product feel complete.",
            basedIn: "Based in",
            availability: "Available for",
            oportunities: "Open to opportunities",
            languages: "Languages",
        },

        contactSection: {
			text: "Open to full-time opportunities, freelance contracts, and consulting work.",
			phone: "Phone",
			name: "Name",
			message: "Message",
            button: "Send Message",
		},

        footerSection: {
			madeBy: "Made with",
			button: "I also do games",
		},

        skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Design", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Tools & Workflow", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],
        projects: [
            {number: 2, title: "Minesweeper Remake", description:"Windows XP's Minesweeper remake", image: "/Img/Minesweeper.png", tags: ["Angular", "TypeScript", "CSS3"], year: 2023},
            {number: 1, title: "Cloning Duolingo", description:"Cloning a web page", image: "/Img/Duolingo.png", tags: ["CSS3", "HTML5", "Photoshop", "Babel"], year: 2023},
            {number: 3, title: "Hamilmemory", description:"Hamilton-themed memory game", image: "/Img/Hamilmemory.png", tags: ["HTML5", "JavaScript", "CSS3"], year: 2023}
        ],
        workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artist - Technical Artist - 3D Prop Modeler", startDate: "2026", description: ["Responsible for 2D asset and graphic element creation", "Menu and UI implementation", "Creation and implementation of shaders and graphic elements", "3D prop modeling"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructor", startDate: "2026", description: ["Instructor for the programming module of the “Women Creating Video Games” Certificate Program"]},
            {company: "Cerial Killer Games - Student Project", position: "Game Developer", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Enemy AI Programmer"]},
            {company: "Estudio Faser", position: "Full-stack developer", startDate: "2025", description: ["Full-stack development", "API Development", "Database management"]},
            {company: "Spring Bus", position: "Front-end Developer", startDate: "2024", description: ["Front-end development"]},
            {company: "Universidad del Valle de Guatemala", position: "Teaching Assistant", startDate: "2024", description: ["Computer Organization and Assembler", "Effective Communication", "Research and Scientific Thinking", "Web Systems and Technologies", "Artificial Intelligence", "Operative Systems"]},
            {company: "Laudato Si' Movement", position: "Database Developer", startDate: "2023", description: ["Database planning", "Database development"]},
        ],
        academicExperience: [
            {institution: "Vancouver Film School", degree: "Programming for Games, Mobile, and Web Development", startDate: "Sep 2025", endDate: "Aug 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Bachelor's Degree in Computer Science", startDate: "Jan 2021", endDate: "Dec 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "High School Diploma in Science and Humanities with a Focus on Computer Science", startDate: "2005", endDate: "2020"},
        ],
    }, 

    games: {
        navigation: {
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        navbarSwitches: {
            area: {
                leftLabel: "Web",
                rightLabel: "Games",
                ariaLabel: "Switch development area",
            },
            theme: {
                leftLabel: "Light",
                rightLabel: "Dark",
                ariaLabel: "Switch color theme",
            },
            language: {
                leftLabel: "En",
                rightLabel: "Es",
                ariaLabel: "Switch language",
            },
        },
        
        nameSection: {
            role: "Game Developer",
            statement: "I'm a full-stack developer passionate about creating and bringing designs to life as faithfully as possible. I focus on visual detail, efficient implementation, and creating polished digital experiences that work as well as they look.",
            contactButton: "Contact",
            viewWorkButton: "View Work",
        },

        sections: [
			{header: "About", title: "A bit about me",},
			{header: "Skills", title: "Technical Toolkit",},
			{header: "Projects", title: "Selected Work",},
			{header: "Experience", title: "Work History",},
			{header: "Education", title: "Academic Background",},
			{header: "Contact", title: "Get in touch",},
		],

        about: {
            index: "About",
            title: "A bit about me",
            introduction:
                "I'm a Computer Science Engineering graduate, game developer, and technical artist with experience creating interactive projects in Unity.",
            approach:
                "I enjoy working at the intersection of art and programming, developing interfaces, shaders, visual effects, gameplay systems, and optimized assets that contribute to cohesive game experiences.",
            basedIn: "Based in",
            availability: "Available for",
            oportunities: "Open to opportunities",
            languages: "Languages",
        },

        contactSection: {
			text: "Open to full-time opportunities, freelance contracts, and consulting work.",
			phone: "Phone",
			name: "Name",
			message: "Message",
            button: "Send Message",
		},

        footerSection: {
			madeBy: "Made with",
			button: "I also do web development",
		},

        skills: [
            {number: 1, title: "Front-end", skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]},
            {number: 2, title: "Back-end", skills: ["Node.js", "Express", "Python", "C#"]},
            {number: 3, title: "Design", skills: ["Adobe Photoshop", "Canva", "Figma"]},
            {number: 4, title: "Tools & Workflow", skills: ["GitHub", "Postman", "Microsoft 365", "Google Workspace"]}
        ],
        projects: [
            {number: 1, title: "Papercut", description:"3D Bullet Hell Game", image: "/Img/papercut.png", tags: ["Unity", "C#", "Photoshop", "GitHub", "Blender"], year: 2026},
            {number: 2, title: "The Last Course", description:"Top-Down Combat-Cooking Game", image: "/Img/TheLastCourse.png", tags: ["Unity", "C#", "GitHub"], year: 2026},
            {number: 3, title: "Card-Jitsu Remake", description:"Club Penguin's Game Remake", image: "/Img/Cardjitsu.png", tags: ["Python", "Photoshop", "Kivy"], year: 2023}
        ],
        workExperience: [
            {company: "Papercut Studios - Student Project", position: "UI Artist - Technical Artist - 3D Prop Modeler", startDate: "2026", description: ["Responsible for 2D asset and graphic element creation", "Menu and UI implementation", "Creation and implementation of shaders and graphic elements", "3D prop modeling"]},
            {company: "Universidad del Valle de Guatemala", position: "Instructor", startDate: "2026", description: ["Instructor for the programming module of the “Women Creating Video Games” Certificate Program"]},
            {company: "Cerial Killer Games - Student Project", position: "Game Developer", startDate: "Nov 2025", endDate: "Feb 2026", description: ["Enemy AI Programmer"]},
            {company: "Estudio Faser", position: "Full-stack developer", startDate: "2025", description: ["Full-stack development", "API Development", "Database management"]},
            {company: "Spring Bus", position: "Front-end Developer", startDate: "2024", description: ["Front-end development"]},
            {company: "Universidad del Valle de Guatemala", position: "Teaching Assistant", startDate: "2024", description: ["Computer Organization and Assembler", "Effective Communication", "Research and Scientific Thinking", "Web Systems and Technologies", "Artificial Intelligence", "Operative Systems"]},
            {company: "Laudato Si' Movement", position: "Database Developer", startDate: "2023", description: ["Database planning", "Database development"]},
        ],
        academicExperience: [
            {institution: "Vancouver Film School", degree: "Programming for Games, Mobile, and Web Development", startDate: "Sep 2025", endDate: "Aug 2026"},
            {institution: "Universidad del Valle de Guatemala", degree: "Bachelor's Degree in Computer Science", startDate: "Jan 2021", endDate: "Dec 2021"},
            {institution: "Unity Learn", degree: "Junior Programmer", startDate: "2025"},
            {institution: "Instituto Tecnológico del Suroccidente", degree: "High School Diploma in Science and Humanities with a Focus on Computer Science", startDate: "2005", endDate: "2020"},
        ],
    },
};