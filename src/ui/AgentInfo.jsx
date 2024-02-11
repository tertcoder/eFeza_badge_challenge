import PropTypes from "prop-types";

function AgentInfo({ label = null, value = null }) {
  return (
    <div>
      <span className="text-lg font-semibold text-sm-grey">{label ?? ""}</span>
      <h3 className="text-2xl font-bold text-main-two">{value ?? ""}</h3>
    </div>
  );
}

AgentInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AgentInfo;
