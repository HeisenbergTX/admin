import style from "./App.module.css";
import { AppRoute } from "./pages/Login/AppRoute";

function App() {
  return (
    <div className={style.app}>
      <AppRoute />
    </div>
  );
}

export default App;
