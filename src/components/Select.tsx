interface SelectProps {
  label: string,
  value?: string,
  name: string,
  options: {
    label: string,
    value: string
  }[],
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ value, label, name, options, onChange }) => {
  return (
    <div className="flex flex-col space-y-1 ">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select
        value={value}
        onChange={onChange}
        className="border p-2"
        name={name}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );




};
export default Select;
