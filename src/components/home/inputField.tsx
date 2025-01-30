// Create an InputField component that accepts onChange and placeholder as props.

type InputFieldProps = {
    label?: string;  
    type?: string;   
    placeholder?: string; 
    value?: string; 
    name : string
    className ?: string, 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}
// function Input(input : InputField){
//     return (
//         <div>
//             {input.placeHolder}
//         </div>
//     )
// }


const Input : React.FC<InputFieldProps> = ({ className , label, type = "text", placeholder,value,name, onChange}) => {

    return (
        <div className="flex flex-col space-y-2">
            {label && <label className="text-sm font-medium">{label}</label>} 
            <input
                className={`w-full p-2 border rounded-lg ${className}`} 
                type={type}
                placeholder={placeholder}
                value={value}
                name = {name}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;
