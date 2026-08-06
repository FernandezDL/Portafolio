import Image from "next/image";
import type { Project } from "@/types/types";

type ProjectsProps = {
    projectList: Project[];
};

export default function Projects({ projectList }: ProjectsProps) {
    return (
        <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectList.map((project) => (
                <div
                    key={project.number}
                    className="
                        w-full overflow-hidden rounded-md
                        border-2 border-border
                        transition-[background-color,border-color,translate]
                        duration-(--hover-duration)
                        ease-(--hover-ease)
                        hover:translate-y-(--hover-offset)
                        hover:border-accent
                    "
                >
                    <div className="relative h-[250px] lg:h-[350px] w-full">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="p-4">
                        <div className="mb-2 flex items-center justify-between text-md lg:text-lg font-bold text-white">
                            <h3>{project.title}</h3>
                            <p>{project.year}</p>
                        </div>

                        <p className="text-xs lg:text-sm font-light text-white">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md border-2 border-primary px-2 py-1 text-xs lg:text-md text-white"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}