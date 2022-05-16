import React from "react";
import cn from "classnames";
import style from "./BurgerMenu.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getValueSideBar } from "../../../store/modalWindows/selectors";
import { openSideBar } from "../../../store/modalWindows/actions";

export const BurgerMenu = () => {
  const dispatch = useDispatch();
  const isOpenSideBar = useSelector(getValueSideBar);

  return (
    <button
      onClick={() => dispatch(openSideBar(!isOpenSideBar))}
      className={cn(style.burgerMenu, {
        [style.active]: isOpenSideBar,
      })}
    >
      <span className={cn(null, { [style.active]: isOpenSideBar })}></span>
      <span className={cn(null, { [style.active]: isOpenSideBar })}></span>
      <span className={cn(null, { [style.active]: isOpenSideBar })}></span>
    </button>
  );
};
