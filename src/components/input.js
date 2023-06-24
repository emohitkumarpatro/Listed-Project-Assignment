const Input = ({ label, value, onChange, type ,...otherProps }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  bg-[#F5F5F5] text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={label}
          type={type}
          value={value}
          onChange={onChange}
          {...otherProps}
        />
      </div>
    );
  };
export default Input;     