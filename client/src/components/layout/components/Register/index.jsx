import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import classnames from "classnames/bind";
import styles from "./Register.module.scss";
import logo from "../../../../assets/img/digiBlackLogo.svg";
import { Button } from "react-bootstrap";
const cb = classnames.bind(styles);
function Register() {
  return (
    <>
      <div className={cb("wrapper")}>
        <div className={cb("inner")}>
          <form className={cb("form")}>
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
                />
              </InputGroup>
              <InputGroup className="mb-3">
               
                <Form.Control
                  placeholder="Mật khẩu"
                  aria-label="Mật khẩu"
                  aria-describedby="basic-addon1"
                  type="password"
                />
              </InputGroup>
              <InputGroup className="mb-3">
               
                <Form.Control
                  placeholder="Nhập lại mật khẩu"
                  aria-label="Nhập lại mật khẩu"
                  aria-describedby="basic-addon1"
                  type="password"

                />
              </InputGroup>
              <Button variant="warning">Warning</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
