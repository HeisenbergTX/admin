import { MenuItem, Select, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { IRateTypes } from "../../../store/interfaces";
import { toggleRateModal } from "../../../store/modalWindows/actions";

import { DeleteRate, PostRate, PutRate } from "../../../store/rates/actions";
import { getValueRate } from "../../../store/rates/selectors";
import { getRateTypes } from "../../../store/rateTypes/selectors";
import style from "./ModalRate.module.css";

export const ModalRate = () => {
  const dispatch = useDispatch();
  const rateTypes = useSelector(getRateTypes);
  const valueRate = useSelector(getValueRate);

  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    setValue("idRate", valueRate?.rateTypeId?.id);
    setValue("priceRate", valueRate?.price);
    setValue("nameRate", valueRate?.rateTypeId?.name || "");
    setValue("unitRate", valueRate?.rateTypeId?.unit);
  }, [valueRate]);

  const isCancelClick = (e: any) => {
    e.preventDefault();
    setValue("nameRate", undefined);
    setValue("unitRate", undefined);
    setValue("unitRate", undefined);
    dispatch(toggleRateModal(false));
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

        if (valueRate?.id) dispatch(PutRate(rateUpdate, valueRate.id));

        if (!valueRate?.id) {
          dispatch(PostRate(rateUpdate));
          setValue("nameRate", undefined);
          setValue("unitRate", undefined);
          setValue("unitRate", undefined);
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
            value={watch("nameRate") || ""}
            size="small"
            fullWidth
            {...register("nameRate")}
          >
            <MenuItem style={{ display: "none" }} value="">
              Выберите тариф
            </MenuItem>
            {!!rateTypes.length &&
              rateTypes.map((rateType: IRateTypes) => {
                return (
                  <MenuItem
                    onClick={() => {
                      setValue("idRate", rateType?.id);
                      setValue("unitRate", rateType?.unit);
                    }}
                    key={rateType?.id}
                    value={rateType?.name}
                  >
                    {rateType?.name}
                  </MenuItem>
                );
              })}
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
              dispatch(DeleteRate(valueRate?.id));
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
