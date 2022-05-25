import style from "./Car.module.css";
import { FileLoader } from "../../atoms/FileLoader/FileLoader";
import { Range } from "../../atoms/Range/Range";
import { Description } from "../../atoms/Description/Description";
import { useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";

export const Car = () => {
  const valueCar = useSelector(getChangeCarCard);

  return (
    <section className={style.section}>
      <img className={style.imgCar} src={valueCar?.thumbnail?.path} alt="car" />
      <p className={style.modelCar}>{valueCar?.name}</p>
      <p className={style.typeCar}>{valueCar?.categoryId?.name}</p>
      <article className={style.fileLoader}>
        <FileLoader />
      </article>
      <article className={style.range}>
        <Range tank={valueCar?.tank} />
      </article>
      <article className={style.description}>
        <Description description={valueCar?.description} />
      </article>
    </section>
  );
};
