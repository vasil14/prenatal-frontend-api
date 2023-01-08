import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';
import logo from '../assets/prenatal.png';
import RadioButton from './RadioButton';

const Register = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <Link to="/">
        <img className="w-50 mt-20 mb-5 mx-auto " src={logo} alt="logo" />
      </Link>
      <div className=" bg-white w-[450px] px-8 pt-10 pb-3 rounded-md mx-auto">
        <h1 className="text-3xl font-poppins ">Registrati</h1>
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
          <div className="grid grid-cols-2 gap-5">
            <div className=" mb-2">
              <input
                type="text"
                placeholder="Nome"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                placeholder="Cognome"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <DatePicker
            placeholderText="sjkdfh"
            className="w-full rounded-md mt-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <div className="flex flex-row justify-between mt-5">
            <h1>Sesso</h1>
            <div className="flex flex-row ">
              <RadioButton descritpion="Femmina" id="sesso" />
              <RadioButton descritpion="Maschio" id="sesso" />
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
              Dichiaro di aver letto ed accettato{' '}
              <a href="" className="text-[#e72b6f]">
                l’informativa sui dati personali
              </a>{' '}
              e di aver preso visione ed accettato il{' '}
              <a href="" className="text-[#e72b6f]">
                Regolamento della Prenatal Card
              </a>{' '}
              o il{' '}
              <a href="" className="text-[#e72b6f]">
                Regolamento della Prenatal VIP Card
              </a>
              . *
            </label>
          </div>
          <div className="mt-10">
            <button className="w-full h-[46px] px-4 py-2 tracking-wide text-sm text-white font-bold transition-colors duration-150 transform bg-[#e72b6f] rounded-md hover:bg-white hover:border hover:border-[#e72b6f] hover:text-[#e72b6f] focus:outline-none focus:bg-purple-600">
              REGISTRATI
            </button>
          </div>

          <p className="flex justify-center text-[13px] mt-12">
            Hai gia un account?
          </p>
          <a
            className="flex justify-center text-[#e72b6f] text-sm font-poppins font-medium mt-2 mb-3"
            href="/login"
          >
            ACCEDI
          </a>
        </form>
      </div>
    </div>
  );
};

export default Register;
