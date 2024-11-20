import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";

interface ArrowButtonProps {
  handleChangeArrow: (
    position:string,
  )=> void
  position: string
  arrayLength: number
  selectRadio: number
}

export default function ArrowButton ({handleChangeArrow, position, arrayLength, selectRadio}: ArrowButtonProps) {

  return(
    <span
      onClick={()=>handleChangeArrow(position)}
      className={`w-14 absolute z-20 top-[50%] -translate-y-[50%] text-transparentArrowColor hover:text-white group-hover:opacity-100  cursor-pointer text-3xl transition-all duration-500  
        ${selectRadio ===0 && position==="left"?"hidden" :selectRadio ===arrayLength-1 &&position==="right"?"hidden": "opacity-0"}
        ${position==="left"?"left-0" :"right-0"}`}>
        {position==="left"?
          <IoIosArrowBack />:
          <IoIosArrowForward className='translate-x-4' />
        }
    </span>
  )
}
