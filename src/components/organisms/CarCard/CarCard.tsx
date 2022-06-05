import style from "./CarCard.module.css";
import { Car } from "../../molecules/Car/Car";
import { CarSetting } from "../../molecules/CarSetting/CarSetting";
import shape from "../../../icons/Shape.svg";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import { NavLink } from "react-router-dom";

export const CarCard = () => {
  const valueCar = useSelector(getChangeCarCard);
  const [open, setOpen] = useState(false);

  const clickCLoseAlert = () => setOpen(false);

  return (
    <section className={style.section}>
      {valueCar ? (
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
      ) : (
        <NavLink className={style.link} to="/admin/card/models">
          <button className={style.button}>Выберите авто</button>
        </NavLink>
      )}
    </section>
  );
};
