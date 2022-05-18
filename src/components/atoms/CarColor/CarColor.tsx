import { TextField } from "@mui/material";
import style from "./CarColor.module.css";

const colors = ["синий", "красный", "желтый"];

export const CarColor = () => {
  return (
    <section className={style.section}>
      <p className={style.title}>Доступные цвета</p>
      <div className={style.blockTextField}>
        <TextField
          className={style.textField}
          fullWidth
          type="text"
          size="small"
          placeholder="Добавьте цвет"
        />
        <button className={style.buttonAddColor}>
          <span></span>
          <span></span>
        </button>
      </div>
      {colors.map((color: any, index: number) => {
        return (
          <label className={style.customCheckbox} key={index}>
            <input type="checkbox" />
            <span>{color}</span>
          </label>
        );
      })}
    </section>
  );
};
