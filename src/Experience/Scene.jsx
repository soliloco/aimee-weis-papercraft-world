import React, { Suspense } from "react";

import MovingCharacters from "./models/Moving_Characters";
import Gather from "./models/Scene_1_Winter";
import Submit from "./models/Scene_2_Spring";
import Receive from "./models/Scene_3_Summer";
import Create from "./models/Scene_4_Fall";
import CustomCamera from "./components/CustomCamera";

const Scene = () => {
  return (
    <>
      <CustomCamera />
      <Suspense fallback={null}>
        <MovingCharacters />
        <Gather />
        <Submit />
        <Receive />
        <Create />
      </Suspense>
    </>
  );
};

export default Scene;
