import { Input, TextareaAutosize, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateModal } from "../../../store/modalWindows/actions";
import { getValueRate } from "../../../store/rates/selectors";
import style from "./ModalRate.module.css";

export const ModalRate = () => {
  const dispatch = useDispatch();
  const valueRate = useSelector(getValueRate);

  const isCancelClick = () => {
    dispatch(toggleRateModal(false));
  };

  return (
    <form className={style.form}>
      <div className={style.name}>
        <p className={style.nameRate}>Название</p>
        <TextField
          size="small"
          type="text"
          fullWidth
          autoComplete="off"
          className={style.nameTextarea}
          placeholder="Введите название"
          value={valueRate?.id ? valueRate?.rateTypeId?.name : ""}
        />
      </div>
      <div className={style.period}>
        <p className={style.periodRate}>Период</p>
        <TextField
          size="small"
          type="text"
          autoComplete="off"
          className={style.periodTextarea}
          placeholder="Введите период"
          fullWidth
          value={valueRate?.id ? valueRate?.rateTypeId?.unit : ""}
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
          value={valueRate?.id ? valueRate?.price : ""}
        />
      </div>
      <div className={style.groupButton}>
        <CustomButton>{valueRate?.id ? "Обновить" : "Создать"}</CustomButton>
        <CustomButton
          style={{
            background: "#e9ecef",
            border: "none",
            color: "var(--blue-color-black)",
          }}
          onClick={isCancelClick}
        >
          Отменить
        </CustomButton>
      </div>
    </form>
  );
};
