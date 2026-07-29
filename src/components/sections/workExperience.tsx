export default function WorkExperience({company, role, startDate, endDate, description}: {company: string, role: string, startDate: string, endDate: string, description: string}) {
    return(
        <div className="w-2/3 mb-6">
            <div className="w-full flex justify-between items-center">
                <h3 className="text-lg font-bold">{role}</h3>
                <p className="text-sm">{startDate} - {endDate}</p>
            </div>
            <p className="text-md">{company}</p>
            <p className="text-md">{description}</p>
        </div>
    )
}