import { CustomButton } from "../../../pages/Login/Login";
import style from "./CategoryItem.module.css";

export const CategoryItem = ({ category }: any) => {
  return (
    <section className={style.section}>
      <div className={style.item}>
        <p className={style.nameCategory}>{category?.name}</p>
        <p className={style.periodCategory}>{category?.description}</p>
      </div>
      <CustomButton
        style={{
          width: "75px",
          fontSize: "11px",
          height: "20px",
          marginBottom: "5px",
        }}
      >
        Изменить
      </CustomButton>
    </section>
  );
};
