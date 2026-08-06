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
                    className="mb-6 w-[90%] lg:w-full"
                >
                    <div className="flex w-full items-center justify-between">
                        <h3 className="text-sm lg:text-lg font-bold w-2/3 lg:w-3/4">
                            {experience.position}
                        </h3>

                        <p className="text-xs text-end lg:text-sm w-1/3 lg:w-1/4">
                            {experience.startDate}
                            {experience.endDate && ` - ${experience.endDate}`}
                        </p>
                    </div>

                    <p className="text-xs lg:text-md">{experience.company}</p>

                    <div className="mt-4">
                        {experience.description.map((description) => (
                            <p
                                key={description}
                                className="text-xs lg:text-md"
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