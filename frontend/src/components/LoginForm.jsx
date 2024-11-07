import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { login } from '../features/thunks/login';
import { checkToken } from '../features/utils/loginHelper';
import Spinner from 'react-bootstrap/Spinner';

const LoginForm = () => {
  const { token, loading, error } = useSelector((state) => state.login);
  const localStorageToken = checkToken('token')
  const dispatch = useDispatch();

  if (loading) return <Spinner />;
  if (error) return <p>Ошибка: {error}</p>;
  console.log(token)
  if (localStorageToken) {
    window.location.href = '/';
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ setSubmitting }) => {
        dispatch(login())
        setSubmitting(false);
      }}
    >
    {({ isSubmitting }) => (
      <Form className="col-12 col-md-6 mt-3 mt-md-0">
          <h1 className="text-center mb-4">Войти</h1>
          
          <div className="form-floating mb-3">
            <Field 
              name="username" 
              autoComplete="username" 
              placeholder="Ваш ник" 
              id="username" 
              className="form-control" 
            />
            <label htmlFor="username">Ваш ник</label>
            <ErrorMessage name="username" component="div" className="text-danger mt-1" />
          </div>

          <div className="form-floating mb-4">
            <Field 
              name="password" 
              type="password" 
              autoComplete="current-password" 
              placeholder="Пароль" 
              id="password" 
              className="form-control" 
            />
            <label htmlFor="password">Пароль</label>
            <ErrorMessage name="password" component="div" className="text-danger mt-1" />
          </div>

          <button type="submit" className="w-100 mb-3 btn btn-outline-primary" disabled={isSubmitting}>
            Войти
          </button>
        </Form>
      )}
    </Formik>
  )
};

export default LoginForm;