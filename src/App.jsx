import { useEffect, useState } from "react";
import { TVshowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";

TVshowAPI.fetchPopulars();
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const populars = await TVshowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log("*-*", currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>Detail</div>
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}
