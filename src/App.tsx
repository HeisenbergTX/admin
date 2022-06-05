import style from "./App.module.css";
import { Cards } from "./pages/Cards/Cards";

function App() {
  return (
    <div className={style.app}>
      <Cards />
    </div>
  );
}

export default App;
