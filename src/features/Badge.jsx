import { useDispatch, useSelector } from "react-redux";
import { prev } from "./progressSlice";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import QRCode from "qrcode.react";

import pattern from "../assets/pattern.png";
import bigpattern from "../assets/big-patterns.png";
import blocksLine from "../assets/block-line.png";
import biglines from "../assets/big-lines.png";
import logo from "../assets/eFeza.png";
import biglogo from "../assets/big-logo.png";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
function Badge() {
  const { nom, prenom, telephone, code, image } = useSelector(
    (state) => state.formData,
  );
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isDownloadingImg, setIsDownloadingImg] = useState(false);
  const [isDownloadingPdf, setIsDownloadingPdf] = useState(false);
  const imagePreview = `${image}`;

  async function handleImageDownload() {
    setIsLoading(true);
    setIsDownloadingImg(true);
    const badgeElement = document.getElementById("badge");
    const canvas = await html2canvas(badgeElement);
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = data;
    link.download = `${nom.trim().toLowerCase()}-badge.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
    setIsDownloadingImg(false);
  }
  async function handleDownloadPDF() {
    setIsLoading(true);
    setIsDownloadingPdf(true);
    const badgeElement = document.getElementById("badge");
    const canvas = await html2canvas(badgeElement, { scale: 4 });
    const pdf = new jsPDF("portrait", "mm", [210, 297]);
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
    pdf.save(`${nom.trim()}-badge.pdf`);
    setIsLoading(false);
    setIsDownloadingPdf(false);
  }

  return (
    <>
      <div className="flex items-end gap-8 max-sm:flex-col max-sm:items-center">
        <div className="form-shdw h-[392px] w-[294px] overflow-hidden rounded-[10px] bg-main-one">
          <div className="relative h-[164px] w-full bg-main-white">
            <img
              src={logo}
              className="absolute left-1/2 top-3 z-10  -translate-x-1/2"
            />
            <img src={pattern} className="absolute inset-0" />
            <img src={blocksLine} className="absolute bottom-0 right-0" />
          </div>
          <div className="relative">
            {image ? (
              <div
                style={{
                  backgroundImage: `url(${imagePreview})`,
                }}
                className="absolute -top-[50px] left-1/2  block h-[100px] w-[100px]  -translate-x-1/2 rounded-full border-2 border-main-white bg-cover bg-top"
              ></div>
            ) : (
              <div className="absolute left-1/2 top-[275px] block h-[100px] w-[100px]  -translate-x-1/2  rounded-full border-4 border-main-white bg-main-bg">
                <span className="loader"></span>
              </div>
            )}

            <div className="flex flex-col items-center pt-[60px]">
              <h3 className="text-lg font-bold text-main-white">
                {nom.trim()} {prenom.trim()}
              </h3>
              <span className="text-xs font-semibold text-main-bg/90">
                Super Agent
              </span>
            </div>
            <div className="mx-[18px] mt-[18px] flex items-end justify-between gap-4 ">
              <div className="space-y-1">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-main-bg/90">
                    Code
                  </span>
                  <span className="text-lg font-bold text-main-white">
                    {code.trim()}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-main-bg/90">
                    Telephone
                  </span>
                  <span className="text-lg font-bold text-main-white">
                    {telephone.trim()}
                  </span>
                </div>
              </div>
              <div className="flex h-[90px] w-[90px] items-center justify-center rounded-[5px] bg-main-white p-2">
                <QRCode
                  value={`Nom: ${nom}\nPrenom: ${prenom}\nCode: ${code}\nTelephone: ${telephone}`}
                  size={74}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-semibold text-main-two ">
              Vous pouvez telecharger votre badge:
            </h3>
            <div className="flex gap-8">
              <button
                disabled={isLoading}
                onClick={handleImageDownload}
                className={twMerge(
                  "space-y-2",
                  `${isLoading && "cursor-not-allowed opacity-70"}`,
                )}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.54415 48H41.4533C42.6582 48 43.6351 47.0231 43.6351 45.8182V16.7831C43.605 17.9618 42.6424 18.9086 41.4562 18.9086C41.4551 18.9086 41.4541 18.9086 41.4533 18.9086H39.2714H26.9078C25.7028 18.9086 24.7259 17.9318 24.7259 16.7268V4.36359V2.18184C24.7259 1.29938 25.2574 0.503719 26.0728 0.166125C26.3532 0.0500625 26.648 -0.00271875 26.9397 0.00178125C26.929 0.0015 26.9186 0 26.9078 0H6.54415C5.33918 0 4.3623 0.976875 4.3623 2.18184V45.8182C4.3623 47.0231 5.33918 48 6.54415 48ZM23.9144 23.9754C24.3203 23.5682 24.8831 23.3354 25.4576 23.3354C26.0306 23.3354 26.5937 23.5681 26.9996 23.9754C27.4068 24.3813 27.6394 24.9442 27.6394 25.5172C27.6394 26.0917 27.4067 26.6547 26.9996 27.0606C26.5937 27.4664 26.0322 27.6991 25.4576 27.6991C24.8831 27.6991 24.3203 27.4664 23.9144 27.0606C23.5086 26.6547 23.2757 26.0932 23.2757 25.5172C23.2757 24.9426 23.5086 24.3813 23.9144 23.9754ZM13.0896 35.9146C13.0896 35.3633 13.2983 34.8324 13.6738 34.4287L17.5478 30.2637C18.3098 29.4442 19.5683 29.3344 20.4611 30.0092L26.1105 34.2801L28.9351 32.566C29.8698 31.9989 31.0796 32.211 31.7653 33.0616L32.9619 34.5451C33.2747 34.933 33.4453 35.4164 33.4453 35.9149V37.0911C33.4453 38.296 32.4685 39.2729 31.2635 39.2729H15.2714C14.0665 39.2729 13.0896 38.296 13.0896 37.0911V35.9146Z"
                    fill="#E0E0E2"
                  />
                  <path
                    d="M25.4572 27.6991C26.0317 27.6991 26.5934 27.4664 26.9992 27.0605C27.4065 26.6547 27.6391 26.0918 27.6391 25.5172C27.6391 24.9441 27.4064 24.3813 26.9992 23.9754C26.5934 23.5682 26.0305 23.3354 25.4572 23.3354C24.8827 23.3354 24.32 23.5681 23.9141 23.9754C23.5083 24.3813 23.2754 24.9427 23.2754 25.5172C23.2754 26.0932 23.5083 26.6547 23.9141 27.0605C24.32 27.4663 24.8827 27.6991 25.4572 27.6991Z"
                    fill="#083553"
                  />
                  <path
                    d="M15.2713 39.2727H31.2633C32.4682 39.2727 33.4451 38.2958 33.4451 37.0909V35.9147C33.4451 35.4164 33.2745 34.9328 32.9616 34.5449L31.7651 33.0614C31.0793 32.2106 29.8696 31.9987 28.9349 32.5658L26.1103 34.2799L20.4608 30.009C19.5679 29.3343 18.3095 29.4441 17.5475 30.2635L13.6736 34.4285C13.298 34.8321 13.0894 35.363 13.0894 35.9144V37.0907C13.0894 38.2958 14.0663 39.2727 15.2713 39.2727Z"
                    fill="#083553"
                  />
                  <path
                    d="M24.7261 2.18185V4.3637V16.7269C24.7261 17.9319 25.703 18.9087 26.9079 18.9087H39.2716H41.4534C41.4543 18.9087 41.4552 18.9087 41.4563 18.9087C42.6425 18.9087 43.6052 17.9619 43.6353 16.7832C43.6357 16.7643 43.6382 16.746 43.6382 16.727C43.6382 16.2747 43.4987 15.8561 43.2632 15.5078C43.2629 15.5075 43.2627 15.5072 43.2624 15.5067C43.2252 15.4516 43.1852 15.3986 43.1433 15.3474C43.1398 15.3431 43.1366 15.3387 43.133 15.3347C43.0933 15.2869 43.051 15.2409 43.0075 15.1965C43.0007 15.1897 42.994 15.1827 42.9872 15.1759C42.9679 15.1571 42.9502 15.1366 42.9304 15.1184L28.4508 0.639008C28.4055 0.593633 28.3579 0.551258 28.3094 0.510571C28.2947 0.498383 28.2799 0.486852 28.2649 0.475039C28.2295 0.447008 28.1933 0.419727 28.1562 0.393758C28.1385 0.381383 28.1209 0.369008 28.1027 0.357289C28.0639 0.331789 28.024 0.307977 27.9837 0.284821C27.9681 0.275914 27.953 0.266352 27.9375 0.258102C27.8847 0.229696 27.8304 0.203821 27.775 0.179821C27.7534 0.170352 27.7309 0.162196 27.709 0.153477C27.6722 0.138946 27.6349 0.125071 27.5972 0.112602C27.5719 0.104352 27.5468 0.0961956 27.5215 0.0887894C27.479 0.0764144 27.436 0.0655394 27.3925 0.0556019C27.374 0.0513831 27.3557 0.0461331 27.3371 0.0424769C27.2762 0.0302894 27.2142 0.0211019 27.1517 0.0142581C27.1329 0.0121018 27.1142 0.0108831 27.0952 0.00928935C27.044 0.0048831 26.9923 0.00216435 26.9401 0.00141435C26.6483 -0.0029919 26.3536 0.0496956 26.0732 0.165758C25.2577 0.503727 24.7261 1.29938 24.7261 2.18185Z"
                    fill="#C6C5CA"
                  />
                </svg>

                {isDownloadingImg ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <span className="text-lg font-semibold text-main-two underline">
                    Image
                  </span>
                )}
              </button>
              <button
                disabled={isLoading}
                onClick={handleDownloadPDF}
                className={twMerge(
                  "space-y-2",
                  `${isLoading && "cursor-not-allowed opacity-70"}`,
                )}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.54415 48H41.4533C42.6582 48 43.6351 47.0231 43.6351 45.8182V16.7831C43.605 17.9618 42.6424 18.9086 41.4562 18.9086C41.4551 18.9086 41.4541 18.9086 41.4533 18.9086H39.2714H26.9078C25.7028 18.9086 24.7259 17.9318 24.7259 16.7268V4.36359V2.18184C24.7259 1.29938 25.2574 0.503719 26.0728 0.166125C26.3532 0.0500625 26.648 -0.00271875 26.9397 0.00178125C26.929 0.0015 26.9186 0 26.9078 0H6.54415C5.33918 0 4.3623 0.976875 4.3623 2.18184V45.8182C4.3623 47.0231 5.33918 48 6.54415 48ZM23.9144 23.9754C24.3203 23.5682 24.8831 23.3354 25.4576 23.3354C26.0306 23.3354 26.5937 23.5681 26.9996 23.9754C27.4068 24.3813 27.6394 24.9442 27.6394 25.5172C27.6394 26.0917 27.4067 26.6547 26.9996 27.0606C26.5937 27.4664 26.0322 27.6991 25.4576 27.6991C24.8831 27.6991 24.3203 27.4664 23.9144 27.0606C23.5086 26.6547 23.2757 26.0932 23.2757 25.5172C23.2757 24.9426 23.5086 24.3813 23.9144 23.9754ZM13.0896 35.9146C13.0896 35.3633 13.2983 34.8324 13.6738 34.4287L17.5478 30.2637C18.3098 29.4442 19.5683 29.3344 20.4611 30.0092L26.1105 34.2801L28.9351 32.566C29.8698 31.9989 31.0796 32.211 31.7653 33.0616L32.9619 34.5451C33.2747 34.933 33.4453 35.4164 33.4453 35.9149V37.0911C33.4453 38.296 32.4685 39.2729 31.2635 39.2729H15.2714C14.0665 39.2729 13.0896 38.296 13.0896 37.0911V35.9146Z"
                    fill="#E0E0E2"
                  />
                  <rect
                    width="26.3743"
                    height="25.4821"
                    transform="translate(11 19)"
                    fill="#E0E0E2"
                  />
                  <path
                    d="M33.1681 33.4645C32.1839 33.4053 29.8178 33.5454 27.4481 33.9957C26.0774 32.6083 24.8904 30.8605 24.0098 29.4191C26.8315 21.306 25.0445 19 22.6391 19C20.7502 19 19.807 20.9935 20.0169 23.1959C20.1231 24.3046 21.062 26.6342 22.2177 28.847C21.5087 30.7117 20.2434 33.8634 18.9875 36.1442C17.5174 36.5909 16.2565 37.0873 15.3516 37.5061C10.844 39.6024 10.4817 42.4014 11.4197 43.5875C13.2006 45.8405 16.995 43.8966 20.8024 37.0873C23.409 36.3461 26.8385 35.3586 27.1477 35.3586C27.1833 35.3586 27.2322 35.3699 27.2888 35.3882C29.1889 37.0637 31.4332 38.9823 33.2803 39.2349C35.9531 39.6024 37.4746 37.6639 37.3691 36.4585C37.2646 35.2524 36.56 33.6681 33.1681 33.4645ZM16.2948 40.8093C15.1931 42.1192 13.4113 43.3757 12.7825 42.9578C12.1528 42.539 12.0483 41.3336 13.4644 39.9699C14.8795 38.6078 17.2484 37.9007 17.6045 37.7683C18.0252 37.6116 18.1297 37.7683 18.1297 37.9782C18.1297 38.188 17.3956 39.4978 16.2948 40.8093ZM21.1185 23.195C21.0131 21.8834 21.2743 20.626 22.376 20.4692C23.4759 20.3107 24.0012 21.5691 23.5821 23.6131C23.1623 25.6596 22.9516 27.0209 22.7426 27.1803C22.5328 27.3371 22.3246 26.8118 22.3246 26.8118C21.9041 25.9722 21.223 24.5048 21.1185 23.195ZM21.5382 35.5144C22.1139 34.5694 23.5822 30.7446 23.5822 30.7446C23.8966 31.3219 26.3595 34.2551 26.3595 34.2551C26.3595 34.2551 22.5851 35.0956 21.5382 35.5144ZM32.9633 37.19C31.3914 36.9828 28.7187 35.0929 28.7187 35.0929C28.3521 34.9362 31.6474 34.4886 32.9128 34.5695C34.5388 34.675 35.1152 35.3568 35.1152 36.0379C35.1152 36.7197 34.5388 37.4 32.9633 37.19Z"
                    fill="#083553"
                  />
                  <path
                    d="M24.7261 2.18185V4.3637V16.7269C24.7261 17.9319 25.703 18.9087 26.9079 18.9087H39.2716H41.4534H41.4563C42.6425 18.9087 43.6052 17.9619 43.6353 16.7832C43.6357 16.7643 43.6382 16.746 43.6382 16.727C43.6382 16.2747 43.4987 15.8561 43.2632 15.5078L43.2624 15.5067C43.2252 15.4516 43.1852 15.3986 43.1433 15.3474C43.1398 15.3431 43.1366 15.3387 43.133 15.3347C43.0933 15.2869 43.051 15.2409 43.0075 15.1965C43.0007 15.1897 42.994 15.1827 42.9872 15.1759C42.968 15.1571 42.9502 15.1366 42.9304 15.1184L28.4508 0.639008C28.4055 0.593633 28.3579 0.551258 28.3094 0.510571C28.2947 0.498383 28.2799 0.486852 28.2649 0.475039C28.2295 0.447008 28.1933 0.419727 28.1562 0.393758C28.1385 0.381383 28.1209 0.369008 28.1027 0.357289C28.0639 0.331789 28.024 0.307977 27.9837 0.284821C27.9681 0.275914 27.953 0.266352 27.9375 0.258102C27.8847 0.229696 27.8304 0.203821 27.775 0.179821C27.7534 0.170352 27.7309 0.162196 27.709 0.153477C27.6722 0.138946 27.6349 0.125071 27.5972 0.112602C27.5719 0.104352 27.5468 0.0961956 27.5215 0.0887894C27.479 0.0764144 27.436 0.0655394 27.3925 0.0556019C27.374 0.0513831 27.3557 0.0461331 27.3371 0.0424769C27.2762 0.0302894 27.2142 0.0211019 27.1517 0.0142581C27.1329 0.0121018 27.1142 0.0108831 27.0952 0.00928935C27.044 0.0048831 26.9923 0.00216435 26.9401 0.00141435C26.6483 -0.0029919 26.3536 0.0496956 26.0732 0.165758C25.2577 0.503727 24.7261 1.29938 24.7261 2.18185Z"
                    fill="#C6C5CA"
                  />
                </svg>

                {isDownloadingPdf ? (
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <span className="text-lg font-semibold text-main-two underline">
                    Pdf
                  </span>
                )}
              </button>
            </div>
          </div>
          <button
            className="form-shdw w-full rounded-[10px] border border-main-two py-2 text-lg font-semibold text-main-two duration-150 hover:border-transparent hover:bg-main-one hover:text-white"
            onClick={() => dispatch(prev())}
          >
            Faire un autre badge
          </button>
        </div>
      </div>
      <div
        id="badge"
        className="form-shdw absolute -left-[9999px] top-0 -z-10 h-[1123px] w-[794px] overflow-hidden rounded-[10px] bg-main-one"
      >
        <div className="relative h-[436px] w-full bg-main-white">
          <img
            src={biglogo}
            className="absolute left-1/2 top-3 z-10 w-[497px] -translate-x-1/2"
          />
          <img
            src={bigpattern}
            className="absolute h-full w-full object-cover"
          />
          <img src={biglines} className="absolute bottom-0 right-0 w-[637px]" />
        </div>
        <div className="">
          {image ? (
            <div
              style={{
                backgroundImage: `url(${imagePreview})`,
              }}
              className="absolute left-1/2 top-[275px]  block h-80 w-80 -translate-x-1/2 rounded-full border-4 border-main-white bg-cover bg-top"
            ></div>
          ) : (
            <div className="absolute left-1/2 top-[275px] block h-80 w-80 -translate-x-1/2  rounded-full border-4 border-main-white bg-main-bg">
              <span className="loader"></span>
            </div>
          )}

          <div className="flex flex-col items-center pt-[190px]">
            <h3 className="text-[41px] font-bold text-main-white">
              {nom.trim()} {prenom.trim()}
            </h3>
            <span className="text-[30px] font-semibold text-main-bg/90">
              Super Agent
            </span>
          </div>
          <div className="mx-[55px] mt-[70px] flex items-end justify-between gap-4 ">
            <div className="space-y-4">
              <div className="flex flex-col">
                <span className="text-[30px] font-semibold leading-none text-main-bg/90">
                  Code
                </span>
                <span className="text-[41px] font-bold text-main-white">
                  {code.trim()}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[30px] font-semibold leading-none text-main-bg/90">
                  Telephone
                </span>
                <span className="text-[41px] font-bold text-main-white">
                  {telephone.trim()}
                </span>
              </div>
            </div>
            <div className="flex h-[256px] w-[256px] items-center justify-center rounded-[10px] bg-main-white p-4">
              <QRCode
                value={`Nom: ${nom}\nPrenom: ${prenom}\nCode: ${code}\nTelephone: ${telephone}`}
                size={220}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Badge;
