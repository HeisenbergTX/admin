import style from "./Cards.module.css";
import cn from "classnames";
import { Header } from "../../components/molecules/Header/Header";
import { CarCard } from "../../components/organisms/CarCard/CarCard";
import { Footer } from "../../components/molecules/Footer/Footer";
import { SideBar } from "../../components/atoms/SideBar/SideBar";
import { useSelector } from "react-redux";
import { getValueSideBar } from "../../store/modalWindows/selectors";
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { pullTokens } from "../../store/login/selectors";
import { useCookies } from "react-cookie";
import { ModelsCard } from "../../components/organisms/ModelsCard/ModelsCard";
import { Login } from "../Login/Login";

export const Cards = () => {
  const isOpenSideBar = useSelector(getValueSideBar);
  const tokens = useSelector(pullTokens);
  const navigate = useNavigate();
  const location = useLocation();
  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

  const arrTokens = [
    tokens?.access_token,
    tokens?.refresh_token,
    cookies.access_token,
    cookies.refresh_token,
  ];

  const tokenPresence = arrTokens.some((token) => token);

  useEffect(() => {
    if (tokens) {
      setCookie("access_token", tokens?.access_token, { path: "/" });
      setCookie("refresh_token", tokens?.refresh_token, { path: "/" });
      navigate("admin/card/models");
    }
  }, [tokens]);

  useEffect(() => {
    if (location.pathname !== "admin/login" && tokenPresence === false) {
      navigate("admin/login");
    }
  }, []);

  useEffect(() => {
    if (isOpenSideBar) {
      document.body.style.overflowY = "hidden";
    }
  }, []);

  return (
    <>
      {tokenPresence ? (
        <section className={style.section}>
          <aside
            className={cn(style.sideBar, {
              [style.active]: isOpenSideBar,
            })}
          >
            <SideBar />
          </aside>
          <div className={style.blockContent}>
            <article className={style.header}>
              <Header />
            </article>
            <article className={style.content}>
              <Routes>
                <Route path="/admin/card/">
                  <Route path="models" element={<ModelsCard />} />
                  <Route path="car" element={<CarCard />} />
                </Route>
              </Routes>
            </article>
            <article className={style.footer}>
              <Footer />
            </article>
          </div>
        </section>
      ) : (
        <Routes>
          <Route path="admin/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
};
