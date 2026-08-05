import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AcademicExperience from "@/components/sections/academicExperience";
import Projects from "@/components/sections/Projects/project";
import Skills from "@/components/sections/Skills";
import WorkExperience from "@/components/sections/workExperience";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background">
    	<Navbar />

		{/* Name section */}
		<div className="w-full p-10 mt-5 mx-auto">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">Portfolio</p>

					<div className="w-full h-px bg-foreground m-4"></div>

					<p className="text-sm font-light my-4 shrink-0">Full-Stack Developer</p>
				</div>

				<p className="text-8xl font-bold mt-4">Diana <br/> Fernández</p>

				<div className="mt-8 flex justify-between items-center w-3/4">
					<p className="text-md w-[70%]">I'm a full-stack developer passionate about creating and bringing designs to life as faithfully as possible. I focus on visual detail, efficient implementation, and creating polished digital experiences that work as well as they look.</p>

					<div className="flex space-x-4 items-end shrink-0">
						<button className="border-2 border-primary bg-primary text-background px-4 py-2 cursor-pointer
						transition-[background-color, border-color, translate] duration-(--hover-duration) ease-(--hover-ease)
						hover:translate-y-(--hover-offset) hover:bg-secondary hover:border-secondary">
							View Work
						</button>
						<button className="border-2 border-primary text-primary text-background px-4 py-2 cursor-pointer
						transition-[background-color, border-color, translate] duration-(--hover-duration) ease-(--hover-ease)
						hover:translate-y-(--hover-offset) hover:bg-secondary hover:border-secondary hover:text-white">
							Contact
						</button>
					</div>
				</div>
			</div>
		</div>

		{/* About Section */}
		<div className="w-full bg-muted py-10 my-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">01 - About</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">A bit about me</p>
				</div>

				<div className="mt-4 flex space-x-4">
					<p className="text-md w-1/2">I'm a Computer Science Engineering graduate with a full-stack and Game Development background. I enjoy translating design concepts into functional, polish, user-friendly applications.</p>

					<div className="w-1/2">
						<p className="text-md">My background in development and digital design allows me to approach projects from both a technical and creative perspective. I care about clean implementation, performance, usability, scalability, and the small details that make a product feel complete</p>

						<div className="flex w-full mt-6">
							<div className="w-[35%]">
								<p className="text-md font-extrabold text-center">BASED IN</p>
								<p className="text-md font-medium text-center">Guatemala</p>
							</div>
							<div className="w-[40%]">
								<p className="text-md font-bold text-center">AVAILABILITY</p>
								<p className="text-md font-medium text-center">Open to opportunities</p>
							</div>
							<div className="w-1/3">
								<p className="text-md font-bold text-center">LANGUAGES</p>
								<p className="text-md font-medium text-center">ES · EN</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	  	</div>

		{/* Skills Section */}
		<div className="w-full p-10 my-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">02 - Skills</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Technical Toolkit</p>
				</div>

				<div className="mt-4">
					<Skills number={1} section="Front-end" skills={["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Vue.js", "Tailwind CSS", "Bootstrap"]} />
					<Skills number={2} section="Back-end" skills={["Node.js", "Express", "Python", "C#"]} />
					<Skills number={3} section="Design" skills={["Adobe Photoshop", "Canva", "Figma"]} />
					<Skills number={4} section="Tools & Workflow" skills={["GitHub", "Postman", "Microsoft 365", "Google Workspace"]} />
				</div>
			</div>
	  	</div>

		{/* Projects */}
		{/* @TODO: Hover */}
		<div className="w-full bg-muted p-10 my-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">03 - Projects</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Selected Projects</p>
				</div>

				<div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
					<Projects name="Papercut" description="3D Bullet Hell Game" image="/Img/Papercut.png" tags={["Unity", "C#", "Photoshop", "GitHub", "Blender"]} year={2026} />
					<Projects name="The Last Course" description="Top-Down Combat-Cooking Game" image="/Img/TheLastCourse.png" tags={["Unity", "C#", "GitHub"]} year={2026} />
					<Projects name="Card-Jitsu Remake" description="Club Penguin's Game Remake" image="/Img/Cardjitsu.png" tags={["Python", "Photoshop", "Kivy"]} year={2023} />
				</div>
			</div>
	  	</div>

		{/* Experience */}
		<div className="w-full p-10 my-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">04 - Experience</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Work & Academic Background</p>
				</div>

				<div className="mt-6 pl-4 border-l-2 border-primary ">
					<WorkExperience company="Papercut - Student Project" role="UI Artist - Techical Artist - 3D Prop Modeler" startDate="2026" description={["Responsible for 2D asset and graphic element creation", "Menu and UI implementation", "Creation and implementation of shaders and graphic elements", "3D prop modeling"]} />
					<WorkExperience company="Universidad del Valle de Guatemala" role="Instructor" startDate="2026" description={["Instructor for the programming module of the “Women Creating Video Games” Certificate Program"]} />
					<WorkExperience company="Cerial Killer Games" role="Game Developer" startDate="Nov 2025" endDate="Feb 2026" description={["Enemy AI Programmer"]} />
					<WorkExperience company="Estudio Faser" role="Full-stack developer" startDate="2025" description={["Full-stack development", "API Development", "Database management"]} />
					<WorkExperience company="Spring Bus" role="Front-end developer" startDate="2024" description={["Front-end development"]} />
					<WorkExperience company="Universidad del Valle de Guatemala" role="Assistant Teacher" startDate="2023" endDate="2025" description={["Computer Organization and ASsembler", "Effective Communication", "Research and Scientific Thinking", "Web Systems and Technologies", "Artificial Intelligence", "Operative Systems"]} />
					<WorkExperience company="Laudato Si' Movement" role="Database Developer" startDate="2023" endDate="2025" description={["Database planning", "Database development"]} />
				</div>
			</div>
		</div>

		{/* Academic Experience */}
		<div className="w-full p-10 my-5 bg-muted">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">04 - Academic Experience</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Academic Background</p>
				</div>

				<div className="mt-6 pl-4 border-l-2 border-primary ">
					<AcademicExperience institution="Vancouver Film School" program="Programming for Games, Mobile, and Web Development" startDate="Sep 2025" endDate="Aug 2026"/>
					<AcademicExperience institution="Universidad del Valle de Guatemala" program="Bachelor's degree in Computer Science" startDate="Jan 2021" endDate="Dec 2021" />
					<AcademicExperience institution="Unity Learn" program="Junior Programmer" startDate="2025"/>
					<AcademicExperience institution="Instituto Tecnológico del SurOccidente" program="High School Diploma in Science and Humanities with a Focus on Computer Science" startDate="2005" endDate="2020" />
				</div>
			</div>
		</div>

		{/* Contact */}
		<div className="w-full p-10 my-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">05 - Contact</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Get in Touch</p>
				</div>

				<div className="mt-4 flex">
					<div className="w-1/2">
						<p className="text-md">Open to full-time opportunities, freelance contracts, and consulting work.</p>

						<div className="flex space-x-2">
							<p className="text-md font-bold">Email:</p>
							<p className="text-md">dianaluciafv@gmail.com</p>
						</div>

						<div className="flex space-x-2">
							<p className="text-md font-bold">GitHub:</p>
							<p className="text-md">FernandezDL</p>
						</div>

						<div className="flex space-x-2">
							<p className="text-md font-bold">Phone:</p>
							<p className="text-md">(+502) 4023-8478</p>
						</div>
					</div>
					<div className="w-1/2 justify-end">
						<p className="text-md">Name:</p>
						<input type="text" className="border-2 border-primary px-2 py-1 w-full" />

						<p className="text-md mt-4">Email:</p>
						<input type="email" className="border-2 border-primary px-2 py-1 w-full" />

						<p className="text-md mt-4">Message:</p>
						<textarea className="border-2 border-primary px-2 py-1 w-full" />

						<button className="bg-primary text-background px-4 py-2 mt-4 w-1/4">Send</button>
					</div>
				</div>
			</div>
		</div>

		<Footer />
    </div>
  );
}
