import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classnames from "classnames/bind";
import styles from "./Login.module.scss";
import logo from "../../../../assets/img/digiBlackLogo.svg";
import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { authContext } from "../../../../context/authContext";
import { useNavigate, NavLink } from "react-router-dom";
const cb = classnames.bind(styles);
function Login() {
  const { loginUser } = useContext(authContext);

  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const onChangeLoginForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      const loginData = await loginUser(loginForm);

      if (loginData.success) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={cb("wrapper")}>
        <div className={cb("inner")}>
          <form className={cb("form")} onSubmit={login}>
            <div className={cb("logo")}>
              <a className={cb("logo-link")} href="/">
                <img
                  className={cb("logo-img")}
                  src={logo}
                  alt="logo-digiticket"
                />
              </a>
            </div>
            <div className={cb("controls")}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email hoặc số điện thoại"
                  aria-label="Email hoặc số điện thoại"
                  aria-describedby="basic-addon1"
                  name="username"
                  value={username}
                  onChange={onChangeLoginForm}
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Mật khẩu"
                  aria-label="Mật khẩu"
                  aria-describedby="basic-addon1"
                  name="password"
                  type="password"
                  value={password}
                  onChange={onChangeLoginForm}
                />
              </InputGroup>
              <div className="d-lg-flex">
                <Button
                  type="submit"
                  variant="warning"
                  className={cb("controls-button", "flex-grow-1")}
                >
                  Đăng Nhập
                </Button>
                <Button type="button" variant="warning" className="ml-3">
                  <NavLink to="/" className={cb("controls-button")}>
                    Trang Chủ
                  </NavLink>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
