import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import style from "./CarColor.module.css";

const colors = ["синий", "красный", "желтый"];

export const CarColor = () => {
  const valueCar = useSelector(getChangeCarCard);

  const [colors, setColors] = useState(valueCar?.colors || []);

  const { register, watch } = useForm();

  return (
    <section className={style.section}>
      <p className={style.title}>Доступные цвета</p>
      <div className={style.blockTextField}>
        <TextField
          className={style.textField}
          fullWidth
          autoComplete="off"
          type="text"
          size="small"
          placeholder="Добавьте цвет"
          {...register("color")}
        />
        <button className={style.buttonAddColor}>
          <span></span>
          <span></span>
        </button>
      </div>
      {colors &&
        colors.map((color: any, index: number) => {
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
