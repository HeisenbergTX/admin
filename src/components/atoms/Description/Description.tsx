import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { changeCarDescription } from "../../../store/carCard/actions";
import { getChangeCarCard } from "../../../store/carCard/selectors";
import style from "./Description.module.css";

export const Description = () => {
  const dispatch = useDispatch();
  const valueCar = useSelector(getChangeCarCard);
  const { register, watch, setValue } = useForm();

  useEffect(() => {
    setValue("description", valueCar?.description);
  }, [valueCar]);

  const changeDescription = () => {
    dispatch(changeCarDescription(watch("description")));
  };

  return (
    <section className={style.section}>
      <p className={style.description}>Описание</p>
      <TextField
        type="text"
        multiline
        size="small"
        fullWidth
        placeholder="Введите описание"
        {...register("description")}
        onBlur={changeDescription}
      >
        {watch("description")}
      </TextField>
    </section>
  );
};
