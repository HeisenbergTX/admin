import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../store/categories/selectors";
import { ICategories, ICity } from "../../../store/interfaces";
import style from "./FilterOrders.module.css";
import cn from "classnames";
import { CustomButton } from "../../../pages/Login/Login";
import { getCities } from "../../../store/cities/selectors";
import { getRateId, getCityId } from "../../../store/orders/selectors";
import {
  chooseRateId,
  chooseCityId,
  FethcRequestOrders,
} from "../../../store/orders/actions";
import { toggleFilterOrder } from "../../../store/modalWindows/actions";
import { getRates } from "../../../store/rates/selectors";

export const FilterOrders = () => {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const rateName = useSelector(getRateId);
  const cities = useSelector(getCities);
  const cityName = useSelector(getCityId);

  const [rateSelect, setRateSelect] = useState<boolean>(false);
  const [citySelect, setCitySelect] = useState<boolean>(false);

  const [rateFilter, setRateFilter] = useState<any>({
    name: undefined,
    id: undefined,
  });
  const [cityFilter, setCityFilter] = useState<any>({
    name: undefined,
    id: undefined,
  });

  const arrayId = [cityName.id, rateName.id];

  const checkId = arrayId.some((id) => id);

  const toggleSelectRate = (e: any) => {
    e.preventDefault();
    setRateSelect(!rateSelect);
    setCitySelect(false);
  };

  const toggleSelectCity = (e: any) => {
    e.preventDefault();
    setCitySelect(!citySelect);
    setRateSelect(false);
  };

  const submit = (e: any) => {
    e.preventDefault();
    dispatch(toggleFilterOrder(false));
    if (rateFilter.name !== rateName.name) {
      dispatch(chooseRateId(rateFilter.name, rateFilter.id));
    }
    if (cityFilter.name !== cityName.name) {
      dispatch(chooseCityId(cityFilter.name, cityFilter.id));
    }
  };

  const clearFilter = (e: any) => {
    e.preventDefault();
    setRateFilter({ name: undefined, id: undefined });
    setCityFilter({ name: undefined, id: undefined });
    dispatch(chooseRateId("Любой", undefined));
    dispatch(chooseCityId("Любой", undefined));
  };

  return (
    <section className={style.section}>
      <form className={style.form}>
        <label className={style.label}>
          <p className={style.titleFilter}>Тариф</p>
          <div className={style.blockInput}>
            <input
              className={style.input}
              onClick={toggleSelectRate}
              value={
                rateFilter.name === undefined ? rateName.name : rateFilter.name
              }
              type="text"
              autoComplete="off"
              readOnly
            />
            <div className={style.blockArrow}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={cn(style.none, { [style.dataList]: rateSelect })}>
            {rates.length !== 0 &&
              rates.map((rate: any) => {
                return (
                  <div
                    className={style.dropItem}
                    onClick={() => {
                      setRateFilter({
                        name: rate?.rateTypeId?.name || "Нет названия",
                        id: rate.id,
                      });
                    }}
                    key={rate.id}
                  >
                    {rate?.rateTypeId?.name
                      ? rate?.rateTypeId?.name
                      : "Нет названия"}
                  </div>
                );
              })}
          </div>
        </label>
        <label className={style.label}>
          <p className={style.titleFilter}>Город</p>
          <div className={style.blockInput}>
            <input
              className={style.input}
              onClick={toggleSelectCity}
              value={
                cityFilter.name === undefined ? cityName?.name : cityFilter.name
              }
              type="text"
              autoComplete="off"
              readOnly
            />
            <div className={style.blockArrow}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={cn(style.none, { [style.dataList]: citySelect })}>
            {cities.length !== 0 &&
              cities.map((city: ICity) => {
                return (
                  <div
                    className={style.dropItem}
                    onClick={() => {
                      setCityFilter({ name: city.name, id: city.id });
                    }}
                    key={city.id}
                  >
                    {city.name}
                  </div>
                );
              })}
          </div>
        </label>
      </form>
      <div className={style.groupButton}>
        <CustomButton style={{ fontSize: "14px" }} onClick={submit}>
          Применить
        </CustomButton>
        <article className={style.cancel}>
          {checkId && (
            <CustomButton
              style={{
                borderColor: "#c4183c",
                background: "#c4183c",
                fontSize: "14px",
              }}
              onClick={clearFilter}
            >
              Сбросить
            </CustomButton>
          )}
        </article>
      </div>
    </section>
  );
};
