import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/prenatal.png';

const Login = () => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <Link to="/">
        <img className="w-50 mt-20 mb-5 mx-auto " src={logo} alt="logo" />
      </Link>
      <div className=" bg-white w-[450px] px-8 pt-10 pb-3 rounded-md mx-auto">
        <h1 className="text-3xl font-poppins ">Sign in</h1>
        <form className="mt-6">
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 my-4 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <p className="flex justify-center text-[11px] mx-2 ">
            La password deve avere almeno 6 caratteri, con lettere maiuscole e
            minuscole e numeri.
          </p>
          <a
            href="#"
            className="flex mt-5 text-xs font-bold underline justify-end"
          >
            Password dimenticata?
          </a>
          <div className="mt-10">
            <button className="w-full h-[46px] px-4 py-2 tracking-wide text-sm text-white font-bold transition-colors duration-150 transform bg-[#e72b6f] rounded-md hover:bg-white hover:border hover:border-[#e72b6f] hover:text-[#e72b6f] focus:outline-none focus:bg-purple-600">
              ACCEDI
            </button>
          </div>

          <p className="flex justify-center text-[13px] mt-10">
            Dichiaro di aver letto ed accettato l'
            <a className="underline text-[#e72b6f]" href="">
              Informativa sui dati personali
            </a>
          </p>
          <p className="flex justify-center text-[13px] mt-12">
            Non hai un account?
          </p>
          <a
            className="flex justify-center text-[#e72b6f] text-sm font-poppins font-medium mt-2"
            href="/register"
          >
            REGISTRATI
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
