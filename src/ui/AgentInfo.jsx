import PropTypes from "prop-types";

function AgentInfo({ label, value }) {
  return (
    <div>
      <span className="text-sm-grey text-lg font-semibold">{label}</span>
      <h3 className="text-2xl font-bold text-main-two">{value}</h3>
    </div>
  );
}

AgentInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default AgentInfo;
