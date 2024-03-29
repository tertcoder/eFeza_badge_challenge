import Input from "../ui/Input.jsx";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { next } from "./progressSlice.js";
import { updateState } from "./formDataSlice.js";
import imageToPreview from "../utils/func.js";
import { twMerge } from "tailwind-merge";

function FormBadge() {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    async function getImagePreview() {
      if (!imageSrc) return;
      const imageData = await imageToPreview(imageSrc);
      setImagePreview(imageData);
    }
    getImagePreview();
  }, [imageSrc]);

  const onSubmit = (data) => {
    data = { ...data, image: imagePreview };
    dispatch(updateState(data));
    dispatch(next());
    reset();
    setImageSrc(null);
  };
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full flex-col gap-6 w500:grid w500:grid-cols-2">
        <Input
          errors={errors?.nom?.message}
          placeholder="Nom"
          register={{
            ...register("nom", {
              required: "Entrez votre nom de famille!",
            }),
          }}
        />
        <Input
          errors={errors?.prenom?.message}
          placeholder="Prenom"
          register={{
            ...register("prenom", {
              required: "Entrez votre prenom!",
            }),
          }}
        />
        <Input
          errors={errors?.code?.message}
          placeholder="Code Super Agent"
          register={{
            ...register("code", {
              required: "Entrez votre code super agent!",
              pattern: {
                value: /^\d{5}$/,
                message: "Code invalide,",
              },
            }),
          }}
        />
        <Input
          errors={errors?.telephone?.message}
          register={{
            ...register("telephone", {
              required: "Entrez votre numero de telephone!",
              pattern: {
                value: /^(?:\+?257)?\d{8}$/,
                message: "Numero invalide",
              },
            }),
          }}
          placeholder="Numero de telephone"
        />

        <label
          className={twMerge(
            "col-span-2 flex h-36 cursor-pointer items-center justify-center duration-150 ",
            `${!imageSrc && "form-shdw rounded-[10px] bg-input-bg"}`,
          )}
        >
          <input
            type="file"
            name="image"
            {...register("image", {
              required: "Selectionnez votre photo!",
            })}
            onChange={(e) => setImageSrc(e.target.files[0])}
            className="hidden"
            accept="image/png, image/jpeg, image/jpg"
          />
          <div className="">
            {imageSrc ? (
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center gap-1 self-end p-2">
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

                  {errors?.image?.message ? (
                    <span className="text-center text-sm text-red-500">
                      *{errors?.image?.message}
                    </span>
                  ) : (
                    <span className="text-center text-xs font-medium text-txt-grey  ">
                      Cliquez pour changer
                    </span>
                  )}
                </div>
                {imagePreview ? (
                  <div className="h-36 w-36 overflow-hidden rounded-lg ">
                    <img
                      className=" h-full w-full object-cover"
                      src={imagePreview}
                    />
                  </div>
                ) : (
                  <div className="shdw flex h-36 w-36 items-center justify-center overflow-hidden rounded-lg bg-main-bg">
                    <span className="loader"></span>
                  </div>
                )}
              </div>
            ) : (
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

                {errors?.image?.message ? (
                  <span className="text-center text-sm text-red-500">
                    *{errors?.image?.message}
                  </span>
                ) : (
                  <span className="text-center text-lg font-medium text-txt-grey  ">
                    Votre Photo
                  </span>
                )}
              </div>
            )}
          </div>
        </label>
      </div>
      <button className="mt-9 flex items-center justify-center gap-4 self-end rounded-[10px] bg-main-one px-8 py-[18px] text-main-bg duration-150 hover:bg-main-two max-w500:w-full">
        <span className="text-xl font-semibold">Prend Ton Badge</span>
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
  );
}

export default FormBadge;
