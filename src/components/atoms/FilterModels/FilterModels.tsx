import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import style from "./FilterModels.module.css";
import { ICategories, IModels } from "../../../store/interfaces";
import {
  FetchCategoryRequest,
  GetCategoryName,
} from "../../../store/categories/actions";
import {
  getCategories,
  getCategoryName,
} from "../../../store/categories/selectors";

export const FilterModels = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const categoryName = useSelector(getCategoryName);
  const [showDataBlock, setShowDataBlock] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<any>("Все модели");

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(FetchCategoryRequest());
    }
  }, [categories]);

  const showClickHandler = (e: any) => {
    e.preventDefault();
    setShowDataBlock(!showDataBlock);
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (filterName !== categoryName) {
      dispatch(GetCategoryName(filterName));
    }
  };

  const clearFilter = (e: any) => {
    e.preventDefault();
    setFilterName("Все модели");
    dispatch(GetCategoryName("Все модели"));
  };

  return (
    <form className={style.form}>
      <div>
        <label className={style.label}>
          <div className={style.blockInput}>
            <p className={style.titleFilter}>Категория</p>
            <input
              className={style.input}
              type="text"
              onClick={showClickHandler}
              value={filterName}
              autoComplete="off"
              readOnly
            />
            <div className={style.blockArrow}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={cn(style.none, { [style.dataList]: showDataBlock })}>
            {categories.length !== 0 &&
              categories.map((category: ICategories) => {
                return (
                  <div
                    className={style.dropItem}
                    onClick={() => {
                      setFilterName(category.name);
                    }}
                    key={category.id}
                  >
                    {category.name}
                  </div>
                );
              })}
          </div>
        </label>
      </div>
      <div className={style.blockButton}>
        <button
          onClick={clearFilter}
          className={cn(style.clear, style.button, {
            [style.hidden]: categoryName !== "Все модели",
          })}
        >
          Сбросить
        </button>
        <button
          disabled={filterName === categoryName && true}
          className={cn(style.submit, style.button)}
          onClick={submit}
        >
          Применить
        </button>
      </div>
    </form>
  );
};
