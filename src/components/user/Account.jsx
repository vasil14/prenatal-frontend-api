import React from "react";
import user from "../../assets/user.png";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <div className="w-[26px]">
      <Dropdown
        className="drop-shadow-lg w-[250px] flex justify-center"
        label={<img src={user} alt="user" className="w-[26px]" />}
        arrowIcon={false}
        inline={true}
        placement="auto"
      >
        <Dropdown.Item href="/login">
          <Link to="/login">
            <button className="bg-primary rounded-full w-[200px] h-[40px] mt-[8px] text-white text-[16px]">
              ACCEDI
            </button>
          </Link>
        </Dropdown.Item>

        <div className="flex flex-row mt-2 ml-2 mb-2">
          <p className="text-primary text-[13px] font-poppins mr-1">
            Nuovo su Prénatal?{" "}
          </p>
          <a
            className="underline text-primary text-[13px] font-poppins "
            href="/register"
          >
            Registrati qui
          </a>
        </div>
      </Dropdown>
    </div>
  );
};

export default Account;
