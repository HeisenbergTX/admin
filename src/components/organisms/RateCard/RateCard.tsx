import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { getValueRateModal } from "../../../store/modalWindows/selectors";
import { getRates } from "../../../store/rates/selectors";
import { RateItem } from "../../molecules/RateItem/RateItem";
import style from "./RateCard.module.css";
import cn from "classnames";
import { ModalRate } from "../../atoms/ModalRate/ModalRate";
import { changeRate } from "../../../store/rates/actions";
import { toggleRateModal } from "../../../store/modalWindows/actions";

export const RateCard = () => {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const openModal = useSelector(getValueRateModal);

  const isOpenModalRate = () => {
    dispatch(changeRate(""));
    dispatch(toggleRateModal(true));
  };

  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Список тарифов</h3>
      <div className={style.block}>
        <article className={cn(style.close, { [style.open]: openModal })}>
          <ModalRate />
        </article>
        <article className={style.head}>
          <CustomButton
            style={{ fontSize: "11px", width: "80px", height: "25px" }}
            onClick={isOpenModalRate}
          >
            Добавить
          </CustomButton>
        </article>
        <article className={style.table}>
          <p>Название</p>
          <p>Период</p>
          <p>Цена</p>
        </article>
        <article className={style.content}>
          <article className={style.orderItem}>
            {!!rates.length &&
              rates.map((rate: any) => {
                return (
                  <article className={style.item} key={rate.id}>
                    <RateItem rate={rate} />
                  </article>
                );
              })}
          </article>
        </article>
      </div>
    </section>
  );
};
