import React from "react";
import NaturalCurvesChart from "./index";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
`;

export default { title: "NaturalCurvesChart" };

const data = {
  id: "japan",
  color: "hsl(187, 70%, 50%)",
  data: [
    {
      x: "plane",
      y: 80
    },
    {
      x: "helicopter",
      y: 269
    },
    {
      x: "boat",
      y: 132
    },
    {
      x: "train",
      y: 295
    },
    {
      x: "subway",
      y: 134
    },
    {
      x: "bus",
      y: 107
    },
    {
      x: "car",
      y: 227
    },
    {
      x: "moto",
      y: 67
    },
    {
      x: "bicycle",
      y: 21
    },
    {
      x: "horse",
      y: 68
    },
    {
      x: "skateboard",
      y: 219
    },
    {
      x: "others",
      y: 275
    }
  ]
};

export const OneLine = () => (
  <Container>
    <NaturalCurvesChart data={[data]} />
  </Container>
);
