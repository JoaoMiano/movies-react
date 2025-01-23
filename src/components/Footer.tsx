export const Footer = ()=>{
    return(
        <footer className="h-28 w-full bg-gray-900 px-6 sm:px-12 py-4 border-t-4 border-yellow-500 shadow-md text-center text-sm lg:text-lg text-white">
            <p>
                Projeto desenvolvido por <a href="https://www.linkedin.com/in/joao-miano/" className="text-contrast font-bold" target="_blank">João Pedro Miano</a>
            </p>
            <p>
                Consumindo a API do <a href="https://www.themoviedb.org/" className="text-contrast font-bold" target="_blank">The Movie DB</a>
            </p>
        </footer>
    )
}