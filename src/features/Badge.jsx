import AgentInfo from "../ui/AgentInfo";
import logo from "../assets/efeza.png";
import profile from "../assets/Me2.jpg";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import imageToPreview from "../utils/func";

function Badge({ data, image }) {
  const { nom, prenom, telephone, code } = data;
  const [imagePreview, setImagePreview] = useState(null);

  // useEffect(() => {
  //   if (image) return;

  //   const fileReader = new FileReader();
  //   fileReader.readAsDataURL(image);
  //   fileReader.onloadend = () => {
  //     setImagePreview(fileReader.result);
  //   };
  // }, [image]);
  useEffect(() => {
    async function getImagePreview() {
      const imageData = await imageToPreview(image);
      console.log(imageData);
      setImagePreview(imageData);
    }
    getImagePreview();
  }, [image]);

  async function handleImageDownload() {
    const badgeElement = document.getElementById("badge");
    const canvas = await html2canvas(badgeElement);
    const data = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.href = data;
    link.download = `${nom.trim()}-badge.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  async function handleDownloadPDF() {
    const badgeElement = document.getElementById("badge");
    const canvas = await html2canvas(badgeElement);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    // pdf.addImage(imgData, "PNG", 0, 0, , , , , 90);
    pdf.addImage({
      imageData: imgData,
      format: "PNG",
      x: 0,
      y: 0,
    });
    pdf.save(`${nom.trim()}-badge.pdf`);
  }
  return (
    <>
      <Link className="absolute left-4 top-4" to="/">
        Back to Form
      </Link>
      <button
        type="button"
        onClick={handleImageDownload}
        className="absolute right-4 top-4"
      >
        Download Image
      </button>
      <button
        type="button"
        onClick={handleDownloadPDF}
        className="absolute right-4 top-10"
      >
        Download PDF
      </button>
      <div
        id="badge"
        className="shdw  relative h-[563px] w-[994px] space-y-10 overflow-hidden rounded-[20px] bg-main-white px-[38px] py-[28px]"
      >
        <img src={logo} />
        <div className="shdw absolute left-0 right-0 z-10 mx-[38px] flex h-[309] items-center justify-between rounded-[10px] border border-main-two bg-main-white p-8">
          <div className="space-y-2 ">
            <AgentInfo label="Nom & Prenom" value={`${nom} ${prenom}`} />
            <AgentInfo label="Code Super Agent" value={code} />
            <AgentInfo label="Telephone" value={telephone} />
          </div>
          <div className=" h-60 w-56 rounded-[10px] border border-main-two">
            {imagePreview ? (
              <img
                src={imagePreview}
                className="h-full w-full  rounded-[10px] object-fill"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-[10px]  bg-main-white">
                <span className="loader"></span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 right-0 z-0">
          <svg
            width="994"
            height="535"
            viewBox="0 0 994 535"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="15"
              y="545.446"
              width="1226.15"
              height="140"
              transform="rotate(-19.1607 15 545.446)"
              fill="#409FD9"
            />
            <rect
              x="230"
              y="646.446"
              width="1226.15"
              height="140"
              transform="rotate(-19.1607 230 646.446)"
              fill="#146698"
            />
            <rect
              x="-76"
              y="402.446"
              width="1226.15"
              height="140"
              transform="rotate(-19.1607 -76 402.446)"
              fill="#1C81C5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Badge;
