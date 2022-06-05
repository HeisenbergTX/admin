import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import { getValueCategory } from "../../../store/categories/selectors";
import { toggleCategoryModal } from "../../../store/modalWindows/actions";
import style from "./ModalCategory.module.css";

export const ModalCategory = () => {
  const dispatch = useDispatch();
  const valueCategory = useSelector(getValueCategory);

  const isCancelClick = () => {
    dispatch(toggleCategoryModal(false));
  };

  return (
    <form className={style.form}>
      <div className={style.name}>
        <p className={style.nameCategory}>Название</p>
        <textarea
          className={style.nameTextarea}
          placeholder="Введите название"
          defaultValue={valueCategory?.id && valueCategory.name}
        />
      </div>
      <div className={style.description}>
        <p className={style.descriptionCategory}>Описание</p>
        <textarea
          className={style.descriptionTextarea}
          placeholder="Введите описание"
          defaultValue={valueCategory?.id && valueCategory.description}
        />
      </div>
      <div className={style.groupButton}>
        <CustomButton>{valueCategory.id ? "Обновить" : "Создать"}</CustomButton>
        <CustomButton
          style={{
            background: "#e9ecef",
            border: "none",
            color: "var(--blue-color-black)",
          }}
          onClick={isCancelClick}
        >
          Отменить
        </CustomButton>
      </div>
    </form>
  );
};
