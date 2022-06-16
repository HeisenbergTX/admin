import style from "./CarCard.module.css";
import { Car } from "../../molecules/Car/Car";
import { CarSetting } from "../../molecules/CarSetting/CarSetting";
import shape from "../../../icons/Shape.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import { NavLink } from "react-router-dom";
import { CustomButton } from "../../../pages/Login/Login";
import { useForm } from "react-hook-form";
import {
  chooseChangeCarCard,
  chooseDefaultCarCard,
} from "../../../store/carCard/actions";

export const CarCard = () => {
  const dispatch = useDispatch();
  const valueCar = useSelector(getChangeCarCard);
  const [open, setOpen] = useState(false);

  const clickCLoseAlert = () => setOpen(false);

  const newCar = () => {
    dispatch(chooseChangeCarCard(undefined));
    dispatch(chooseDefaultCarCard(undefined));
  };

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
      <header className={style.header}>
        <h3 className={style.nameCard}>Карточка автомобиля</h3>
        {!valueCar?.id ? (
          <NavLink className={style.link} to="/admin/card/models">
            <CustomButton style={{ width: "fit-content", fontSize: "14px" }}>
              Выбрать авто
            </CustomButton>
          </NavLink>
        ) : (
          <CustomButton
            onClick={newCar}
            style={{ width: "fit-content", fontSize: "14px" }}
          >
            Создать авто
          </CustomButton>
        )}
      </header>
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
