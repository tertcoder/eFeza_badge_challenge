import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function BadgeGenerator() {
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    phone: "",
    photo: null,
  });
  const [badgeUrl, setBadgeUrl] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "photo" ? files[0] : value,
    }));
  };

  const generateBadge = (e) => {
    e.preventDefault();
    // Generate badge
    html2canvas(document.getElementById("badgePreview")).then((canvas) => {
      const badgeUrl = canvas.toDataURL("image/png");
      setBadgeUrl(badgeUrl);
    });
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "badge.png";
    link.href = badgeUrl;
    link.click();
  };

  const downloadPDF = () => {
    const pdf = new jsPDF();
    pdf.addImage(badgeUrl, "PNG", 0, 0, 210, 297); // A4 size: 210x297 mm
    pdf.save("badge.pdf");
  };

  return (
    <div className="mx-auto max-w-md">
      <form onSubmit={generateBadge}>
        <div className="mb-4">
          <label htmlFor="name" className="mb-1 block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full rounded border px-3 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="code" className="mb-1 block">
            Code:
          </label>
          <input
            type="text"
            id="code"
            name="code"
            className="w-full rounded border px-3 py-2"
            value={formData.code}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="mb-1 block">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full rounded border px-3 py-2"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="mb-1 block">
            Photo:
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Generate Badge
        </button>
      </form>

      {badgeUrl && (
        <div className="mt-8">
          <div id="badgePreview" className="rounded border bg-white p-4">
            <img src={badgeUrl} alt="Badge" className="h-auto max-w-full" />
          </div>
          <div className="mt-4 flex justify-between">
            <button
              onClick={downloadImage}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Download Image
            </button>
            <button
              onClick={downloadPDF}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Download PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BadgeGenerator;
