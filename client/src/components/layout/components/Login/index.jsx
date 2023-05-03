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
              <InputGroup
                className={cb("mb-3", "d-lg-flex", "controls-section")}
              >
                <Button
                  type="button"
                  variant="warning"
                  className={cb("controls-button", "flex-grow-1")}
                >
                  <NavLink to="/register" className={cb("controls-button")}>
                    Đăng Ký
                  </NavLink>
                </Button>
                <Button
                  type="button"
                  variant="warning"
                  className={cb("ml-3", "controls-button")}
                >
                  <NavLink to="/" className={cb("controls-button")}>
                    Trang Chủ
                  </NavLink>
                </Button>
              </InputGroup>
              <Button
                type="submit"
                variant="warning"
                className={cb("controls-button", "flex-grow-1")}
              >
                Đăng Nhập
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
