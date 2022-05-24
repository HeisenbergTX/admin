import { useForm } from "react-hook-form";
import style from "./FileLoader.module.css";

export const FileLoader = () => {
  const { register, handleSubmit, watch } = useForm();

  const value = watch("valueFile");

  return (
    <form onSubmit={handleSubmit((data) => data)} className={style.section}>
      <p className={style.text}>
        {value ? value[0]?.name : "Выберите файл..."}
      </p>
      <label className={style.label}>
        <input type="file" className={style.input} {...register("valueFile")} />
        <div>Обзор</div>
      </label>
    </form>
  );
};
