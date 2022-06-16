import { TextField } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { CustomButton } from "../../../pages/Login/Login";
import {
  DeleteCategory,
  PostCategory,
  PutCategory,
} from "../../../store/categories/actions";
import { getValueCategory } from "../../../store/categories/selectors";
import { pullTokens } from "../../../store/login/selectors";
import { toggleCategoryModal } from "../../../store/modalWindows/actions";
import style from "./ModalCategory.module.css";

export const ModalCategory = () => {
  const dispatch = useDispatch();
  const valueCategory = useSelector(getValueCategory);
  const token = useSelector(pullTokens);

  const [cookies] = useCookies(["access_token", "refresh_token"]);

  const { register, handleSubmit, setValue, watch } = useForm();

  const isCancelClick = () => {
    dispatch(toggleCategoryModal(false));
  };

  useEffect(() => {
    setValue("idCategory", valueCategory?.id);
    setValue("nameCategory", valueCategory?.name);
    setValue("descriptionCategory", valueCategory?.description);
  }, [valueCategory]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        const categoryUpdate = {
          id: data.idCategory,
          name: data.nameCategory,
          description: data.descriptionCategory,
        };

        if (valueCategory?.id) {
          dispatch(PutCategory(categoryUpdate, cookies.access_token));
        } else if (valueCategory?.id)
          dispatch(PutCategory(categoryUpdate, token?.access_token));

        if (!valueCategory?.id) {
          dispatch(PostCategory(categoryUpdate, cookies.access_token));
        } else if (!valueCategory?.id)
          dispatch(PostCategory(categoryUpdate, token?.access_token));

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
          {...register("nameCategory")}
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
          {...register("descriptionCategory")}
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
              dispatch(DeleteCategory(valueCategory?.id, cookies.access_token));
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
