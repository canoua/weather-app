import './scss/LoginPage.scss';

function LoginPage() {
  
  return(
    <div className="login-page">
      <h1 className="title">вход</h1>
      <form className="form" action="#">
        <div className="form-group">
          <label className="form-label" htmlFor="email">E-mail</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Пароль</label>
          <input className="form-control" type="text"/>
        </div>
        <div className="form-group">
          <button className="btn" type="submit">Войти</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;