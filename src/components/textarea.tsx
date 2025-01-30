type TextareaProps = {
    label: string
    value?: string,
    name : string,
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    rows?: number
    cols?: number
    placeholder ?: string
}

const Textarea: React.FC<TextareaProps> = ({placeholder, name,label, value, onChange, rows = 4 }) => {
    return (
        <div className="flex flex-col space-y-2">
            {label && <label className="text-sm font-medium">{label} </label>}
            <textarea
                value={value}
                onChange={onChange}
                rows={rows}
                // cols={cols}
                name = {name}
                placeholder = {placeholder}
            />
        </div>
    )
}

export default Textarea;