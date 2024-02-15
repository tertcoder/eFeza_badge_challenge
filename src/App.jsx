import FormBadge from "./features/FormBadge";
import ImageHero from "./assets/hero.webp";
import ProgressBar from "./ui/ProgressBar";
import { useSelector } from "react-redux";
import Badge from "./features/Badge";

function App() {
  const progress = useSelector((state) => state.progress.value);
  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-main-bg max-xl:px-8 max-w600:px-0 w600:items-center w600:justify-center w600:py-20">
      <div className="shdw grid min-h-[601px] w-full max-w-[1194px] overflow-hidden duration-150 max-w916:grid-rows-[418px_1fr] max-w600:grid-rows-[300px_1fr] max-w400:grid-rows-[250px_1fr] w600:rounded-[15px] w916:grid-cols-[350px_1fr] lg:grid-cols-[418px_1fr]">
        <div className="h-full w-full bg-main-one">
          <img
            src={ImageHero}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="max-w916:shdw-inverse bg-main-white px-4 py-12 max-w916:rounded-[15px] w500:px-8 lg:px-16">
          {/* Progress bar */}
          <ProgressBar />
          {/* heading */}
          <h2 className="my-8 text-center text-2xl font-bold text-main-one">
            {progress === 0
              ? "Complète le formulaire du super agent"
              : "Votre Badge est prêt !"}
          </h2>
          {/* main content */}
          {progress === 0 ? <FormBadge /> : <Badge />}
        </div>
      </div>
    </div>
  );
}

export default App;
