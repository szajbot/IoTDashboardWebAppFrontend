"use client";

import { title } from "@/components/primitives";
import { ResponsiveLine } from '@nivo/line'
import {Avatar, Card, CardHeader, CardBody, CardFooter, Select, SelectSection, SelectItem} from "@nextui-org/react";

export const devices = [
  {key: "key1", label: "Czujnik temperatury"},
  {key: "key2", label: "Ciśnieniomierz"},
  {key: "key3", label: "Klimatyzator"},
  {key: "key4", label: "Cos tam"},
];

export const exampleTheme = {
  "text": {
    "fontSize": 11,
    "fill": "#ffffff",
    "outlineWidth": 0,
    "outlineColor": "transparent"
  },
  "axis": {
    "domain": {
      "line": {
        "stroke": "#ffffff",
        "strokeWidth": 1
      }
    },
    "legend": {
      "text": {
        "fontSize": 12,
        "fill": "#ffffff",
        "outlineWidth": 0,
        "outlineColor": "transparent"
      }
    },
    "ticks": {
      "line": {
        "stroke": "#ffffff",
        "strokeWidth": 1
      },
      "text": {
        "fontSize": 11,
        "fill": "#ffffff",
        "outlineWidth": 0,
        "outlineColor": "transparent"
      }
    }
  },
  "grid": {
    "line": {
      "stroke": "#ffffff",
      "strokeWidth": 1
    }
  },
  "legends": {
    "title": {
      "text": {
        "fontSize": 11,
        "fill": "#ffffff",
        "outlineWidth": 0,
        "outlineColor": "transparent"
      }
    },
    "text": {
      "fontSize": 11,
      "fill": "#ffffff",
      "outlineWidth": 0,
      "outlineColor": "transparent"
    },
    "ticks": {
      "line": {},
      "text": {
        "fontSize": 10,
        "fill": "#ffffff",
        "outlineWidth": 0,
        "outlineColor": "transparent"
      }
    }
  },
  "annotations": {
    "text": {
      "fontSize": 13,
      "fill": "#ffffff",
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "link": {
      "stroke": "#000000",
      "strokeWidth": 1,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "outline": {
      "stroke": "#000000",
      "strokeWidth": 2,
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    },
    "symbol": {
      "fill": "#000000",
      "outlineWidth": 2,
      "outlineColor": "#ffffff",
      "outlineOpacity": 1
    }
  },
  "tooltip": {
    "wrapper": {},
    "container": {
      "background": "#ffffff",
      "color": "#333333",
      "fontSize": 12
    },
    "basic": {},
    "chip": {},
    "table": {},
    "tableCell": {},
    "tableCellValue": {}
  }
}

const LineChart = ({ data }) => {
  return (
    <div style={{ height: '400px' }}>
      <ResponsiveLine
        data={data}
        theme={ exampleTheme
        }
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        xFormat=" >-"
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
          truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            itemTextColor: '#ffffff',
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(100, 100, 100, .9)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(100, 100, 100, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};

const data2 = [
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'C', value: 15 },
  // Add more data as needed
];

const data = [
  {id: "japan", data: [{x: 1, y: 249}, {x: 2, y: 122}, {x: 3, y: 115}, {x: 4, y: 98}]},
  {id: "us", data: [{x: 1, y: 150}, {x: 2, y: 160}, {x: 3, y: 170}, {x: 4, y: 170}]},
  {id: "pooland", data: [{x: 1, y: 115}, {x: 2, y: 122}, {x: 3, y: 178}, {x: 4, y: 270}]}
];

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="md:flex w-full flex-nowrap gap-4">
        <Card className="w-full">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                {/*<h4 className="text-small font-semibold leading-none text-default-600">Name of IoT device</h4>*/}
              </div>
            </div>
            <Select
              className="max-w-xs"
              items={devices}
              color="secondary"
              placeholder="Select IoT device">
              {(devices) => <SelectItem>{devices.label}</SelectItem>}
            </Select>
          </CardHeader>
          <CardBody>
            <LineChart data={data}/>
          </CardBody>
        </Card>
        <Card className="w-full">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                src="https://nextui.org/avatars/avatar-1.png"
              />
              <div className="flex flex-col gap-1 items-start justify-center">
                {/*<h4 className="text-small font-semibold leading-none text-default-600">Name of IoT device</h4>*/}
              </div>
            </div>
            <Select
              className="max-w-xs"
              items={devices}
              color="secondary"
              placeholder="Select IoT device">
              {(devices) => <SelectItem>{devices.label}</SelectItem>}
            </Select>
          </CardHeader>
          <CardBody>
            <p>Some example text.</p>
          </CardBody>
        </Card>
      </div>
      <h1 className={title()}>This is dashboard page</h1>
    </div>
  );
}
