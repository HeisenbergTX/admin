import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import {
  TextField,
  Button,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import cn from "classnames";
import logo from "../../images/Logo.svg";
import style from "./Login.module.css";
import { getLogin, getPassword, postLogin } from "../../store/login/actions";
import { getLoginData } from "../../store/login/selectors";
import { useState } from "react";

export const CustomButton = styled(Button)({
  backgroundColor: "#007BFF",
  color: "var(--white-color)",
  width: "110px",
  height: "30px",
  borderRadius: "5px",
  border: "1px solid #007BFF",
  textTransform: "none",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    transform: "scale(0.95)",
  },
});

export const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const { register, handleSubmit, watch } = useForm();
  const dispatch = useDispatch();
  const loginData = useSelector(getLoginData);

  const onBlurLogin = () => {
    const login = watch("login");
    dispatch(getLogin(login));
  };

  const onBlurPassword = () => {
    const password = watch("password");
    dispatch(getPassword(password));
  };

  const clickPostLoginData = () => {
    if (loginData.password && loginData.username) {
      dispatch(postLogin(loginData));
    }
  };

  const clickAccessHelp = () => alert("username: intern\npassword: intern-S!");

  const handleClickShowPassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <section className={style.section}>
      <article className={style.logo}>
        <img className={style.icon} src={logo} alt="Logotype" />
        <p className={style.logoName}>Need for drive</p>
      </article>
      <div className={style.form}>
        <form onSubmit={handleSubmit((data) => data)}>
          <p className={style.title}>Вход</p>
          <p className={style.text}>Почта</p>
          <TextField
            type={"email"}
            placeholder="Введите email"
            size="small"
            className={style.textField}
            {...register("login")}
            onBlur={onBlurLogin}
          />
          <p className={cn(style.text, style.textPassword)}>Пароль</p>
          <OutlinedInput
            className={style.textField}
            autoComplete="off"
            size="small"
            type={passwordVisibility ? "text" : "password"}
            placeholder="Введите пароль"
            {...register("password")}
            onBlur={() => {
              onBlurPassword();
              setPasswordVisibility(false);
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div className={style.submitBlock}>
            <p onClick={clickAccessHelp} className={style.accessHelp}>
              Запросить доступ
            </p>
            <CustomButton onClick={clickPostLoginData} size="small">
              Войти
            </CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};
