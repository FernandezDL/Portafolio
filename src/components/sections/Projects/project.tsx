import Image from "next/image";

type ProjectProps = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  year: number;
};

export default function Projects({name, description, image, tags, year}: ProjectProps) {
  return (
    <div className="w-full overflow-hidden rounded-md border-2 border-border transition-[background-color, border-color, translate] 
        duration-(--hover-duration) ease-(--hover-ease) hover:translate-y-(--hover-offset) hover:border-accent cursor-pointer">
        <div className="relative h-[350px] w-full">
            <Image
                src={image}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
            />
        </div>

        <div className="p-4">
            <div className="flex items-center justify-between text-white font-bold text-lg mb-2">
                <h3>{name}</h3>
                <p>{year}</p>
            </div>

            <p className="text-white font-light text-sm">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span key={tag} className="text-md text-white border-2 border-primary rounded-md px-2 py-1">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  );
}