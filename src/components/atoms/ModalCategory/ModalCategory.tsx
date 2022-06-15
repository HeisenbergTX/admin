import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import {
  DeleteCategory,
  PostCategory,
  PutCategory,
} from "../../../store/categories/actions";
import { getValueCategory } from "../../../store/categories/selectors";
import { toggleCategoryModal } from "../../../store/modalWindows/actions";
import style from "./ModalCategory.module.css";

export const ModalCategory = () => {
  const dispatch = useDispatch();
  const valueCategory = useSelector(getValueCategory);

  const { register, handleSubmit, setValue } = useForm();

  const isCancelClick = () => {
    dispatch(toggleCategoryModal(false));
  };

  useEffect(() => {
    setValue("id", valueCategory?.id);
    setValue("name", valueCategory?.name);
    setValue("description", valueCategory?.description);
  }, [valueCategory]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);

        if (valueCategory?.id) dispatch(PutCategory(data));

        if (!valueCategory?.id) dispatch(PostCategory(data));

        dispatch(toggleCategoryModal(false));
      })}
      className={style.form}
    >
      <div className={style.name}>
        <p className={style.nameCategory}>Название</p>
        <TextField
          fullWidth
          autoComplete="off"
          size="small"
          placeholder="Введите название"
          {...register("name")}
        />
      </div>
      <div className={style.description}>
        <p className={style.descriptionCategory}>Описание</p>
        <TextField
          multiline
          rows={1.5}
          fullWidth
          size="small"
          placeholder="Введите описание"
          {...register("description")}
        />
      </div>
      <div className={style.groupButton}>
        <CustomButton
          style={{
            width: "70px",
            height: "27px",
            fontSize: "12px",
          }}
          type="submit"
        >
          {valueCategory?.id ? "Обновить" : "Создать"}
        </CustomButton>
        <CustomButton
          style={{
            background: "#e9ecef",
            border: "none",
            color: "var(--blue-color-black)",
            width: "70px",
            height: "27px",
            fontSize: "12px",
          }}
          onClick={isCancelClick}
        >
          Отменить
        </CustomButton>
        {valueCategory?.id && (
          <CustomButton
            style={{
              background: "#c4183c",
              border: "none",
              width: "70px",
              height: "27px",
              fontSize: "12px",
            }}
            onClick={(e: any) => {
              e.preventDefault();
              dispatch(DeleteCategory(valueCategory?.id));
              dispatch(toggleCategoryModal(false));
            }}
          >
            Удалить
          </CustomButton>
        )}
      </div>
    </form>
  );
};
