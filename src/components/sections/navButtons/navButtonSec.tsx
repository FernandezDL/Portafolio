"use client"

export default function NavButton({ text, section }: { text: string; section: string }) {
    return (
        <button className="border-2 border-primary text-primary text-background px-4 py-2 cursor-pointer
        transition-[background-color,border-color,translate] duration-(--hover-duration) ease-(--hover-ease)
        hover:translate-y-(--hover-offset) hover:bg-secondary hover:border-secondary hover:text-white" onClick={() => window.location.href = section}>
            {text}
        </button>
    )
}