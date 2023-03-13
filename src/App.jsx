import { useEffect, useState } from "react";
import { TVshowAPI } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo_img from "./assets/image/logo.png";
import { BACKDROP_BASE_URL } from "./config";
import s from "./style.module.css";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";

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

  function setCurrentTVShowFromRecommendation(tvShow) {
    alert(JSON.stringify(tvShow));
  }

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
            <Logo
              image={logo_img}
              title="Watchwise"
              subtitle="Watch better, smarter"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {currentTVShow && (
          <TVShowListItem
            onClick={setCurrentTVShowFromRecommendation}
            tvShow={currentTVShow}
          />
        )}
      </div>
    </div>
  );
}
