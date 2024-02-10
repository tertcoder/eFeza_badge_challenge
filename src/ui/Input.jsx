import PropTypes from "prop-types";

function Input({ placeholder, register, errors }) {
  return (
    <div className="w-full">
      <input
        {...register}
        type={"text"}
        placeholder={placeholder}
        className="form-shdw w-full rounded-[10px] bg-input-bg px-[14px] py-4 text-lg font-medium text-main-two outline-main-one placeholder:text-lg placeholder:font-medium placeholder:text-txt-grey"
      />
      {errors && <span className="text-sm text-red-500">*{errors}</span>}
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.object.isRequired,
  errors: PropTypes.string,
};

export default Input;
