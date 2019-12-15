import React from "react";
import NaturalCurvesChart from "./index";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
`;

export default { title: "NaturalCurvesChart" };

const data = [
  {
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
  },
  {
    id: "france",
    color: "hsl(142, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 295
      },
      {
        x: "helicopter",
        y: 119
      },
      {
        x: "boat",
        y: 170
      },
      {
        x: "train",
        y: 29
      },
      {
        x: "subway",
        y: 205
      },
      {
        x: "bus",
        y: 218
      },
      {
        x: "car",
        y: 125
      },
      {
        x: "moto",
        y: 59
      },
      {
        x: "bicycle",
        y: 189
      },
      {
        x: "horse",
        y: 2
      },
      {
        x: "skateboard",
        y: 8
      },
      {
        x: "others",
        y: 168
      }
    ]
  },
  {
    id: "us",
    color: "hsl(50, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 129
      },
      {
        x: "helicopter",
        y: 97
      },
      {
        x: "boat",
        y: 10
      },
      {
        x: "train",
        y: 94
      },
      {
        x: "subway",
        y: 190
      },
      {
        x: "bus",
        y: 27
      },
      {
        x: "car",
        y: 242
      },
      {
        x: "moto",
        y: 144
      },
      {
        x: "bicycle",
        y: 140
      },
      {
        x: "horse",
        y: 114
      },
      {
        x: "skateboard",
        y: 68
      },
      {
        x: "others",
        y: 275
      }
    ]
  },
  {
    id: "germany",
    color: "hsl(40, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 92
      },
      {
        x: "helicopter",
        y: 144
      },
      {
        x: "boat",
        y: 170
      },
      {
        x: "train",
        y: 2
      },
      {
        x: "subway",
        y: 217
      },
      {
        x: "bus",
        y: 2
      },
      {
        x: "car",
        y: 214
      },
      {
        x: "moto",
        y: 190
      },
      {
        x: "bicycle",
        y: 259
      },
      {
        x: "horse",
        y: 175
      },
      {
        x: "skateboard",
        y: 244
      },
      {
        x: "others",
        y: 298
      }
    ]
  },
  {
    id: "norway",
    color: "hsl(323, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 168
      },
      {
        x: "helicopter",
        y: 145
      },
      {
        x: "boat",
        y: 260
      },
      {
        x: "train",
        y: 28
      },
      {
        x: "subway",
        y: 241
      },
      {
        x: "bus",
        y: 216
      },
      {
        x: "car",
        y: 286
      },
      {
        x: "moto",
        y: 272
      },
      {
        x: "bicycle",
        y: 209
      },
      {
        x: "horse",
        y: 185
      },
      {
        x: "skateboard",
        y: 138
      },
      {
        x: "others",
        y: 241
      }
    ]
  }
];

export const MultipleLines = () => (
  <Container>
    <NaturalCurvesChart data={data} />
  </Container>
);

export const OneLine = () => (
  <Container>
    <NaturalCurvesChart data={[data[0]]} />
  </Container>
);
