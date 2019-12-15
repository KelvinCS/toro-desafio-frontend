import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { colors } from "../../styles/variables";

interface Props {
  data: Array<{
    id: string | number;
    color?: string;
    data: Array<{
      x: number | string | Date;
      y: number | string | Date;
    }>;
  }>;
}

function NaturalCurvesChart({ data }: Props) {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      xScale={{ type: "point" }}
      yScale={{ type: "linear", stacked: true, min: "auto", max: "auto" }}
      curve="natural"
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      colors={[colors.primary]}
      enablePoints={false}
      pointSize={10}
      pointColor="#00ADD2"
      pointBorderWidth={2}
      pointBorderColor="#00ADD2"
      pointLabel="y"
      pointLabelYOffset={-12}
      enableArea={true}
      isInteractive={false}
      useMesh={true}
      legends={[]}
    />
  );
}

export default NaturalCurvesChart;
