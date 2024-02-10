import AgentInfo from "../ui/AgentInfo";
import logo from "../assets/efeza.png";
import profile from "../assets/Me2.jpg";
import { Link } from "react-router-dom";

function Badge() {
  return (
    <>
      <Link className="absolute left-4 top-4" to="/">
        Back to Form
      </Link>
      <div className="shdw relative h-[563px] w-[994px] space-y-10 overflow-hidden rounded-[20px] bg-main-white px-[38px] py-[28px]">
        <img src={logo} />
        <div className="shdw absolute left-0 right-0 z-10 mx-[38px] flex h-[309] items-center justify-between rounded-[10px] border border-main-two bg-main-white p-8">
          <div className="space-y-2 ">
            <AgentInfo label="Nom & Prenom" value="TUYISHIMIRE Bon Tertius" />
            <AgentInfo label="Code Super Agent" value="36480234" />
            <AgentInfo label="Telephone" value="+257 65 849 761" />
          </div>
          <img
            src={profile}
            className="shdw h-60 w-64 rounded-[10px] border border-main-two object-cover"
          />
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
