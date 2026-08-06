import type { FooterSection } from "@/types/types";

type FooterProps = {
    footerSection: FooterSection;
};

export default function Footer({ footerSection }: FooterProps) {
    return(
        <div className="w-full p-10 mt-5 bg-muted flex">
            <div className="w-1/3"></div>

            <div className="w-1/3 flex flex-col items-center">
                <p>{footerSection.madeBy} ♡ by Diana Fernandez</p>
                <p>© 2026</p>
            </div>

            <div className="w-1/3 flex items-center justify-end">
                {/* @TODO: Cambiar a boton */}
                <button className="font-bold text-end cursor-pointer">{footerSection.button} →</button>
            </div>
        </div>
    )
}