"use client";

import { Avatar, Card, CardBody, CardHeader, Select, SelectItem } from "@heroui/react";
import { Gear } from "@/components/icons";
import { Accordion, AccordionItem } from "@heroui/react";

const devices = [
  {
    key: "key1",
    name: "Czujnik temperatury",
    lastResponseTime: 50,
    lastResponseStatus: "Ok"
  },
  {
    key: "key2",
    name: "Ciśnieniomierz",
    lastResponseTime: 23,
    lastResponseStatus: "Error"
  },
  {
    key: "key3",
    name: "Klimatyzator",
    lastResponseTime: 42,
    lastResponseStatus: "OK"
  },
  {
    key: "key4",
    name: "Cos tam",
    lastResponseTime: 11,
    lastResponseStatus: "OK"
  }
];

const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const itemClasses = {
  base: "py-0 w-full",
  title: "font-normal text-medium",
  trigger: "px-2 py-0 rounded-lg h-14 flex items-center",
  indicator: "text-medium",
  content: "text-small px-2"
};

export default function SystemPage() {
  return (
    <div className="">
      <div className="inline-grid lg:grid-cols-2 gap-4 w-full">
        <Card className="w-full bg-myGrey max-h-lg min-h-lg">
          <CardHeader className="">
            <div className="mt-16 ml-8">
              {/*<Gear color="#dbdbdb">*/}
              {/*</Gear>*/}
            </div>
            <h3 className="text-md font-bold text-xl text-gray-300">
              SYSTEM OVERVIEW
            </h3>
          </CardHeader>
          <CardBody className="no-scrollbar">
            <Accordion variant="splitted" itemClasses={itemClasses}>
              {devices.map((item, index) => (
                <AccordionItem key={index} aria-label={item.key} title={item.name} className="bg-myLightGrey">
                  {defaultContent}
                </AccordionItem>
              ))}
            </Accordion>
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
      <div className="inline-grid lg:grid-cols-3 gap-4 w-full mt-4">
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
    </div>
  );
}
