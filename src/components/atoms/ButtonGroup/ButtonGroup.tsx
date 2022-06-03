import style from "./ButtonGroup.module.css";
import cn from "classnames";
import shape from "../../../icons/Shape.svg";
import cross from "../../../icons/Cross.svg";
import multipoint from "../../../icons/Multipoint.svg";
import { useDispatch } from "react-redux";
import { toggleOrderModal } from "../../../store/modalWindows/actions";

export const ButtonGroup = () => {
  const dispatch = useDispatch();

  const isOpenOrderModal = (e: any) => {
    e.preventDefault();
    dispatch(toggleOrderModal(true));
  };
  return (
    <section className={style.section}>
      <button className={style.button} disabled>
        <img className={style.icon} src={shape} alt="" />
        Готово
      </button>
      <button className={style.button} disabled>
        <img className={style.icon} src={cross} alt="" />
        Отмена
      </button>
      <button className={style.button} onClick={isOpenOrderModal}>
        <img className={style.icon} src={multipoint} alt="" />
        Изменить
      </button>
    </section>
  );
};
