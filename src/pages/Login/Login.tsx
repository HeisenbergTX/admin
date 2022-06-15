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
import { postLogin } from "../../store/login/actions";
import { useState } from "react";
import { getError } from "../../store/login/selectors";

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
  const error = useSelector(getError);

  const username = watch("login");
  const password = watch("password");

  const clickPostLoginData = () => {
    if (username && password) {
      dispatch(postLogin({ username, password }));
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
          <p className={style.title}>
            <p>Вход</p>
            <p className={cn(style.none, { [style.error]: error?.code })}>
              {error?.code}
            </p>
          </p>

          <p className={style.text}>Почта</p>
          <TextField
            type={"email"}
            placeholder="Введите email"
            error={error?.status === 0}
            size="small"
            className={style.textField}
            {...register("login")}
          />
          <p className={cn(style.text, style.textPassword)}>Пароль</p>
          <OutlinedInput
            className={style.textField}
            autoComplete="off"
            size="small"
            error={error?.status === 0}
            type={passwordVisibility ? "text" : "password"}
            placeholder="Введите пароль"
            {...register("password")}
            onBlur={() => {
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
