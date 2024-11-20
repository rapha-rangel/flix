interface RadioButtonProps{
  array: any
  selectRadio: number
  handleChange: (value:number)=> void
}

const RadioButton =({handleChange, array, selectRadio}:RadioButtonProps)=>{
  return(
    <div className="absolute flex left-[50%] bottom-[10%] -translate-x-[50%]">
      {array && array.map((item: any, index: number)=>(
        <div
          key={index}
          onClick={()=>handleChange(index)}
          className={`group mx-4 flex`}>
          <input
            className={`appearance-none absolute mt-1 transition-all during-500 cursor-pointer
              w-4 h-4 border-2 rounded-full
              ${selectRadio === index? "border-indigo-500":"border-indigo-100 group-hover:border-indigo-300"}`}
            type="radio" 
            value={index}
            defaultChecked={selectRadio === index}
          />
          <div
            className={`absolute  transition-all during-500 cursor-pointer 
            w-2 h-2 rounded-full ml-1 mt-2 ${selectRadio === index? "bg-indigo ":"bg-transparent group-hover:bg-indigoLight "}`}
          />
        </div>
      ))}
    </div>
  )
}
export default RadioButton;