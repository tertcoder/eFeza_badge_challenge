import image from "../assets/image-1.webp";
import Input from "../ui/Input";
function FormBadge() {
  return (
    <div className="shdw relative max-w-3xl overflow-hidden rounded-[20px]">
      <img src={image} className="h-full w-full object-cover" />
      <div className="shdw-inverse absolute inset-0 z-10 mt-[266px] rounded-[20px] bg-main-white px-24 py-16">
        <h1 className="mb-11 text-center text-3xl font-bold text-main-one">
          eFeza Super Agent Badge
        </h1>
        <form className="flex flex-col items-center">
          <div className="grid w-full grid-cols-2 gap-6">
            <Input placeholder="Nom" />
            <Input placeholder="Prenom" />
            <Input placeholder="Code Super Agent" />
            <Input placeholder="Numero de telephone" />
            <label className="form-shdw col-span-2 flex h-36 items-center justify-center rounded-[10px] bg-input-bg duration-150 hover:opacity-60">
              <input type="file" className="hidden" />
              <div className="flex flex-col items-center justify-center gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="#868686"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
                    stroke="#868686"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 15L17.914 11.914C17.5389 11.5391 17.0303 11.3284 16.5 11.3284C15.9697 11.3284 15.4611 11.5391 15.086 11.914L6 21"
                    stroke="#868686"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-lg font-medium text-txt-grey  ">
                  Upload Picture
                </span>
              </div>
            </label>
          </div>
          <button className="mt-9 flex items-center justify-center gap-4 self-end rounded-[10px] bg-main-one px-8 py-[18px] text-main-bg duration-150 hover:bg-main-two">
            <span className="text-xl font-semibold">Take Badge</span>
            <svg
              width="9"
              height="15"
              viewBox="0 0 9 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13.5979L7.09524 7.50001L1 1.40213"
                stroke="#F3F3F3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormBadge;
