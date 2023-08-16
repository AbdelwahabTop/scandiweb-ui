export const TextInput = ({label, value, onChange, type}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
        </div>
    )
}