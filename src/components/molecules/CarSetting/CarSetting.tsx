import { TextField } from "@mui/material";
import { CarColor } from "../../atoms/CarColor/CarColor";
import { GroupButton } from "../../atoms/GroupButton/GroupButton";
import style from "./CarSetting.module.css";

export const CarSetting = () => {
  return (
    <section className={style.section}>
      <div className={style.settings}>
        <h3 className={style.title}>Настройки автомобиля</h3>
        <div className={style.blockTextField}>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Модель автомобиля</p>
            <TextField
              className={style.textField}
              type="text"
              size="small"
              placeholder="Название автомобиля"
            />
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Тип автомобиля</p>
            <TextField
              className={style.textField}
              type="text"
              size="small"
              placeholder="Тип автомобиля"
            />
          </div>
          <div className={style.blockInput}>
            <article className={style.textField}>
              <CarColor />
            </article>
          </div>
        </div>
      </div>

      <div className={style.groupButton}>
        <GroupButton />
      </div>
    </section>
  );
};
