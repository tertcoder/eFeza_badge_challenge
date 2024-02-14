import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

function ProgressBar() {
  const progress = useSelector((state) => state.progress.value);
  return (
    <div className="h-[6px] w-full rounded-full border border-main-one/30">
      <div
        className={twMerge(
          "block h-full  rounded-full bg-main-one duration-300",
          `${progress === 0 ? "w-1/2" : "w-full"}`,
        )}
      ></div>
    </div>
  );
}

export default ProgressBar;
