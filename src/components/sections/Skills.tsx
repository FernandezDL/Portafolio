export default function Skills({ number, section, skills }: { number: number, section: string, skills: string[] }) {
    return(
        <div className="w-full px-10 py-5 border-b border-border flex">
            <p className="flex items-center justify-center text-md font-bold w-[10%]">{number}. -</p>
            <p className="flex items-center justify-center text-lg ml-4 w-[40%]">{section}</p>

            <div className="ml-4 flex flex-wrap gap-2 w-[50%]">
                {skills.map((skill, index) => (
                    <p key={index} className="text-md font-light border border-accent rounded-md px-2 py-1">
                        {skill}
                    </p>
                ))}
            </div>
        </div>
    )
}