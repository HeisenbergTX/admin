import style from "./Car.module.css";
import { FileLoader } from "../../atoms/FileLoader/FileLoader";
import { Range } from "../../atoms/Range/Range";
import { Description } from "../../atoms/Description/Description";
import { useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";

export const Car = () => {
  const changeCar = useSelector(getChangeCarCard);

  return (
    <form className={style.section}>
      <img
        className={style.imgCar}
        src={changeCar?.thumbnail?.path}
        alt="car"
      />
      <p className={style.modelCar}>{changeCar?.name}</p>
      <p className={style.typeCar}>{changeCar?.categoryId?.name}</p>
      <article className={style.fileLoader}>
        <FileLoader />
      </article>
      <article className={style.range}>
        <Range tank={changeCar?.tank} />
      </article>
      <article className={style.description}>
        <Description />
      </article>
    </form>
  );
};
