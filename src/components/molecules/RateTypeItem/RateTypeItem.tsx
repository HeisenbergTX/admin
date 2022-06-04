import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleRateTypeModal } from "../../../store/modalWindows/actions";
import { changeRateType } from "../../../store/rateTypes/actions";
import style from "./RateTypeItem.module.css";

export const RateTypeItem = ({ rateType }: any) => {
  const dispatch = useDispatch();

  const openRateTypeModal = (e: any) => {
    e.preventDefault();
    dispatch(changeRateType(rateType));
    dispatch(toggleRateTypeModal(true));
  };

  return (
    <section className={style.section}>
      <p className={style.nameCategory}>{rateType?.name}</p>
      <p className={style.decriptionCategory}>{rateType?.unit}</p>
      <p className={style.button}>
        <CustomButton
          style={{
            width: "75px",
            fontSize: "11px",
            height: "20px",
          }}
          onClick={openRateTypeModal}
        >
          Изменить
        </CustomButton>
      </p>
    </section>
  );
};
