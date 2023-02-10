import React, { useRef, useContext, useState, useEffect } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import logo from "../../assets/prenatal.png";
import ProductContext from "../../Context/ProductContext";
import axiosClient from "../../axios-client";
import InputFieldComponent from "./InputFieldComponent";

const Login = () => {
  const { setUser, setToken } = useContext(ProductContext);

  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(null);
  const [getErrors, setErrors] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("ACCESS_TOKEN");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
    setTimeout(() => {
      setErrors(false);
    }, 3000);
  }, [getErrors]);

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        navigate("/");
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 401) {
          setErrors(response.data.message);
        }
      });
  };
  if (authenticated) {
    return <Navigate replace to="/" />;
  } else {
    return (
      <>
        <div className="relative flex flex-col justify-items-center-center overflow-hidden align-middle">
          {getErrors && (
            <div className="mx-auto  px-20 py-3 rounded- bg-primary">
              <h1>{getErrors}</h1>
            </div>
          )}
          <Link to="/">
            <img className="w-50 mt-20 mb-5 mx-auto " src={logo} alt="logo" />
          </Link>
          <div className=" bg-white w-[450px] px-8 pt-10 pb-3 rounded-md mx-auto drop-shadow-xl mb-5">
            <h1 className="text-3xl font-poppins ">Effettua il login</h1>
            <form onSubmit={onSubmit} className="mt-6">
              <InputFieldComponent
                refProp={emailRef}
                tyep={"email"}
                placeholder={"Email"}
              />
              <InputFieldComponent
                refProp={passwordRef}
                tyep={"password"}
                placeholder={"Password"}
              />
              <a
                href="#"
                className="flex mt-5 text-xs font-bold underline justify-end"
              >
                Password dimenticata?
              </a>
              <div className="mt-10">
                <button className="w-full h-[46px] px-4 py-2 tracking-wide text-sm text-white font-bold transition-colors duration-150 transform bg-primary rounded-md hover:bg-white hover:border hover:border-primary hover:text-primary focus:outline-none focus:bg-purple-600">
                  ACCEDI
                </button>
              </div>

              <p className="flex justify-center text-[13px] mt-10">
                Dichiaro di aver letto ed accettato l'
                <a className="underline text-primary" href="">
                  Informativa sui dati personali
                </a>
              </p>
              <p className="flex justify-center text-[13px] mt-12">
                Non hai un account?
              </p>
              <Link to="/register">
                <p className="flex justify-center text-primary text-sm font-poppins font-medium mt-2">
                  REGISTRATI
                </p>
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
};

export default Login;
