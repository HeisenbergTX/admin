import style from "./SideBar.module.css";
import cn from "classnames";
import logo from "../../../images/Logo.svg";

import { ReactComponent as BlogInfo } from "../../../icons/blogIcon.svg";
import { ReactComponent as PostsIcon } from "../../../icons/postsIcon.svg";
import { ReactComponent as NewPostIcon } from "../../../icons/newPostIcon.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const SideBar = () => {
  return (
    <section className={style.section}>
      <article className={style.burgerMenu}>
        <BurgerMenu />
      </article>
      <article className={style.blockNameCompany}>
        <img className={style.image} src={logo} alt="logo" />
        <p className={style.title}>Need fro car</p>
      </article>
      <nav className={style.nav}>
        <div className={cn(style.item, style.active)}>
          <BlogInfo />
          <span className={style.text}>Карточка автомобиля</span>
        </div>
        <div className={cn(style.item, { [style.active]: false })}>
          <PostsIcon />
          <span className={style.text}>Список автомобилей</span>
        </div>
        <div className={style.item}>
          <NewPostIcon />
          <span className={style.text}>Список заказов</span>
        </div>
      </nav>
    </section>
  );
};
