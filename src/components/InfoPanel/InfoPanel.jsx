import React from "react";
import "./InfoPanel.css";
import { useCurveProgressStore } from "../../store/useCurveProgressStore";

const progressMoveRanges = {
  gather: { start: 0, end: 0.235 },
  submit: { start: 0.235, end: 0.49 },
  receive: { start: 0.49, end: 0.74 },
  create: { start: 0.74, end: 1 },
};

const seasonImages = {
  gather: "/images/blue.webp",
  submit: "/images/green.webp",
  receive: "/images/orange.webp",
  create: "/images/red.webp",
};

const getSeason = (scrollProgress) => {
  for (const [season, range] of Object.entries(progressMoveRanges)) {
    if (scrollProgress >= range.start && scrollProgress <= range.end) {
      return season;
    }
  }
  return "gather";
};

const InfoPanel = () => {
  const scrollProgress = useCurveProgressStore((state) => state.scrollProgress);
  const season = getSeason(scrollProgress);

  return (
    <div
      className="info-panel"
      style={{ backgroundImage: `url(${seasonImages[season]})` }}
    >
      <div className="info-box">
        <div className="info-box-content">
          <div className="info-box-title">Credits:</div>

          <p className="info-intro">
            This website was built for a Codrops article and{" "}
            <a
              href="https://www.youtube.com/watch?v=AD01pTr3gvw&feature=youtu.be"
              target="_blank"
              rel="noreferrer"
            >
              YouTube Tutorial
            </a>
            !! Name and details are anonymoized for privacy. See full list of
            credits, code and Blender files on{" "}
            <a
              href="https://github.com/andrewwoan/aimee-weis-papercraft-world"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ! Feel free to reach out if you got any questions or just wanna say
            hi!
          </p>

          <ul className="info-list">
            {/* <li>
              UI Design inspired by
              <a
                href="https://github.com/wehwayne2/lucys-bedroom-interface"
                target="_blank"
                rel="noreferrer"
              >
                Xianyao Wei
              </a>
              .
            </li>
            <li>
              3D curve system inspired by{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">
                this open source repo
              </a>
              .
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
