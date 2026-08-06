import { notFound } from "next/navigation";
import { contentByLanguage } from "@/data/content";
import type {PortfolioLang, PortfolioType} from "@/types/types";
import Navbar from "@/components/layout/Navbar";
import NavButtonSec from "@/components/sections/navButtons/navButtonSec";
import NavButton from "@/components/sections/navButtons/navButton";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/projects/projectCard";
import AcademicExperience from "@/components/sections/academicExperience";
import WorkExperience from "@/components/sections/workExperience";
import Footer from "@/components/layout/Footer";

type PortfolioPageProps = {
	params: Promise<{
		lang: string;
		mode: string;
	}>;
};

function isPortfolioLang(value: string): value is PortfolioLang {
  	return value === "en" || value === "es";
}

function isPortfolioType(value: string): value is PortfolioType {
  	return value === "web" || value === "games";
}

export const dynamicParams = false;

export function generateStaticParams() {
    return [
        { lang: "en", mode: "web" },
        { lang: "en", mode: "games" },
        { lang: "es", mode: "web" },
        { lang: "es", mode: "games" },
    ];
}

export default async function PortfolioPage({params}: PortfolioPageProps) {
  const { lang, mode } = await params;

  if (!isPortfolioLang(lang) || !isPortfolioType(mode)) {
    notFound();
  }

  const languageContent = contentByLanguage[lang];
  const portfolioContent = languageContent[mode];

  return (
    <main className="w-full min-h-screen bg-background">
		<Navbar navigation={portfolioContent.navigation} navbarSwitches={portfolioContent.navbarSwitches}/>

		{/* Name section */}
		<section id="header" className="scroll-mt-0">
			<div className="w-full p-10 mt-5 mx-auto">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">{lang === "en" ? "Portfolio" : "Portafolio"}</p>

						<div className="w-full h-px bg-foreground m-4"></div>

						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.nameSection.role}</p>
					</div>

					<p className="text-8xl font-bold mt-4">Diana Lucía <br/> Fernández Villatoro</p>

					<div className="mt-8 flex justify-between items-center w-3/4">
						<p className="text-md w-[70%]">{portfolioContent.nameSection.statement}</p>

						<div className="flex space-x-4 items-end shrink-0">
							<NavButton text={portfolioContent.nameSection.contactButton} section="#contact" />
							<NavButtonSec text={portfolioContent.nameSection.viewWorkButton} section="#projects" />
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* About Section */}
		<section id="about">
			<div className="w-full bg-muted py-10 my-5">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">01 - {portfolioContent.sections[0].header}</p>
						<div className="w-full h-px bg-foreground m-4"></div>
						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[0].title}</p>
					</div>

					<div className="mt-4 flex space-x-4">
						<p className="text-md w-1/2">{portfolioContent.about.introduction}</p>

						<div className="w-1/2">
							<p className="text-md">{portfolioContent.about.approach}</p>

							<div className="flex w-full mt-6">
								<div className="w-[35%]">
									<p className="text-md font-extrabold text-center">{portfolioContent.about.basedIn}</p>
									<p className="text-md font-medium text-center">Guatemala</p>
								</div>
								<div className="w-[40%]">
									<p className="text-md font-bold text-center">{portfolioContent.about.availability}</p>
									<p className="text-md font-medium text-center">{portfolioContent.about.oportunities}</p>
								</div>
								<div className="w-1/3">
									<p className="text-md font-bold text-center">{portfolioContent.about.languages}</p>
									<p className="text-md font-medium text-center">ES · EN</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* Skills Section */}
		<section id="skills">
			<div className="w-full p-10 my-5">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">02 - {portfolioContent.sections[1].header}</p>
						<div className="w-full h-px bg-foreground m-4"></div>
						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[1].title}</p>
					</div>

					<div className="mt-4">
						<Skills skillList={portfolioContent.skills} />
					</div>
				</div>
			</div>
		</section>

		{/* Projects */}
		<section id="projects">
			<div className="w-full bg-muted p-10 my-5">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">03 - {portfolioContent.sections[2].header}</p>
						<div className="w-full h-px bg-foreground m-4"></div>
						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[2].title}</p>
					</div>

					<Projects projectList={portfolioContent.projects} />
				</div>
			</div>
		</section>

		{/* Experience */}
		<section id="experience">
			<div className="w-full p-10 my-5">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">04 - {portfolioContent.sections[3].header}</p>
						<div className="w-full h-px bg-foreground m-4"></div>
						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[3].title}</p>
					</div>

					<div className="mt-6 ml-10 pl-4 border-l-2 border-primary ">
						<WorkExperience workExperienceList={portfolioContent.workExperience} />
					</div>
				</div>
			</div>
		</section>

		{/* Academic Experience */}
		<div className="w-full p-10 my-5 bg-muted">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">05 - {portfolioContent.sections[4].header}</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[4].title}</p>
				</div>

				<div className="mt-6 ml-10 pl-4 border-l-2 border-primary ">
					<AcademicExperience academicExperienceList={portfolioContent.academicExperience} />
				</div>
			</div>
		</div>

		{/* Contact */}
		<section id="contact">
			<div className="w-full p-10 my-5">
				<div className="mx-auto max-w-content">
					{/* Title */}
					<div className="w-full flex items-center">
						<p className="text-sm font-light my-4 shrink-0">06 - {portfolioContent.sections[5].header}</p>
						<div className="w-full h-px bg-foreground m-4"></div>
						<p className="text-sm font-light my-4 shrink-0">{portfolioContent.sections[5].title}</p>
					</div>

					<div className="mt-4 flex">
						<div className="w-1/2">
							<p className="text-md">{portfolioContent.contactSection.text}</p>

							<div className="flex space-x-2">
								<p className="text-md font-bold">Email:</p>
								<p className="text-md">dianaluciafv@gmail.com</p>
							</div>

							<div className="flex space-x-2">
								<p className="text-md font-bold">GitHub:</p>
								<p className="text-md">FernandezDL</p>
							</div>

							<div className="flex space-x-2">
								<p className="text-md font-bold">{portfolioContent.contactSection.phone}:</p>
								<p className="text-md">(+502) 4023-8478</p>
							</div>
						</div>
						<div className="w-1/2 justify-end">
							<p className="text-md">{portfolioContent.contactSection.name}:</p>
							<input type="text" className="border-2 border-primary px-2 py-1 w-full" />

							<p className="text-md mt-4">Email:</p>
							<input type="email" className="border-2 border-primary px-2 py-1 w-full" />

							<p className="text-md mt-4">{portfolioContent.contactSection.message}:</p>
							<textarea className="border-2 border-primary px-2 py-1 w-full" />

							<button className="bg-primary text-background px-4 py-2 mt-4 w-1/4">{portfolioContent.contactSection.button}</button>
						</div>
					</div>
				</div>
			</div>
		</section>

		<Footer footerSection={portfolioContent.footerSection} />
    </main>
  );
}