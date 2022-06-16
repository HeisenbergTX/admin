import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import style from "./FileLoader.module.css";

export const FileLoader = () => {
  const valueCar = useSelector(getChangeCarCard);
  const { register, watch } = useForm();

  return (
    <section className={style.section}>
      <p className={style.text}>
        {!!watch("valueFile")?.length
          ? watch("valueFile")[0].name
          : "Выберите файл..."}
      </p>
      <label className={style.label}>
        <input
          type="file"
          accept="image/*"
          className={style.input}
          {...register("valueFile")}
        />
        <div>Обзор</div>
      </label>
    </section>
  );
};
