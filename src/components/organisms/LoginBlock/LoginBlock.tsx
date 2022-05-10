import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";
import cn from "classnames";
import logo from "../../../images/Logo.svg";
import style from "./LoginBlock.module.css";

export const LoginBlock = () => {
  const { register, handleSubmit, watch } = useForm();

  const CustomButton = styled(Button)({
    backgroundColor: "#007BFF",
    color: "var(--white-color)",
    width: "110px",
    heigt: "30px",
    borderRadius: "5px",
    border: "1px solid #007BFF",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
  });

  const clickAccessHelp = () => alert("username: intern\npassword: intern-S!");

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
            autoComplete="off"
            placeholder="Введите email"
            size="small"
            className={style.textField}
            {...register("email")}
          />
          <p className={cn(style.text, style.textPassword)}>Пароль</p>
          <TextField
            type={"password"}
            autoComplete="off"
            placeholder="Введите пароль"
            size="small"
            className={style.textField}
            {...register("password")}
          />
          <div className={style.submitBlock}>
            <p onClick={clickAccessHelp} className={style.accessHelp}>
              Запросить доступ
            </p>
            <CustomButton size="small">Войти</CustomButton>
          </div>
        </form>
      </div>
    </section>
  );
};
