import { Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ChoosePageActive,
  FethcRequestOrders,
} from "../../../store/orders/actions";
import {
  getCityId,
  getCountOrders,
  getOrders,
  getPageActive,
  getRateId,
} from "../../../store/orders/selectors";
import { useCookies } from "react-cookie";
import { OrderItem } from "../../molecules/OrderItem/OrderItem";
import style from "./OrdersCard.module.css";
import cn from "classnames";
import { IOrders } from "../../../store/interfaces";
import { CustomButton } from "../../../pages/Login/Login";
import { FilterOrders } from "../../atoms/FilterOrders/FilterOrders";
import {
  getValueFilterOrder,
  getValueOrderModal,
} from "../../../store/modalWindows/selectors";
import { toggleFilterOrder } from "../../../store/modalWindows/actions";
import { ModalOrder } from "../../atoms/ModalOrder/ModalOrder";
import { pullTokens } from "../../../store/login/selectors";
import Cookies from "js-cookie";

export const OrdersCard = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const orders = useSelector(getOrders);
  const pageActive = useSelector(getPageActive);
  const openModal = useSelector(getValueOrderModal);
  const count = useSelector(getCountOrders);
  const cityId = useSelector(getCityId);
  const rateId = useSelector(getRateId);
  const valueFilterOrder = useSelector(getValueFilterOrder);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(ChoosePageActive(value));
    setPage(value);
  };

  const openFilterOrder = () => dispatch(toggleFilterOrder(!valueFilterOrder));

  const countPage = Math.floor(count / 10);

  useEffect(() => {
    if (!orders.length && Cookies.get("access_token")) {
      dispatch(FethcRequestOrders(page, cityId, rateId));
    } else if (!orders.length) {
      dispatch(FethcRequestOrders(page, cityId, rateId));
    }
  }, [orders]);

  useEffect(() => {
    if (orders.length > 0 && page === pageActive) {
      dispatch(FethcRequestOrders(page, cityId, rateId));
    }
  }, [page, cityId, rateId]);

  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Список заказов</h3>
      <div className={style.block}>
        <article className={cn(style.close, { [style.open]: openModal })}>
          <ModalOrder />
        </article>
        <article className={style.head}>
          <p className={style.textCount}>Заказов: {count}</p>
          <CustomButton
            onClick={openFilterOrder}
            style={{ fontSize: "11px", width: "80px", height: "25px" }}
          >
            {valueFilterOrder ? "Скрыть" : "Фильтр"}
          </CustomButton>
          <article
            className={cn(style.filterModal, {
              [style.filterModalOpen]: valueFilterOrder,
            })}
          >
            <FilterOrders />
          </article>
        </article>
        <article className={style.content}>
          <article className={style.orderItem}>
            {!!orders.length &&
              orders.map((order: IOrders) => {
                return (
                  <article className={style.item} key={order.id}>
                    <OrderItem order={order} />
                  </article>
                );
              })}
          </article>
        </article>
        <article className={style.pagination}>
          <Pagination
            count={countPage}
            color="primary"
            size="small"
            page={pageActive}
            onChange={handleChange}
            showFirstButton
            showLastButton
          />
        </article>
      </div>
    </section>
  );
};
