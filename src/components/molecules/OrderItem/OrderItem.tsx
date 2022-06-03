import { useDispatch, useSelector } from "react-redux";
import { getValueOrderModal } from "../../../store/modalWindows/selectors";
import { changeOrder } from "../../../store/orders/actions";
import { ButtonGroup } from "../../atoms/ButtonGroup/ButtonGroup";
import { CheckboxItem } from "../../atoms/CheckboxItem/CheckboxItem";
import { InfoOrder } from "../../atoms/InfoOrder/InfoOrder";
import style from "./OrderItem.module.css";

export const OrderItem = ({ order }: any) => {
  const dispatch = useDispatch();
  const openModal = useSelector(getValueOrderModal);

  const name = order?.carId?.name;
  const city = order?.cityId?.name;
  const address = order?.pointId?.address;
  const dateFrom = order?.dateFrom;
  const dateTo = order?.dateTo;
  const color = order?.color;
  const image = order?.carId?.thumbnail?.path;
  const rate = order?.rateId?.rateTypeId?.name;

  if (openModal) {
    dispatch(changeOrder(order));
  }

  return (
    <section className={style.section}>
      <div className={style.block}>
        <img className={style.img} src={image} alt="Нет фото" />
        <article className={style.infoOrder}>
          <InfoOrder
            name={name}
            city={city}
            address={address}
            dateFrom={dateFrom}
            dateTo={dateTo}
            color={color}
            rate={rate}
          />
        </article>
        <div className={style.checkboxes}>
          <CheckboxItem name={"Полный бак"} check={order?.isFullTank} />
          <CheckboxItem
            name={"Детское кресло"}
            check={order?.isNeedChildChair}
          />
          <CheckboxItem name={"Правый руль"} check={order?.isRightWheel} />
        </div>
        <div className={style.priceAndButtonGroup}>
          <p className={style.price}>{order?.price}₽</p>
          <article className={style.buttonGroupDesktop}>
            <ButtonGroup />
          </article>
        </div>
      </div>
      <article className={style.buttonGroup}>
        <ButtonGroup />
      </article>
    </section>
  );
};
