import React, { useRef, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/prenatal.png";
import axiosClient from "../../axios-client";
import RadioButton from "../RadioButton";
import ProductContext from "../../Context/ProductContext";

const Register = () => {
  const { setUser, setToken } = useContext(ProductContext);
  const [getGender, setGender] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();
  const nameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    const date =
      startDate.getFullYear() +
      "/" +
      (startDate.getMonth() + 1) +
      "/" +
      startDate.getDate();

    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      lastName: lastNameRef.current.value,
      gender: getGender,
      birthday: date,
    };

    axiosClient
      .post("/register", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate("/");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <Link to="/">
        <img className="w-50 mt-20 mb-5 mx-auto " src={logo} alt="logo" />
      </Link>
      <div className=" bg-white w-[450px] px-8 pt-10 pb-3 rounded-md mx-auto drop-shadow-lg mb-5">
        <h1 className="text-3xl font-poppins ">Registrati</h1>
        <form onSubmit={onSubmit} className="mt-6">
          <div className="mb-2">
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 my-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="flex justify-center text-[11px] mx-2 ">
            La password deve avere almeno 8 caratteri, con lettere maiuscole e
            minuscole e numeri.
          </p>
          <div className="grid grid-cols-2 gap-5">
            <div className=" mb-2">
              <input
                ref={nameRef}
                type="text"
                placeholder="Nome"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <input
                ref={lastNameRef}
                type="text"
                placeholder="Cognome"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <DatePicker
            className="w-full rounded-md mt-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <div className="flex flex-row justify-between mt-5">
            <h1>Sesso</h1>
            <div className="flex flex-row ">
              <div className="form-check flex justify-items-center ml-4">
                <input
                  className="form-check-input rounded-full h-[17px] w-[17px] appearance-none  bg-white checked:border-none checked:bg-secondary focus:outline-none transition duration-200 bg-repeat cursor-pointer mr-[10px]"
                  type="radio"
                  name="sesso"
                  value="Femmina"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label inline-block font-poppins font-normal text-[15px] text-primary">
                  Femmina
                </label>
              </div>
              <div className="form-check flex justify-items-center ml-4">
                <input
                  className="form-check-input rounded-full h-[17px] w-[17px] appearance-none  bg-white checked:border-none checked:bg-secondary focus:outline-none transition duration-200 bg-repeat cursor-pointer mr-[10px]"
                  type="radio"
                  name="sesso"
                  value="Maschio"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label inline-block font-poppins font-normal text-[15px] text-primary">
                  Maschio
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-row form-check mt-12  ">
            <input
              className="form-check-input h-[17px] w-[17px] rounded-[4px] border-[#404040] transition duration-200 my-auto mr-[32px] cursor-pointer"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label
              className="form-check-label inline-block font-poppins text-[15px]"
              htmlFor="flexCheckDefault"
            >
              Dichiaro di aver letto ed accettato{" "}
              <a href="#" className="text-primary">
                l’informativa sui dati personali
              </a>{" "}
              e di aver preso visione ed accettato il{" "}
              <a href="#" className="text-primary">
                Regolamento della Prenatal Card
              </a>{" "}
              o il{" "}
              <a href="#" className="text-primary">
                Regolamento della Prenatal VIP Card
              </a>
              . *
            </label>
          </div>
          <div className="mt-10">
            <button className="w-full h-[46px] px-4 py-2 tracking-wide text-sm text-white font-bold transition-colors duration-150 transform bg-primary rounded-md hover:bg-white hover:border hover:border-primary hover:text-primary focus:outline-none focus:bg-purple-600">
              REGISTRATI
            </button>
          </div>

          <p className="flex justify-center text-[13px] mt-12">
            Hai gia un account?
          </p>
          <Link to={"/login"} replace>
            <button className="flex mx-auto text-primary text-sm font-poppins font-medium mt-2 mb-3">
              ACCEDI
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
