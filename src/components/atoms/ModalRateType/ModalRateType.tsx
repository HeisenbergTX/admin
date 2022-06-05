import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateTypeModal } from "../../../store/modalWindows/actions";
import { getValueRateType } from "../../../store/rateTypes/selectors";
import style from "./ModalRateType.module.css";

export const ModalRateType = () => {
  const dispatch = useDispatch();
  const valueRateType = useSelector(getValueRateType);

  const isCancelClick = () => {
    dispatch(toggleRateTypeModal(false));
  };

  return (
    <form className={style.form}>
      <div className={style.name}>
        <p className={style.nameRateType}>Название</p>
        <textarea
          className={style.nameTextarea}
          placeholder="Введите название"
          defaultValue={valueRateType?.id ? valueRateType?.name : ""}
        />
      </div>
      <div className={style.unit}>
        <p className={style.unitRateType}>Длительность тарифа</p>
        <textarea
          className={style.unitTextarea}
          placeholder="Укажите длительность"
          defaultValue={valueRateType?.id ? valueRateType.unit : ""}
        />
      </div>
      <div className={style.groupButton}>
        <CustomButton>
          {valueRateType?.id ? "Обновить" : "Создать"}
        </CustomButton>
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
