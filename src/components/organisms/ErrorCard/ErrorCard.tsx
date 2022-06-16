import style from "./ErrorCard.module.css";
import { CustomButton } from "../../../pages/Login/Login";

interface IProps {
  status?: number;
}

export const ErrorCard: React.FC<IProps> = ({ status }) => {
  return (
    <section className={style.section}>
      <p className={style.status}>{status}</p>
      <p className={style.textInfo}>Что-то пошло не так</p>
      <p className={style.direction}>Попробуйте обновить страницу</p>
      <CustomButton onClick={() => window.location.reload()}>
        Обновить
      </CustomButton>
    </section>
  );
};
