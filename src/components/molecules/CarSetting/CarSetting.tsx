import { useForm } from "react-hook-form";
import { TextField, Select, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/categories/selectors";
import {
  getChangeCarCard,
  getDefaultCarCard,
} from "../../../store/carCard/selectors";
import { CarColor } from "../../atoms/CarColor/CarColor";
import style from "./CarSetting.module.css";
import cn from "classnames";
import {
  CustomButton,
  CustomLoadingButton,
} from "../../../assets/Buttons/buttons";
import { useEffect, useState } from "react";
import {
  changeCarCategory,
  changeCarName,
} from "../../../store/carCard/actions";

export const CarSetting = () => {
  const dispatch = useDispatch();
  const valueCar = useSelector(getDefaultCarCard);
  const changeCar = useSelector(getChangeCarCard);
  const categories = useSelector(getCategories);

  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    setValue("name", changeCar?.name || valueCar?.name);
    setValue("categoryId", changeCar?.categoryId || valueCar?.categoryId);
    setValue("number", valueCar?.number);
    setValue("priceMin", valueCar?.priceMin);
    setValue("priceMax", valueCar?.priceMax);
  }, [valueCar]);

  const isCancelClick = (e: any) => {
    e.preventDefault();
  };

  console.log(watch("categoryId"));

  return (
    <section className={style.section}>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={style.settings}
      >
        <h3 className={style.title}>Настройки автомобиля</h3>
        <div className={style.blockTextField}>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Модель автомобиля</p>
            <TextField
              className={style.textField}
              type="text"
              size="small"
              autoComplete="off"
              disabled={!!valueCar?.name}
              defaultValue={watch("name")}
              placeholder="Название автомобиля"
              {...register("name")}
              onChange={() => dispatch(changeCarName(watch("name")))}
            />
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Класс автомобиля</p>
            <Select
              displayEmpty
              className={style.textField}
              size="small"
              renderValue={() => {
                if (changeCar) {
                  return <em>{watch("categoryId")?.name}</em>;
                } else {
                  return <em>Выберите класс</em>;
                }
              }}
            >
              <div style={{ height: "200px" }}>
                {!!categories.length &&
                  categories.map((category: any) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setValue("categoryId", category);
                          dispatch(changeCarCategory(category));
                        }}
                        key={category?.id}
                        value={category?.name}
                      >
                        {category?.name}
                      </MenuItem>
                    );
                  })}
              </div>
            </Select>
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Минимальная стоимость</p>
            <TextField
              className={style.textField}
              type="number"
              size="small"
              defaultValue={watch("priceMin")}
              placeholder="Введите стоимость"
              {...register("priceMin")}
              onBlur={() => setValue("priceMin", +watch("priceMin"))}
            />
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Максимальная стоимость</p>
            <TextField
              className={style.textField}
              type="number"
              size="small"
              defaultValue={watch("priceMax")}
              placeholder="Введите стоимость"
              {...register("priceMax")}
              onBlur={() => setValue("priceMax", +watch("priceMax"))}
            />
          </div>
          <div className={style.blockInput}>
            <p className={style.nameTextField}>Номер автомобиля</p>
            <TextField
              className={style.textField}
              maxLength="10"
              type="text"
              size="small"
              defaultValue={watch("number")}
              placeholder="Введите номер"
              {...register("number")}
            />
          </div>
          <div className={style.blockInput}>
            <article className={style.textField}>
              <CarColor />
            </article>
          </div>
        </div>
        <div className={style.groupButton}>
          <div className={style.buttons}>
            <CustomButton
              style={{
                width: "110px",
                height: "30px",
                fontSize: "12px",
              }}
              type="submit"
            >
              {valueCar?.id ? "Обновить" : "Создать"}
            </CustomButton>
            <CustomButton
              style={{
                background: "#e9ecef",
                color: "var(--blue-color-black)",
                width: "110px",
                height: "30px",
                fontSize: "12px",
              }}
              onClick={isCancelClick}
            >
              Отменить
            </CustomButton>
          </div>
          {valueCar?.id && (
            <CustomLoadingButton
              className={style.delete}
              style={{
                background: "#c4183c",
                width: "110px",
                height: "30px",
                fontSize: "12px",
              }}
              onClick={(e: any) => {
                e.preventDefault();
              }}
            >
              Удалить
            </CustomLoadingButton>
          )}
        </div>
      </form>
    </section>
  );
};
