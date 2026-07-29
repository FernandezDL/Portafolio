export default function Projects({name, description, image, tags, year}: {name: string, description: string, image: string, tags: string[], year: number}) {
    return(
        <div className="w-full p-3 border border-border ">
            <img src={image} alt={name} />

            <div className="flex justify-between items-center mt-4">
                <h3>{name}</h3>
                <p>{year}</p>
            </div>

            <p>{description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span key={index} className="text-background px-2 py-1 border-2 border-primary">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    )
}