export default function Skills({ number, section, skills }: { number: number, section: string, skills: string[] }) {
    return(
        <div className="w-full p-10 pb-3 border-b border-border flex">
            <p className="text-md font-bold w-1/4">{number}. -</p>
            <p className="text-lg ml-4 w-1/4">{section}</p>
            <div className="ml-4 flex flex-wrap gap-2 w-1/2">
                {skills.map((skill, index) => (
                    <p key={index} className="text-md font-light border border-accent rounded-md px-2 py-1">
                        {skill}
                    </p>
                ))}
            </div>
        </div>
    )
}