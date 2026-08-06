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
                    className="mb-6 w-2/3 text-white"
                >
                    <div className="flex w-full items-center justify-between">
                        <h3 className="text-lg font-bold">
                            {experience.institution}
                        </h3>

                        <p className="text-sm">
                            {experience.startDate}
                            {experience.endDate && ` - ${experience.endDate}`}
                        </p>
                    </div>

                    <p className="text-md">
                        {experience.degree}
                    </p>
                </div>
            ))}
        </div>
    );
}