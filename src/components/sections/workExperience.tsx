type WorkExperienceProps = {
    company: string;
    role: string;
    startDate: string;
    endDate?: string;
    description: string[];
};

export default function WorkExperience({company, role, startDate, endDate, description}: WorkExperienceProps) {
    return(
        <div className="w-2/3 mb-6">
            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-bold">{role}</h3>
                <p className="text-sm">{startDate} {endDate && ` - ${endDate}`}</p>
            </div>

            <p className="text-md">{company}</p>

            <div className="mt-4">
                {description.map((desc) => (
                    <p key={desc} className="text-md">
                        - {desc}
                    </p>
                ))}
            </div>
        </div>
    )
}