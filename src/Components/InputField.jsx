function InputField({ type, placeholder, onChange, userInput, onKeyDown }) {
  return (
    <input
      value={userInput}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}

export default InputField;
