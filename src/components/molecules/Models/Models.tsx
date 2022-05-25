import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  chooseChangeCarCard,
  chooseDefaultCarCard,
} from "../../../store/carCard/actions";
import { getCategoryName } from "../../../store/categories/selectors";
import { IModels } from "../../../store/interfaces";
import { getModels } from "../../../store/models/selectors";
import { FilterModels } from "../../atoms/FilterModels/FilterModels";
import { ModelItem } from "../../atoms/ModelItem/ModelItem";
import { Table } from "../../atoms/Table/Table";
import style from "./Models.module.css";

export const Models = () => {
  const dispatch = useDispatch();
  const models = useSelector(getModels);
  const categoryName = useSelector(getCategoryName);

  return (
    <section className={style.section}>
      <article className={style.filterModels}>
        <FilterModels />
      </article>
      <div className={style.content}>
        <article className={style.table}>
          <Table />
        </article>
        <article className={style.modelItem}>
          {categoryName === "Все модели"
            ? models.map((model: IModels) => {
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
              })
            : models
                .filter(
                  (model: IModels) => model?.categoryId?.name === categoryName
                )
                .map((model: IModels) => {
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
