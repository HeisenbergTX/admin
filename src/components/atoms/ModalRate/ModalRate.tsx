import { MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { IRate } from "../../../store/interfaces";
import { toggleRateModal } from "../../../store/modalWindows/actions";
import { getValueRateModal } from "../../../store/modalWindows/selectors";
import { DeleteRate, PostRate, PutRate } from "../../../store/rates/actions";
import { getRates, getValueRate } from "../../../store/rates/selectors";
import style from "./ModalRate.module.css";

export const ModalRate = () => {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const valueRate = useSelector(getValueRate);
  const [cookies] = useCookies(["access_token", "refresh_token"]);

  const [valueName, setValueName] = useState();

  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    setValue("idRate", valueRate?.rateTypeId?.id);
    setValue("priceRate", valueRate?.price);
    setValue("nameRate", valueRate?.rateTypeId?.name);
    setValue("unitRate", valueRate?.rateTypeId?.unit);
  }, [valueRate]);

  const isCancelClick = (e: any) => {
    e.preventDefault();
    setValueName(undefined);
    dispatch(toggleRateModal(false));
    setValue("idRate", valueRate?.rateTypeId?.id);
    setValue("priceRate", valueRate?.price);
    setValue("nameRate", valueRate?.rateTypeId?.name);
    setValue("unitRate", valueRate?.rateTypeId?.unit);
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const rateUpdate = {
          rateTypeId: {
            id: data.idRate,
            name: data.nameRate,
            unit: data.unitRate,
          },
          price: data.priceRate,
        };

        if (valueRate?.id) {
          dispatch(PutRate(rateUpdate, valueRate.id, cookies.access_token));
        }
        if (!valueRate?.id) {
          dispatch(PostRate(rateUpdate, cookies.access_token));
          setValueName(undefined);
        }

        dispatch(toggleRateModal(false));
      })}
      className={style.form}
    >
      <div className={style.name}>
        <p className={style.nameRate}>Название</p>
        {!valueRate?.id ? (
          <Select
            displayEmpty
            size="small"
            fullWidth
            renderValue={() => {
              if (!valueName) {
                return <em>Выберите тариф</em>;
              } else {
                return <em>{watch("nameRate")}</em>;
              }
            }}
            {...register("nameRate")}
          >
            {rates.map((rate: IRate) => (
              <MenuItem
                onClick={() => {
                  setValueName(watch("nameRate"));
                  setValue("idRate", rate?.rateTypeId?.id);
                  setValue("unitRate", rate?.rateTypeId?.unit);
                }}
                key={rate?.rateTypeId?.id}
                value={rate?.rateTypeId?.name}
              >
                {rate?.rateTypeId?.name}
              </MenuItem>
            ))}
          </Select>
        ) : (
          <TextField
            size="small"
            type="text"
            fullWidth
            disabled={!!valueRate?.id}
            autoComplete="off"
            placeholder="Введите название"
            {...register("nameRate")}
          />
        )}
      </div>
      <div className={style.period}>
        <p className={style.periodRate}>Длительность</p>
        <TextField
          size="small"
          type="text"
          fullWidth
          autoComplete="off"
          disabled={true}
          placeholder="Выберите тариф"
          {...register("unitRate")}
        />
      </div>
      <div className={style.price}>
        <p className={style.priceRate}>Цена</p>
        <TextField
          placeholder="Введите цену"
          type="number"
          size="small"
          fullWidth
          autoComplete="off"
          className={style.priceInput}
          {...register("priceRate")}
        />
      </div>
      <div className={style.groupButton}>
        <CustomButton
          style={{
            width: "70px",
            height: "27px",
            fontSize: "12px",
          }}
          type="submit"
        >
          {valueRate?.id ? "Обновить" : "Создать"}
        </CustomButton>
        <CustomButton
          style={{
            background: "#e9ecef",
            border: "none",
            color: "var(--blue-color-black)",
            width: "70px",
            height: "27px",
            fontSize: "12px",
          }}
          onClick={isCancelClick}
        >
          Отменить
        </CustomButton>
        {valueRate?.id && (
          <CustomButton
            style={{
              background: "#c4183c",
              border: "none",
              width: "70px",
              height: "27px",
              fontSize: "12px",
            }}
            onClick={(e: any) => {
              e.preventDefault();
              dispatch(DeleteRate(valueRate?.id, cookies.access_token));
              dispatch(toggleRateModal(false));
            }}
          >
            Удалить
          </CustomButton>
        )}
      </div>
    </form>
  );
};
