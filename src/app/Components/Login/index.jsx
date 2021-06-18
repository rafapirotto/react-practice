import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../routes';
import backgroundImage from './assets/background.png';
import fb from './assets/fb.png';
import { Footer } from '../';

const Login = () => {
  return (
    <div className="text-lg text-white font-extralight">
      <div className="h-screen bg-cover">
        {/* <img src={backgroundImage} className="w-screen" alt="background" /> */}
        <header className="flex pl-24 pr-10 py-20">
          <div className="movy text-4xl">
            <Link to={LOGIN_ROUTE}>Movy</Link>
          </div>
          <div className="flex flex-grow justify-end">
            <div className="mr-4">
              <Link to={LOGIN_ROUTE}>Register</Link>
            </div>
            <Link to={LOGIN_ROUTE}>
              <div className="text-center rounded-md w-24 h-8 bg-blue-500">Login</div>
            </Link>
          </div>
        </header>
        <main className="flex justify-center items-center">
          <div className="bg-black rounded-md bg-opacity-80 w-1/4 min-w-min px-12">
            <form>
              <div className="mt-10 text-center">
                <h1 className="text-4xl font-normal">Inicia sesión</h1>
              </div>
              <div className="mt-8 text-center">
                <div className="pb-4">
                  <input
                    type="email"
                    placeholder="Email o número de teléfono"
                    className="rounded-md h-14 w-96 p-6 text-black outline-none"
                    autoComplete="username"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Contraseña"
                    className="rounded-md h-14 w-96 p-6 text-black outline-none"
                    autoComplete="current-password"
                  />
                </div>
              </div>
              <div className="text-center mt-14">
                <Link to={LOGIN_ROUTE}>
                  <input
                    type="submit"
                    value="Iniciar sesión"
                    className="rounded-md bg-blue-500 h-14 w-96 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <input type="checkbox" />
                  <span className="ml-6 font-normal">
                    <Link to={LOGIN_ROUTE}>Recuérdame</Link>
                  </span>
                </div>
                <div className="font-normal">
                  <Link to={LOGIN_ROUTE}>Necesitas ayuda?</Link>
                </div>
              </div>
              <div className="flex mt-10 justify-center items-center">
                <img src={fb} alt="fb" className="h-4 w-4" />
                <span className="ml-4 font-normal">
                  <Link to={LOGIN_ROUTE}>Iniciar sesión con Facebook</Link>
                </span>
              </div>
              <div className="flex justify-center mt-10 pb-6">
                <span className="font-normal">¿Primera vez en Moovy?</span>
                <span className="font-semibold ml-1">
                  <Link to={LOGIN_ROUTE}>Suscríbete ya.</Link>
                </span>
              </div>
            </form>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
