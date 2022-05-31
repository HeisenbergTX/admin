import style from "./InfoOrder.module.css";

interface IProps {
  name: string;
  city: string;
  address: string;
  dateFrom: number;
  dateTo: number;
  color: string;
  rate: string;
}

export const InfoOrder: React.FC<IProps> = ({
  name,
  city,
  address,
  dateFrom,
  dateTo,
  color,
  rate,
}) => {
  const convertDateFrom = new Date(dateFrom).toLocaleString().slice(0, -3);
  const convertDateTo = new Date(dateTo).toLocaleString().slice(0, -3);

  return (
    <section className={style.section}>
      <p>
        <span className={style.modelName}>{name && `${name} в`} </span>
        <span className={style.address}>
          <span>{city && `${city},`}</span> {address}
        </span>
      </p>
      <p className={style.date}>
        {convertDateFrom} - {convertDateTo}
      </p>
      <p className={style.color}>
        Цвет: <span>{color}</span>
      </p>
      <p className={style.rate}>
        Тариф: <span>{rate}</span>
      </p>
    </section>
  );
};
