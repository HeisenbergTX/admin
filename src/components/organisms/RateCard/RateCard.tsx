import { useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { getRates } from "../../../store/rates/selectors";
import { RateItem } from "../../molecules/RateItem/RateItem";
import style from "./RateCard.module.css";

export const RateCard = () => {
  const rates = useSelector(getRates);
  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Список тарифов</h3>
      <div className={style.block}>
        <article className={style.head}>
          <CustomButton
            style={{ fontSize: "11px", width: "80px", height: "25px" }}
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
