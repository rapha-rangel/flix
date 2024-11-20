interface ButtonProps{
  title:string
}

export default function Button ({title}: ButtonProps) {
  return (
    <button className="text-white font-semibold bg-gray-700 border-none px-4 py-3 rounded-md hover:bg-gray-500 transition-all duration-300 ease-in-out">
      {title}
    </button>
  )
} 