import style from "./GroupButton.module.css";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getChangeCarCard,
  getDefaultCarCard,
} from "../../../store/carCard/selectors";
import { chooseChangeCarCard } from "../../../store/carCard/actions";

export const GroupButton = () => {
  const dispatch = useDispatch();
  const defaultValueCar = useSelector(getDefaultCarCard);
  const changeValueCar = useSelector(getChangeCarCard);

  const clickCancel = () => {
    if (defaultValueCar !== changeValueCar) {
      dispatch(chooseChangeCarCard(defaultValueCar));
    }
  };

  return (
    <section className={style.section}>
      <div className={style.blockButton}>
        <button className={cn(style.save, style.button)}>Сохранить</button>
        <button
          onClick={clickCancel}
          className={cn(style.cancel, style.button)}
        >
          Отменить
        </button>
      </div>
      <button className={cn(style.delete, style.button)}>Удалить</button>
    </section>
  );
};
