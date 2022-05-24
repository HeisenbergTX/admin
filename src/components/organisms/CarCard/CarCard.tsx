import style from "./CarCard.module.css";
import { Car } from "../../molecules/Car/Car";
import { CarSetting } from "../../molecules/CarSetting/CarSetting";
import shape from "../../../icons/Shape.svg";
import { useState } from "react";

export const CarCard = () => {
  const [open, setOpen] = useState(true);

  const clickCLoseAlert = () => setOpen(false);

  return (
    <section className={style.section}>
      {open && (
        <div className={style.alertMessage}>
          <img src={shape} alt="shape" />
          <p className={style.message}>Успех! Машина сохранена</p>
          <button onClick={clickCLoseAlert} className={style.cross}>
            <span></span>
            <span></span>
          </button>
        </div>
      )}
      <h3 className={style.nameCard}>Карточка автомобиля</h3>
      <div className={style.content}>
        <article className={style.car}>
          <Car />
        </article>
        <article className={style.carSetting}>
          <CarSetting />
        </article>
      </div>
    </section>
  );
};
