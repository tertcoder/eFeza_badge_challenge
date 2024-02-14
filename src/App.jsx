import FormBadge from "./features/FormBadge";
import ImageHero from "./assets/hero.webp";
import ProgressBar from "./ui/ProgressBar";
import { useSelector } from "react-redux";
import Badge from "./features/Badge";

function App() {
  const progress = useSelector((state) => state.progress.value);
  return (
    <div className="flex min-h-screen items-center justify-center bg-main-bg py-20">
      <div className="shdw grid min-h-[601px] w-full max-w-[1194px] grid-cols-[418px_1fr] overflow-hidden rounded-[15px]">
        <div className="h-full w-full bg-main-one">
          <img
            src={ImageHero}
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className=" bg-main-white px-16 py-12">
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
