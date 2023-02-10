import React, { useContext } from "react";
import user from "../../assets/user.png";
import { Dropdown } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import ProductContext from "../../Context/ProductContext";

const Account = () => {
  const { token, setToken } = useContext(ProductContext);
  const navigate = useNavigate();
  const logOutHandle = () => {
    setToken(null);
    navigate("/");
  };
  return (
    <div className="w-[26px]">
      <Dropdown
        className="drop-shadow-lg w-[250px] flex justify-center"
        label={<img src={user} alt="user" className="w-[26px]" />}
        arrowIcon={false}
        inline={true}
        placement="auto"
      >
        {token ? (
          <>
            <Dropdown.Item>
              <button
                className="bg-primary rounded-full w-[200px] h-[40px] mt-[8px] text-white text-[16px]"
                onClick={logOutHandle}
              >
                LOG OUT
              </button>
            </Dropdown.Item>
          </>
        ) : (
          <>
            <Dropdown.Item>
              <Link to="/login">
                <button
                  className="bg-primary rounded-full w-[200px] h-[40px] mt-[8px] text-white text-[16px] "
                  onClick={logOutHandle}
                >
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
          </>
        )}
      </Dropdown>
    </div>
  );
};

export default Account;
