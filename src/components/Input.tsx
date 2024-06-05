const Input = ({ ...props }) => {
  const { invalidMessage, ...leftProps } = props;
  return (
    <div className="flex flex-col gap-2">
      <input
        type={props.type ? props.type : "text"}
        className="w-[300px] md:px-8 px-4 text-left py-2 border border-indigo-500 bg-[#343341] font-medium
          placeholder:font-medium rounded-md outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent invalid:!border-red-500"
        {...leftProps}
      />

      {props.invalid && (
        <span className="text-red-500 py-0 my-0 font-medium text-xs">
          * {invalidMessage}
        </span>
      )}
    </div>
  );
};

export default Input;
