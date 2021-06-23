import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LOGIN_ROUTE } from '../../routes';
import fb from './assets/fb.png';
import { login } from '../../Containers/LoginContainer/duck/operations';
import { Error, Spinner } from '../../../common/Components';
import { LOADING, ERROR } from '../../../common/constants';
import { DASHBOARD_ROUTE } from '../../routes';
import styles from './styles/Login.module.css';
import { isAuthenticated } from '../../utils';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { state } = useSelector((state) => state.login);

  useEffect(() => {
    if (isAuthenticated()) {
      props.history.push(DASHBOARD_ROUTE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div>
      <div
        className={`flex justify-center items-center bg-cover p-44 h-screen ${styles.background}`}
      >
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="rounded-md h-14 w-96 p-6 text-black outline-none"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-14">
              <Link to={LOGIN_ROUTE}>
                <button
                  className="rounded-md bg-blue-500 h-14 w-96 cursor-pointer"
                  onClick={() => dispatch(login(email, password))}
                >
                  Iniciar sesión
                </button>
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
            <div>{state === LOADING && <Spinner />}</div>
            <div>{state === ERROR && <Error />}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
