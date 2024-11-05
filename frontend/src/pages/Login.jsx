import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body row p-5">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://frontend-chat-ru.hexlet.app/assets/avatar-DIE1AEpS.jpg" className="rounded-circle" alt="Войти" />
            </div>
            <LoginForm />
          </div>
          <div className="card-footer p-4">
            <div className="text-center"><span>Нет аккаунта?</span> <a href="/signup">Регистрация</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;