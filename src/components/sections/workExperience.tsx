import { Experience } from "@/types/types";

type WorkExperienceProps = {
    workExperienceList: Experience[];
};

export default function WorkExperience({workExperienceList}: WorkExperienceProps) {
    return (
        <div className="w-full">
            {workExperienceList.map((experience) => (
                <div
                    key={`${experience.company}-${experience.position}-${experience.startDate}`}
                    className="mb-6 w-2/3"
                >
                    <div className="flex w-full items-center justify-between">
                        <h3 className="text-lg font-bold">
                            {experience.position}
                        </h3>

                        <p className="text-sm">
                            {experience.startDate}
                            {experience.endDate && ` - ${experience.endDate}`}
                        </p>
                    </div>

                    <p className="text-md">{experience.company}</p>

                    <div className="mt-4">
                        {experience.description.map((description) => (
                            <p
                                key={description}
                                className="text-md"
                            >
                                - {description}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}