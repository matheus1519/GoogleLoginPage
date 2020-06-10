import React, { useState, useEffect } from 'react';
import { MdError, MdKeyboardArrowDown } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import {
  Container,
  Loading,
  FooterActions,
  InputData,
  FooterOut,
  ContainerOut,
  FunctionalBox,
} from './styles';
import logo from '../../assets/google-logo.svg';
import api from '../../services/api';

function Login() {
  const [languages, setLanguages] = useState([]);
  const [personList, setPersonList] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [stepOne, setStepOne] = useState(false);
  const [message, setMessage] = useState('');
  const [passHidden, setPassHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      setPersonList(response.data);
    }
    loadUsers();
  }, []);

  useEffect(() => {
    async function loadLanguages() {
      const response = await api.get('languages');
      setLanguages(response.data);
    }
    loadLanguages();
  }, []);

  function handleNext() {
    const user = email.split('@')[0];
    const inputEmail = document.querySelector('#email');

    if (email === '') {
      setMessage('Digite um e-mail ou número de telefone');
      inputEmail.focus();
      return;
    }

    if (personList.find((person) => person.email === user) === undefined) {
      setMessage('Não foi possível encontrar sua Conta do Google');
      inputEmail.focus();
      return;
    }

    setMessage('');
    const person = personList.find((person) => person.email === user);
    setName(person.name);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStepOne(false);
    }, 2000);
    setTimeout(() => {
      document.querySelector('#password').focus();
    }, 2500);
  }

  function handleNextTwo() {
    const inputPassword = document.querySelector('#password');

    if (password === '') {
      setMessage('Digite uma senha');
      inputPassword.focus();
      return;
    }
    setMessage('');
  }

  function resetData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStepOne(true);
      document.querySelector('#email').focus();
      setName('');
      setPassword('');
      setMessage('');
    }, 1000);
  }

  function displayEmail() {
    const string = email;
    const exist = string.indexOf('@');
    if (exist < 0) {
      setEmail(email + '@gmail.com');
    }
    return email;
  }

  return (
    <ContainerOut>
      <Container>
        {loading && <Loading />}
        <img src={logo} alt="Google's logo" />
        <h1>
          <span>{stepOne ? 'Fazer login' : name}</span>
        </h1>
        <span>
          {stepOne ? (
            'Use sua Conta do Google'
          ) : (
            <div onClick={resetData}>
              <FaRegUserCircle size={20} />
              <small>{displayEmail()}</small>
              <MdKeyboardArrowDown size={20} />
            </div>
          )}
        </span>
        {stepOne ? (
          <FunctionalBox>
            <InputData error={message !== '' ? true : false}>
              <div>
                <input
                  type="text"
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label htmlFor="email">Email ou telefone</label>
              </div>
              {message && (
                <small>
                  <MdError size={16} />
                  {message}
                </small>
              )}
              <span>
                <a>Esqueceu seu e-mail?</a>
              </span>
            </InputData>
            <footer>
              <small>
                Não está no seu computador? Use o modo visitante para fazer
                login com privacidade. <a>Saiba mais</a>
              </small>
              <FooterActions>
                <button className="btn-secondary">Criar conta</button>
                <button className="btn-primary" onClick={handleNext}>
                  Próxima
                </button>
              </FooterActions>
            </footer>
          </FunctionalBox>
        ) : (
          <FunctionalBox>
            <InputData error={message !== '' ? true : false} password>
              <div>
                <input
                  type={passHidden ? 'password' : 'text'}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <label htmlFor="password">Senha</label>
                {passHidden ? (
                  <div>
                    <AiOutlineEye
                      onClick={() => setPassHidden(false)}
                      size={24}
                    />
                  </div>
                ) : (
                  <div>
                    <AiOutlineEyeInvisible
                      onClick={() => setPassHidden(true)}
                      size={24}
                    />
                  </div>
                )}
              </div>
              {message && (
                <small>
                  <MdError size={16} />
                  {message}
                </small>
              )}
            </InputData>
            <FooterActions>
              <button className="btn-secondary">Esqueceu a Senha?</button>
              <button className="btn-primary" onClick={handleNextTwo}>
                Próxima
              </button>
            </FooterActions>
          </FunctionalBox>
        )}
      </Container>
      <FooterOut>
        <select name="languages">
          {languages.map((language, index) => (
            <option key={index} value={index}>
              {language.name}
            </option>
          ))}
        </select>
        <nav>
          <ul>
            <li>
              <a>Ajuda</a>
            </li>
            <li>
              <a>Privacidade</a>
            </li>
            <li>
              <a>Termos</a>
            </li>
          </ul>
        </nav>
      </FooterOut>
    </ContainerOut>
  );
}

export default Login;
