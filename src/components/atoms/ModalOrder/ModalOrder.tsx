import { MenuItem, Select, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import shape from "../../../icons/Shape.svg";
import cross from "../../../icons/Cross.svg";
import basket from "../../../icons/basket.png";
import { toggleOrderModal } from "../../../store/modalWindows/actions";
import { getValueOrder } from "../../../store/orders/selectors";
import style from "./ModalOrder.module.css";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {
  changeOrder,
  DeleteOrder,
  PutOrder,
} from "../../../store/orders/actions";
import { IModels } from "../../../store/interfaces";
import { getModelPendng, getModels } from "../../../store/models/selectors";
import { FethcAllModelRequest } from "../../../store/models/actions";
import { CustomLoadingButton } from "../../../assets/Buttons/buttons";
import { getStatuses } from "../../../store/statusOrder/selectors";
import { pullTokens } from "../../../store/login/selectors";

export const ModalOrder = () => {
  const dispatch = useDispatch();
  const valueOrder = useSelector(getValueOrder);
  const models = useSelector(getModels);
  const pending = useSelector(getModelPendng);
  const statuses = useSelector(getStatuses);
  const token = useSelector(pullTokens);
  const [cookies] = useCookies(["access_token", "refresh_token"]);

  const [valueCar, setValueCar] = useState<any>();
  const [valueStatus, setValueStatus] = useState<any>();
  const [valueColor, setValueColor] = useState<any>();

  const { register, handleSubmit, setValue, watch } = useForm();

  useEffect(() => {
    setValue("id", valueOrder?.id);
    setValue("carId", valueOrder?.carId);
    setValue("orderStatusId", valueOrder?.orderStatusId);
    setValue("color", valueOrder?.color);
    setValue("dateTo", valueOrder?.dateTo);
    setValue("dateFrom", valueOrder?.dateFrom);
    setValue("price", valueOrder?.price);
    setValue("cityId", valueOrder?.cityId);
    setValue("pointId", valueOrder?.pointId);
    setValue("isFullTank", valueOrder?.isFullTank);
    setValue("isNeedChildChair", valueOrder?.isNeedChildChair);
    setValue("isRightWheel", valueOrder?.isRightWheel);
  }, [valueOrder]);

  const isCancelClick = (e: any) => {
    e.preventDefault();
    dispatch(changeOrder(undefined));
    dispatch(toggleOrderModal(false));
  };

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        const order = {
          carId: data.carId || valueCar || valueOrder?.carId?.name,
          cityId: data.cityId,
          color: data.color || valueColor,
          dateFrom: data.dateFrom,
          dateTo: data.dateTo,
          isFullTank: data.isFullTank,
          isNeedChildChair: data.isNeedChildChair,
          isRightWheel: data.isRightWheel,
          orderStatusId: data.orderStatusId || valueStatus,
          pointId: data.pointId,
          price: data.price,
        };

        if (valueOrder?.id && cookies.access_token) {
          dispatch(PutOrder(order, data.id, cookies.access_token));
        } else if (valueOrder?.id)
          dispatch(PutOrder(order, data.id, token?.access_token));

        dispatch(toggleOrderModal(false));
      })}
      className={style.form}
    >
      <div className={style.blockTextField}>
        <div className={style.name}>
          <p className={style.nameRate}>Название</p>
          {valueOrder?.id && (
            <Select
              displayEmpty
              size="small"
              fullWidth
              renderValue={() => {
                if (!valueCar) {
                  return <em>{valueOrder?.carId?.name}</em>;
                } else {
                  return <em>{valueCar?.name}</em>;
                }
              }}
              {...register("carId")}
            >
              <div style={{ height: "200px" }}>
                {!!models.length ? (
                  models.map((model: IModels) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setValueCar(model);
                        }}
                     
                        key={model?.id}
                        value={model?.name}
                      >
                        {model?.name}
                      </MenuItem>
                    );
                  })
                ) : (
                  <article className={style.modelLoad}>
                    <p className={style.text}>
                      Для выбора машины необходимо загрузить все авто
                    </p>
                    <CustomLoadingButton
                      loading={pending}
                      onClick={() => dispatch(FethcAllModelRequest())}
                    >
                      Загрузить
                    </CustomLoadingButton>
                  </article>
                )}
              </div>
            </Select>
          )}
        </div>
        <div className={style.period}>
          <p className={style.periodRate}>Статус заказа</p>
          {valueOrder?.id && (
            <Select
              displayEmpty
              size="small"
              fullWidth
              renderValue={() => {
                if (!valueStatus) {
                  return <em>{watch("orderStatusId")?.name}</em>;
                } else {
                  return <em>{valueStatus?.name}</em>;
                }
              }}
              {...register("orderStatusId")}
            >
              <div style={{ height: "200px" }}>
                {!!statuses.length &&
                  statuses.map((status: any) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setValueStatus(status);
                        }}
                        style={{
                          width: "200px",
                        }}
                        key={status?.id}
                        value={status?.name}
                      >
                        {status?.name}
                      </MenuItem>
                    );
                  })}
              </div>
            </Select>
          )}
        </div>
        <div className={style.period}>
          <p className={style.periodRate}>Цвет</p>
          {valueOrder?.carId?.id && (
            <Select
              displayEmpty
              size="small"
              fullWidth
              renderValue={() => {
                if (!valueColor) {
                  return <em>{valueOrder?.color}</em>;
                } else {
                  return <em>{valueColor}</em>;
                }
              }}
              {...register("color")}
            >
              <div style={{ height: "200px" }}>
                {!!valueOrder?.carId &&
                  valueOrder?.carId?.colors.map((color: any) => {
                    return (
                      <MenuItem
                        onClick={() => {
                          setValueColor(color);
                        }}
                        style={{
                          width: "200px",
                        }}
                        key={color}
                        value={color}
                      >
                        {color}
                      </MenuItem>
                    );
                  })}
              </div>
            </Select>
          )}
        </div>
        <div className={style.price}>
          <p className={style.priceRate}>Стоимость</p>
          <TextField
            placeholder="Введите стоимость"
            type="number"
            size="small"
            fullWidth
            autoComplete="off"
            className={style.priceInput}
            {...register("price")}
          />
        </div>
      </div>
      <div className={style.blockImgCheckBoxButton}>
        <img
          className={style.img}
          src={valueCar?.thumbnail?.path || valueOrder?.carId?.thumbnail?.path}
          alt=""
        />
        <div className={style.checkboxes}>
          <label className={style.customCheckbox}>
            <input
              type="checkbox"
              defaultChecked={valueOrder?.isFullTank}
              {...register("isFullTank")}
            />
            <span>Полный бак</span>
          </label>
          <label className={style.customCheckbox}>
            <input
              type="checkbox"
              defaultChecked={valueOrder?.isNeedChildChair}
              {...register("isNeedChildChair")}
            />
            <span>Детское кресло</span>
          </label>
          <label className={style.customCheckbox}>
            <input
              type="checkbox"
              defaultChecked={valueOrder?.isRightWheel}
              {...register("isRightWheel")}
            />
            <span>Правый руль</span>
          </label>
        </div>
        <article className={style.buttonGroup}>
          <button className={style.button} type="submit">
            <img className={style.icon} src={shape} alt="" />
            Готово
          </button>
          <button className={style.button} onClick={isCancelClick}>
            <img className={style.icon} src={cross} alt="" />
            Отмена
          </button>
          <button
            className={style.button}
            onClick={(e: any) => {
              e.preventDefault();
              dispatch(DeleteOrder(valueOrder?.id, cookies.access_token));
              dispatch(toggleOrderModal(false));
            }}
          >
            <img className={style.icon} src={basket} alt="" />
            Удалить
          </button>
        </article>
      </div>
    </form>
  );
};
