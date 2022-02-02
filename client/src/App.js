import React from 'react';
import './App.css';
import Axios from 'axios';
import {Formik, Form, Field, ErrorMessage}from "formik";
import * as yup from "yup";
function App() {
  
  const handleClickRegister= (values) => {
    Axios.post("http://localhost:3001/register", {
      email:values.email,
      password: values.password
    }).then((response) => {
      alert(response.data.msg)
    })
  }



  const handleClickLogin= (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg)
    })
  }
  

  const validationLogin = yup.object().shape({
    email: yup.string().email("Insira um email válido!").required("Este campo é obrigatório!"),
    password:yup.string().min(6, "A senha deve ter no mínimo 6 caracteres!").required("Este campo é obrigatório!"),
  });
  const validationRegister = yup.object().shape({
    email: yup.string().email("Insira um email válido!").required("Este campo é obrigatório!"),
    password:yup.string().min(6, "A senha deve ter no mínimo 6 caracteres!").required("Este campo é obrigatório!"),
    confirmPassword:yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais.").required("Este campo é obrigatório!")
  });

  

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik initialValues={{}}
      onSubmit={handleClickLogin}
      validationSchema={validationLogin}
      >
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name="email" className="form-field" placeholder="Email"/>
            <ErrorMessage component="span"
            name="email"
            className="form-error"
            />
          </div>
          <div className='login-form-group'>
            <Field name="password" type="password" className="form-field" placeholder="Senha"/>
            <ErrorMessage component="span"
            name="password"
            className="form-error"
            />
          </div>
          <button className="button" type="submit">Login</button>
        </Form>
      </Formik>
      {/* ////////////////////////////////////////////////////////////////////////// */}
      <h1>Cadastro</h1>
      <Formik initialValues={{}}
      onSubmit={handleClickRegister}
      validationSchema={validationRegister}
      >
        <Form className='login-form'>
          <div className='login-form-group'>
            <Field name="email" className="form-field" placeholder="Email"/>
            <ErrorMessage component="span"
            name="email"
            className="form-error"
            />
          </div>
          <div className='login-form-group'>
            <Field name="password" type="password" className="form-field" placeholder="Senha"/>
            <ErrorMessage component="span"
            name="password"
            className="form-error"
            />
          </div>
          <div className='login-form-group'>
            <Field name="confirmPassword" type="password" className="form-field" placeholder="Confirme sua senha"/>
            <ErrorMessage component="span"
            name="confirmPassword"
            className="form-error"
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
