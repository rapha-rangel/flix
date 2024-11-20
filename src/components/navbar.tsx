export default function Navbar(){
  return (
    <nav className="flex gap-4">
      <a href="" 
        className="text-gray-400 hover:text-gray-100 text-xl font-semibold pb-0.5 bg-left-bottom bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
          Incio
      </a>
      <a href="" 
        className="text-white text-xl font-semibold pb-0.5 bg-left-bottom bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
          Filmes
      </a>
      <a href="" 
        className="text-white text-xl font-semibold pb-0.5 bg-left-bottom bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
          Séries
      </a>
      <a href="" 
        className="text-white text-xl font-semibold pb-0.5 bg-left-bottom bg-gradient-to-r from-gray-100 to-gray-100 bg-[length:0%_2px] bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-200 ease-out">
          Crianças & Família
      </a>
    </nav>
  )
}