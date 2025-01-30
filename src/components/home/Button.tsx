// Define a Button component that accepts a label (string) and an onClick function.
"use client"
interface Button {
    label : string,
    onClick ?: () =>void
    type : "submit"
}

const ButtonComponent : React.FC<Button> = ({type, label,onClick}) =>{
    return (
       <button onClick={onClick} 
       type = {type} 
       className="rounded-sm mt-2 px-2 w-full h-8 bg-red-900 hover:bg-red-800 text-white"
       >{label}</button>
    )
}

export default ButtonComponent;