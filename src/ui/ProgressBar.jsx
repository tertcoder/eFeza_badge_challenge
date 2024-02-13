import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function ProgressBar({ progress }) {
  return (
    <div className="h-[6px] w-full rounded-full border border-main-one/30">
      <div
        className={twMerge(
          "block h-full rounded-full bg-main-one duration-300",
          `w-[${progress[0]}%]`,
        )}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.array.isRequired,
};

export default ProgressBar;
