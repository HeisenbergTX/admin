import { useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { getCategories } from "../../../store/categories/selectors";
import { CategoryItem } from "../../molecules/CategoryItem/CategoryItem";
import style from "./CategoryCard.module.css";

export const CategoryCard = () => {
  const categories = useSelector(getCategories);

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
          <p>Описание</p>
        </article>
        <article className={style.content}>
          <article className={style.orderItem}>
            {!!categories.length &&
              categories.map((category: any) => {
                return (
                  <article className={style.item} key={category.id}>
                    <CategoryItem category={category} />
                  </article>
                );
              })}
          </article>
        </article>
      </div>
    </section>
  );
};
