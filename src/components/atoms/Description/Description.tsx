import style from "./Description.module.css";

export const Description = () => {
  return (
    <section className={style.section}>
      <p className={style.description}>Описание</p>
      <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        sapiente esse corrupti officiis similique dolorem inventore! Consequatur
        nam veritatis necessitatibus, culpa quisquam voluptatibus distinctio
        odio libero ut assumenda iure sit.
      </p>
    </section>
  );
};
