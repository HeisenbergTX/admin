import { useDispatch } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateModal } from "../../../store/modalWindows/actions";
import { changeRate } from "../../../store/rates/actions";
import style from "./RateItem.module.css";

export const RateItem = ({ rate }: any) => {
  const dispatch = useDispatch();

  const openRateModal = (e: any) => {
    e.preventDefault();
    dispatch(changeRate(rate));
    dispatch(toggleRateModal(true));
  };

  return (
    <section className={style.section}>
      <div className={style.item}>
        <p className={style.nameRate}>
          {rate?.rateTypeId?.name ? rate?.rateTypeId?.name : "Нет названия"}
        </p>
        <p className={style.periodRate}>
          {rate?.rateTypeId?.unit ? rate?.rateTypeId?.unit : "Неизвестно"}
        </p>
        <p className={style.priceRate}>{rate?.price}₽</p>
      </div>
      <CustomButton
        style={{
          width: "75px",
          fontSize: "11px",
          height: "20px",
          marginBottom: "5px",
        }}
        onClick={openRateModal}
      >
        Изменить
      </CustomButton>
    </section>
  );
};
