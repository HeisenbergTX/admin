import style from "./ButtonGroup.module.css";
import cn from "classnames";
import shape from "../../../icons/Shape.svg";
import cross from "../../../icons/Cross.svg";
import multipoint from "../../../icons/Multipoint.svg";

export const ButtonGroup = () => {
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
      <button className={style.button}>
        <img className={style.icon} src={multipoint} alt="" />
        Изменить
      </button>
    </section>
  );
};
