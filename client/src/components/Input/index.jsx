function Input({ type, name, id, placeholder, className }) {
  return (
    <div>
      <label htmlFor={id}></label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </div>
  );
}

export default Input;
