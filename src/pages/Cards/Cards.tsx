import style from "./Cards.module.css";
import cn from "classnames";
import { Header } from "../../components/molecules/Header/Header";
import { CarCard } from "../../components/organisms/CarCard/CarCard";
import { Footer } from "../../components/molecules/Footer/Footer";
import { SideBar } from "../../components/atoms/SideBar/SideBar";
import { useSelector } from "react-redux";
import { getValueSideBar } from "../../store/modalWindows/selectors";
import { useEffect } from "react";

export const Cards = () => {
  const isOpenSideBar = useSelector(getValueSideBar);

  useEffect(() => {
    if (isOpenSideBar) {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  return (
    <section className={style.section}>
      <article
        className={cn(style.sideBar, {
          [style.active]: isOpenSideBar,
        })}
      >
        <SideBar />
      </article>
      <div className={style.blockContent}>
        <article className={style.header}>
          <Header />
        </article>
        <article className={style.content}>
          <CarCard />
        </article>
        <article className={style.footer}>
          <Footer />
        </article>
      </div>
    </section>
  );
};
