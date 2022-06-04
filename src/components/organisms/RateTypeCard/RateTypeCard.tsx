import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateTypeModal } from "../../../store/modalWindows/actions";
import style from "./RateTypeCard.module.css";
import cn from "classnames";
import { ModalRateType } from "../../atoms/ModalRateType/ModalRateType";
import { getValueRateTypeModal } from "../../../store/modalWindows/selectors";
import { changeCategory } from "../../../store/categories/actions";
import { RateTypeItem } from "../../molecules/RateTypeItem/RateTypeItem";
import { getRateTypes } from "../../../store/rateTypes/selectors";
import { IRateTypes } from "../../../store/interfaces";
import { changeRateType } from "../../../store/rateTypes/actions";

export const RateTypeCard = () => {
  const dispatch = useDispatch();
  const rateTypes = useSelector(getRateTypes);
  const openModal = useSelector(getValueRateTypeModal);

  const isOpenModalCategory = () => {
    dispatch(changeRateType(undefined));
    dispatch(toggleRateTypeModal(true));
  };

  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Типы тарифов</h3>
      <div className={style.block}>
        <article className={cn(style.close, { [style.open]: openModal })}>
          <ModalRateType />
        </article>
        <article className={style.head}>
          <CustomButton
            style={{ fontSize: "11px", width: "80px", height: "25px" }}
            onClick={isOpenModalCategory}
          >
            Добавить
          </CustomButton>
        </article>
        <article className={style.table}>
          <p>Название</p>
          <p>Длительность</p>
        </article>
        <article className={style.content}>
          <article className={style.orderItem}>
            {!!rateTypes.length &&
              rateTypes.map((rateType: IRateTypes) => {
                return (
                  <article className={style.item} key={rateType.id}>
                    <RateTypeItem rateType={rateType} />
                  </article>
                );
              })}
          </article>
        </article>
      </div>
    </section>
  );
};
