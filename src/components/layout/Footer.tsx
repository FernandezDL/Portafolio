export default function Footer(){
    return(
        <div className="w-full p-10 mt-5 bg-muted flex">
            <div className="w-1/3"></div>

            <div className="w-1/3 flex flex-col items-center">
                <p>Made with ♡ by Diana Fernandez</p>
                <p>© 2026</p>
            </div>

            <div className="w-1/3 items-center justify-right">
                {/* @TODO: Cambiar a boton */}
                <p className="font-bold text-end">I also make games →</p> 
            </div>
        </div>
    )
}