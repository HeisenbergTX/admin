import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import style from "./FilterModels.module.css";
import { ICategories } from "../../../store/interfaces";
import { GetCategoryName } from "../../../store/categories/actions";
import {
  getCategories,
  getCategoryName,
} from "../../../store/categories/selectors";

export const FilterModels = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const categoryName = useSelector(getCategoryName);
  const [showDataBlock, setShowDataBlock] = useState<boolean>(false);
  const [filterName, setFilterName] = useState<any>({
    name: undefined,
    id: undefined,
  });

  const showClickHandler = (e: any) => {
    e.preventDefault();
    setShowDataBlock(!showDataBlock);
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (filterName.name !== categoryName.name) {
      dispatch(GetCategoryName(filterName.name, filterName.id));
    }
  };

  const clearFilter = (e: any) => {
    e.preventDefault();
    setFilterName({ name: undefined, id: undefined });
    dispatch(GetCategoryName("Все категории", undefined));
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
              value={
                filterName.name === undefined
                  ? categoryName.name
                  : filterName.name
              }
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
                      setFilterName({ name: category.name, id: category.id });
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
            [style.hidden]: categoryName.name !== "Все категории",
          })}
        >
          Сбросить
        </button>
        <button
          disabled={
            filterName.name === categoryName.name ||
            (filterName.name === undefined && true)
          }
          className={cn(style.submit, style.button)}
          onClick={submit}
        >
          Применить
        </button>
      </div>
    </form>
  );
};
