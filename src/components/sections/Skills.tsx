import type { Skill } from "@/types/types";

type SkillsProps = {
    skillList: Skill[];
};

export default function Skills({ skillList }: SkillsProps) {
    return (
        <div className="w-full">
            {skillList.map((skillSection) => (
                <div
                    key={`${skillSection.number}-${skillSection.title}`}
                    className="lg:flex w-full border-b border-border px-10 py-5"
                >
                    <div className="flex lg:w-1/2">
                        <p className="flex w-[20%] items-center justify-center text-md font-bold">
                            {skillSection.number}. -
                        </p>

                        <p className="ml-4 flex w-[80%] items-center justify-center text-lg">
                            {skillSection.title}
                        </p>
                    </div>

                    <div className="ml-4 mt-3 flex w-full lg:w-1/2 flex-wrap gap-2">
                        {skillSection.skills.map((skill) => (
                            <p
                                key={skill}
                                className="rounded-md border border-accent px-2 py-1 text-xs lg:text-md font-light"
                            >
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}