import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import shape from "../../../icons/Shape.svg";
import cross from "../../../icons/Cross.svg";
import basket from "../../../icons/basket.png";
import { toggleOrderModal } from "../../../store/modalWindows/actions";
import { getValueOrder } from "../../../store/orders/selectors";
import { CheckboxItem } from "../CheckboxItem/CheckboxItem";
import style from "./ModalOrder.module.css";

export const ModalOrder = () => {
  const dispatch = useDispatch();
  const valueOrder = useSelector(getValueOrder);

  const isUpdateClick = (e: any) => {
    e.preventDefault();
  };

  const isCancelClick = (e: any) => {
    e.preventDefault();
    dispatch(toggleOrderModal(false));
  };

  const isDeleteClick = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className={style.form}>
      <div className={style.blockTextField}>
        <div className={style.name}>
          <p className={style.nameRate}>Автомобиль</p>
          <TextField
            size="small"
            type="text"
            fullWidth
            autoComplete="off"
            className={style.nameTextarea}
            placeholder="Введите автомобиль"
            value={valueOrder?.id ? valueOrder?.carId?.name : ""}
          />
        </div>
        <div className={style.period}>
          <p className={style.periodRate}>Статус заказа</p>
          <TextField
            size="small"
            type="text"
            autoComplete="off"
            className={style.periodTextarea}
            placeholder="Выберите статус"
            fullWidth
            value={valueOrder?.id ? valueOrder?.orderStatusId?.name : ""}
          />
        </div>
        <div className={style.period}>
          <p className={style.periodRate}>Цвет</p>
          <TextField
            size="small"
            type="text"
            autoComplete="off"
            className={style.periodTextarea}
            placeholder="Выберите цвет"
            fullWidth
            value={valueOrder?.id ? valueOrder?.color : ""}
          />
        </div>
        <div className={style.price}>
          <p className={style.priceRate}>Стоимость</p>
          <TextField
            placeholder="Введите стоимость"
            type="number"
            size="small"
            fullWidth
            autoComplete="off"
            className={style.priceInput}
            value={valueOrder?.id ? valueOrder?.price : ""}
          />
        </div>
      </div>
      <div className={style.blockImgCheckBoxButton}>
        <img
          className={style.img}
          src={valueOrder?.carId?.thumbnail?.path}
          alt=""
        />
        <div className={style.checkboxes}>
          <CheckboxItem name={"Полный бак"} check={true} />
          <CheckboxItem name={"Детское кресло"} check={true} />
          <CheckboxItem name={"Правый руль"} check={true} />
        </div>
        <article className={style.buttonGroup}>
          <button className={style.button} onClick={isUpdateClick}>
            <img className={style.icon} src={shape} alt="" />
            Готово
          </button>
          <button className={style.button} onClick={isCancelClick}>
            <img className={style.icon} src={cross} alt="" />
            Отмена
          </button>
          <button className={style.button} onClick={isDeleteClick}>
            <img className={style.icon} src={basket} alt="" />
            Удалить
          </button>
        </article>
      </div>
    </form>
  );
};
