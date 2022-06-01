import style from "./SideBar.module.css";
import cn from "classnames";
import logo from "../../../images/Logo.svg";

import { ReactComponent as BlogInfo } from "../../../icons/blogIcon.svg";
import { ReactComponent as PostsIcon } from "../../../icons/postsIcon.svg";
import { ReactComponent as NewPostIcon } from "../../../icons/newPostIcon.svg";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openSideBar } from "../../../store/modalWindows/actions";

export const SideBar = () => {
  const dispatch = useDispatch();

  const clickNavLink = () => dispatch(openSideBar(false));

  return (
    <aside className={style.section}>
      <article className={style.burgerMenu}>
        <BurgerMenu />
      </article>
      <article className={style.blockNameCompany}>
        <img className={style.image} src={logo} alt="logo" />
        <p className={style.title}>Need fro car</p>
      </article>
      <NavLink
        onClick={clickNavLink}
        to={"admin/card/models"}
        className={style.item}
      >
        <PostsIcon />
        <span className={style.text}>Список автомобилей</span>
      </NavLink>
      <NavLink
        onClick={clickNavLink}
        to={"admin/card/car"}
        className={style.item}
      >
        <BlogInfo />
        <span className={style.text}>Карточка автомобиля</span>
      </NavLink>
      <NavLink
        onClick={clickNavLink}
        to={"admin/card/orders"}
        className={style.item}
      >
        <NewPostIcon />
        <span className={style.text}>Список заказов</span>
      </NavLink>
      <NavLink
        onClick={clickNavLink}
        to={"admin/card/rates"}
        className={style.item}
      >
        <PostsIcon />
        <span className={style.text}>Список тарифов</span>
      </NavLink>
    </aside>
  );
};
