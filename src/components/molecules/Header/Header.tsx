import { Avatar, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import cn from "classnames";
import { useCookies } from "react-cookie";

import style from "./Header.module.css";
import logo from "../../../images/Logo.svg";
import notifications from "../../../images/Notifications.svg";
import avatar from "../../../images/avatar.svg";
import { useDispatch } from "react-redux";
import { getTokens } from "../../../store/login/actions";
import { useState } from "react";
import { BurgerMenu } from "../../atoms/BurgerMenu/BurgerMenu";

export const Header = () => {
  const dispatch = useDispatch();
  const [openOptions, setOpenOptions] = useState(false);
  const [cookies, setCookies, removeCookies] = useCookies([
    "access_token",
    "refresh_token",
  ]);

  const clickLogout = () => {
    dispatch(getTokens(""));
    removeCookies("access_token", { path: "/" });
    removeCookies("refresh_token", { path: "/" });
    window.location.reload();
  };
  return (
    <header className={style.header}>
      <article className={style.burgerMenu}>
        <BurgerMenu />
      </article>
      <div className={style.inputSearch}>
        <IconButton size="small" type="submit" aria-label="search">
          <SearchIcon fontSize="small" />
        </IconButton>
        <InputBase placeholder="Поиск ..." />
      </div>
      <img
        className={style.notifications}
        src={notifications}
        alt="Notifications"
      />
      <div
        onClick={() => setOpenOptions(!openOptions)}
        className={style.userOptions}
      >
        <Avatar className={style.avatar} src={avatar} alt="Avatar" />
        <p className={style.nameUser}>Admin</p>
        <button
          onClick={clickLogout}
          className={cn(style.logout, { [style.active]: openOptions })}
        >
          Выйти
        </button>
      </div>
    </header>
  );
};
