import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import AcademicExperience from "@/components/sections/academicExperience";
import Projects from "@/components/sections/projects";
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

					<p className="text-sm font-light my-4 shrink-0">Web & Full Stack Developer</p>
				</div>

				<p className="text-8xl font-bold mt-4">Diana <br/> Fernández</p>

				<div className="mt-4 flex justify-between items-center w-3/4">
					<p className="text-md">Statement here</p>

					<div className="flex space-x-4 items-end">
						<button className="bg-primary text-background px-4 py-2">View Work</button>
						<button className="border-2 border-primary text-primary text-background px-4 py-2">Contact</button>
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
					<p className="text-md w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			
					<div className="w-1/2">
						<p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

						<div className="flex w-full mt-6">
							<div className="w-[35%]">
								<p className="text-md text-center">BASED IN</p>
								<p className="text-md font-bold text-center">Guatemala</p>
							</div>
							<div className="w-[40%]">
								<p className="text-md text-center">AVAILABLE</p>
								<p className="text-md font-bold text-center">Freelance & Contract</p>
							</div>
							<div className="w-1/3">
								<p className="text-md text-center">LANGUAGES</p>
								<p className="text-md font-bold text-center">ES · EN</p>
							</div>
						</div>
					</div>
				</div>
			</div>
	  	</div>

		{/* Skills Section */}
		<div className="w-full p-10 m-5">
			<div className="mx-auto max-w-content">
				{/* Title */}
				<div className="w-full flex items-center">
					<p className="text-sm font-light my-4 shrink-0">02 - Skills</p>
					<div className="w-full h-px bg-foreground m-4"></div>
					<p className="text-sm font-light my-4 shrink-0">Technical Toolkit</p>
				</div>

				<div className="mt-4">
					<Skills number={1} section="Frontend" skills={["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"]} />
					<Skills number={2} section="Backend" skills={["Node.js", "Express", "MongoDB", "PostgreSQL"]} />
					<Skills number={3} section="Other" skills={["Git", "Docker", "AWS", "Figma"]} />
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

{/* @TODO: Grid layout for projects */}
				<div className="mt-4 flex space-x-4">		  
					<Projects name="Project 1" description="Description of Project 1" image="/images/project1.png" tags={["React", "Next.js"]} year={2023} />
					<Projects name="Project 2" description="Description of Project 2" image="/images/project2.png" tags={["React", "Next.js"]} year={2023} />
					<Projects name="Project 3" description="Description of Project 3" image="/images/project3.png" tags={["React", "Next.js"]} year={2023} />
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
					<WorkExperience company="Company 1" role="Role 1" startDate="Jan 2020" endDate="Dec 2020" description="Description of Role 1" />
					<WorkExperience company="Company 2" role="Role 2" startDate="Jan 2021" endDate="Dec 2021" description="Description of Role 2" />
					<WorkExperience company="Company 3" role="Role 3" startDate="Jan 2022" endDate="Dec 2022" description="Description of Role 3" />
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
					<AcademicExperience institution="Institution 1" role="Role 1" startDate="Jan 2020" endDate="Dec 2020" description="Description of Role 1" />
					<AcademicExperience institution="Institution 2" role="Role 2" startDate="Jan 2021" endDate="Dec 2021" description="Description of Role 2" />
					<AcademicExperience institution="Institution 3" role="Role 3" startDate="Jan 2022" endDate="Dec 2022" description="Description of Role 3" />
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
