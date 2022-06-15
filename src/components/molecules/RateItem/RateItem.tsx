import { useDispatch } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateModal } from "../../../store/modalWindows/actions";
import { changeRate } from "../../../store/rates/actions";
import style from "./RateItem.module.css";

export const RateItem = ({ rate }: any) => {
  const dispatch = useDispatch();

  const isOpenRateModal = (e: any) => {
    e.preventDefault();
    dispatch(changeRate(rate));
    dispatch(toggleRateModal(true));
  };

  return (
    <section className={style.section}>
      <p className={style.nameRate}>
        {rate?.rateTypeId?.name ? rate?.rateTypeId?.name : "Нет названия"}
      </p>
      <p className={style.periodRate}>
        {rate?.rateTypeId?.unit ? rate?.rateTypeId?.unit : "Неизвестно"}
      </p>
      <div>
        <p className={style.priceRate}>{rate?.price}₽</p>
        <CustomButton
          className={style.open}
          style={{
            width: "75px",
            fontSize: "11px",
            height: "20px",
            marginBottom: "5px",
          }}
          onClick={isOpenRateModal}
        >
          Изменить
        </CustomButton>
      </div>
    </section>
  );
};
