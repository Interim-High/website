type InputProp = {
    type: string;
    value?: string;
    name: string;
    label: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs: React.FC<InputProp> = ({ type, value, name, label, placeholder, onChange }) => {
    return (
        <div className="flex flex-col space-y-1">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded"
            />
        </div>
    );
};

export default Inputs;
