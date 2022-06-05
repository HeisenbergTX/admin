import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { changeCategory } from "../../../store/categories/actions";
import { toggleCategoryModal } from "../../../store/modalWindows/actions";
import style from "./CategoryItem.module.css";

export const CategoryItem = ({ category }: any) => {
  const dispatch = useDispatch();

  const openCategoryModal = (e: any) => {
    e.preventDefault();
    dispatch(
      changeCategory(category?.id, category?.name, category?.description)
    );
    dispatch(toggleCategoryModal(true));
  };

  return (
    <section className={style.section}>
      <p className={style.nameCategory}>{category?.name}</p>
      <p className={style.decriptionCategory}>{category?.description}</p>
      <p className={style.button}>
        <CustomButton
          style={{
            width: "75px",
            fontSize: "11px",
            height: "20px",
          }}
          onClick={openCategoryModal}
        >
          Изменить
        </CustomButton>
      </p>
    </section>
  );
};
