import type { AcademicExperience as AcademicExperienceType } from "@/types/types";

type AcademicExperienceProps = {
    academicExperienceList: AcademicExperienceType[];
};

export default function AcademicExperience({
    academicExperienceList,
}: AcademicExperienceProps) {
    return (
        <div className="w-full">
            {academicExperienceList.map((experience) => (
                <div
                    key={`${experience.institution}-${experience.degree}-${experience.startDate}`}
                    className="mb-6 w-[90%] lg:w-2/3 text-white"
                >
                    <div className="flex w-full items-center justify-between">
                        <h3 className="text-md lg:text-lg font-bold w-2/3 lg:w-3/4">
                            {experience.institution}
                        </h3>

                        <p className="text-sm text-end w-1/3 lg:w-1/4">
                            {experience.startDate}
                            {experience.endDate && ` - ${experience.endDate}`}
                        </p>
                    </div>

                    <p className="text-sm lg:text-md">
                        {experience.degree}
                    </p>
                </div>
            ))}
        </div>
    );
}