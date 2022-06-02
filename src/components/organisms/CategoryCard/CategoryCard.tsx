import { useSelector, useDispatch } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { toggleCategoryModal } from "../../../store/modalWindows/actions";
import {
  getCategories,
  getValueCategory,
} from "../../../store/categories/selectors";
import { CategoryItem } from "../../molecules/CategoryItem/CategoryItem";
import style from "./CategoryCard.module.css";
import cn from "classnames";
import { ModalCategory } from "../../atoms/ModalCategory/ModalCategory";
import { getValueCategoryModal } from "../../../store/modalWindows/selectors";
import { changeCategory } from "../../../store/categories/actions";

export const CategoryCard = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const openModal = useSelector(getValueCategoryModal);

  const isOpenModalCategory = () => {
    dispatch(changeCategory("", "", ""));
    dispatch(toggleCategoryModal(true));
  };

  return (
    <section className={style.section}>
      <h3 className={style.nameCard}>Список категорий</h3>
      <div className={style.block}>
        <article className={cn(style.close, { [style.open]: openModal })}>
          <ModalCategory />
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
