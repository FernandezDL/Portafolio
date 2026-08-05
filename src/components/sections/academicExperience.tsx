type AcademicExperienceProps = {
    institution: string;
    program: string;
    startDate: string;
    endDate?: string;
};

export default function AcademicExperience({institution, program, startDate, endDate}: AcademicExperienceProps) {
    return(
        <div className="w-2/3 mb-6 text-white">
            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-bold">{institution}</h3>
                <p className="text-sm">{startDate} {endDate && ` - ${endDate}`}</p>
            </div>

            <p className="text-md">{program}</p>
        </div>
    )
}