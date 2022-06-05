import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateTypeModal } from "../../../store/modalWindows/actions";
import {
  DeleteRateType,
  PostRateType,
  PutRateType,
} from "../../../store/rateTypes/actions";
import { getValueRateType } from "../../../store/rateTypes/selectors";
import style from "./ModalRateType.module.css";

export const ModalRateType = () => {
  const dispatch = useDispatch();
  const valueRateType = useSelector(getValueRateType);

  const [cookies] = useCookies(["access_token", "refresh_token"]);

  const { register, handleSubmit, setValue, watch } = useForm();

  const isCancelClick = () => {
    dispatch(toggleRateTypeModal(false));
  };

  useEffect(() => {
    setValue("idRateType", valueRateType?.id);
    setValue("nameRateType", valueRateType?.name);
    setValue("unitRateType", valueRateType?.unit);
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const rateTypeUpdate = {
          id: data.idRateType,
          name: data.nameRateType,
          unit: data.unitRateType,
        };
        if (valueRateType?.id) {
          dispatch(PutRateType(rateTypeUpdate, cookies.access_token));
        }
        if (!valueRateType?.id) {
          dispatch(PostRateType(rateTypeUpdate, cookies.access_token));
        }
        dispatch(toggleRateTypeModal(false));
      })}
      className={style.form}
    >
      <div className={style.name}>
        <p className={style.nameRateType}>Название</p>
        <TextField
          size="small"
          fullWidth
          autoComplete="off"
          placeholder="Введите название"
          {...register("nameRateType")}
        />
      </div>
      <div className={style.unit}>
        <p className={style.unitRateType}>Длительность тарифа</p>
        <TextField
          size="small"
          fullWidth
          autoComplete="off"
          placeholder="Укажите длительность"
          {...register("unitRateType")}
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
          {valueRateType?.id ? "Обновить" : "Создать"}
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
        {valueRateType?.id && (
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
              dispatch(DeleteRateType(valueRateType?.id, cookies.access_token));
              dispatch(toggleRateTypeModal(false));
            }}
          >
            Удалить
          </CustomButton>
        )}
      </div>
    </form>
  );
};
