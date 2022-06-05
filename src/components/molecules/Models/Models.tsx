import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CustomButton } from "../../../pages/Login/Login";
import {
  chooseChangeCarCard,
  chooseDefaultCarCard,
} from "../../../store/carCard/actions";
import { IModels } from "../../../store/interfaces";
import { toggleFilterModel } from "../../../store/modalWindows/actions";
import { getValueFilterModel } from "../../../store/modalWindows/selectors";
import { getCountModels, getModels } from "../../../store/models/selectors";
import { FilterModels } from "../../atoms/FilterModels/FilterModels";
import { ModelItem } from "../../atoms/ModelItem/ModelItem";
import { Table } from "../../atoms/Table/Table";
import style from "./Models.module.css";
import cn from "classnames";

export const Models = () => {
  const dispatch = useDispatch();
  const models = useSelector(getModels);
  const count = useSelector(getCountModels);
  const valueFilterModel = useSelector(getValueFilterModel);

  const openFilterModel = () => dispatch(toggleFilterModel(!valueFilterModel));

  return (
    <section className={style.section}>
      <article className={style.head}>
        <p className={style.textCount}>Автомобилей: {count}</p>
        <CustomButton
          onClick={openFilterModel}
          style={{ fontSize: "11px", width: "80px", height: "25px" }}
        >
          {valueFilterModel ? "Скрыть" : "Фильтр"}
        </CustomButton>
        <article
          className={cn(style.filterModal, {
            [style.filterModalOpen]: valueFilterModel,
          })}
        >
          <FilterModels />
        </article>
      </article>
      <div className={style.content}>
        <article className={style.table}>
          <Table />
        </article>
        <article className={style.modelItem}>
          {!!models.length &&
            models.map((model: IModels) => {
              const chooseCarCard = (model: IModels) => {
                dispatch(chooseDefaultCarCard(model));
                dispatch(chooseChangeCarCard(model));
              };
              return (
                <NavLink
                  to="/admin/card/car"
                  className={style.link}
                  key={model.id}
                  onClick={() => chooseCarCard(model)}
                >
                  <article className={style.item}>
                    <ModelItem
                      id={model.id}
                      name={model?.name}
                      img={model?.thumbnail?.path}
                      number={model?.number}
                      category={model?.categoryId?.name}
                      colors={model.colors}
                      priceMin={model.priceMin}
                      priceMax={model.priceMax}
                      description={model.description}
                    />
                  </article>
                </NavLink>
              );
            })}
        </article>
      </div>
    </section>
  );
};
