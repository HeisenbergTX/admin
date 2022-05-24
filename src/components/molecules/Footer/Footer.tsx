import style from "./Footer.module.css";
import cn from "classnames";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.links}>
        <a className={cn(style.linkHomePage, style.link)} href="#">
          Главная страница
        </a>
        <a className={style.link} href="#">
          Ссылка
        </a>
      </div>
      <p className={style.copyright}>Copyright © 2020 Simbirsoft</p>
    </footer>
  );
};
