import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import { CarColor } from "../../atoms/CarColor/CarColor";
import { GroupButton } from "../../atoms/GroupButton/GroupButton";
import style from "./CarSetting.module.css";
import cn from "classnames";

export const CarSetting = () => {
  const valueCar = useSelector(getChangeCarCard);

  const { register, handleSubmit, watch } = useForm();

  const nameCar = watch("nameCar");

  return (
    <section className={style.section}>
      <form onSubmit={handleSubmit((data) => data)} className={style.settings}>
        <h3 className={style.title}>Настройки автомобиля</h3>
        <div className={style.blockTextField}>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Модель автомобиля</p>
            <TextField
              className={style.textField}
              type="text"
              size="small"
              defaultValue={valueCar?.name || undefined}
              placeholder="Название автомобиля"
              {...register("nameCar")}
            />
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Тип автомобиля</p>
            <TextField
              className={style.textField}
              type="text"
              size="small"
              defaultValue={valueCar?.categoryId?.name || undefined}
              placeholder="Тип автомобиля"
            />
          </div>
          <div className={style.blockInput}>
            <article className={style.textField}>
              <CarColor />
            </article>
          </div>
        </div>
      </form>

      <div className={style.groupButton}>
        <GroupButton />
      </div>
    </section>
  );
};
