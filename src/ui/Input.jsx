import PropTypes from "prop-types";

function Input({ placeholder }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        className="form-shdw w-full rounded-[10px] bg-input-bg px-[14px] py-4 text-lg font-medium text-main-two outline-main-one placeholder:text-lg placeholder:font-medium placeholder:text-txt-grey"
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default Input;
