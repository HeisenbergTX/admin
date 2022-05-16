import style from "./CarCard.module.css";
import { Car } from "../../molecules/Car/Car";
import { CarSetting } from "../../molecules/CarSetting/CarSetting";

export const CarCard = () => {
  return (
    <section className={style.section}>
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
