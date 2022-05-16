import style from "./Car.module.css";
import car from "../../../images/car.svg";
import { FileLoader } from "../../atoms/FileLoader/FileLoader";
import { Range } from "../../atoms/Range/Range";
import { Description } from "../../atoms/Description/Description";

export const Car = () => {
  return (
    <section className={style.section}>
      <img className={style.imgCar} src={car} alt="car" />
      <p className={style.modelCar}>Hyndai, i30 N</p>
      <p className={style.typeCar}>Компакт-кар</p>
      <article className={style.fileLoader}>
        <FileLoader />
      </article>
      <article className={style.range}>
        <Range />
      </article>
      <article className={style.description}>
        <Description />
      </article>
    </section>
  );
};
