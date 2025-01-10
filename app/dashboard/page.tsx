"use client";

import { title } from "@/components/primitives";
import {Avatar, Card, CardHeader, CardBody, CardFooter, Select, SelectSection, SelectItem} from "@nextui-org/react";

export const devices = [
  {key: "key1", label: "Czujnik temperatury"},
  {key: "key2", label: "Ciśnieniomierz"},
  {key: "key3", label: "Klimatyzator"},
  {key: "key4", label: "Cos tam"},
];

export default function DashboardPage() {
  return (
    <div>
      <Card>
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://nextui.org/avatars/avatar-1.png"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">Name of IoT device</h4>
            </div>
          </div>
          <Select
            className="max-w-xs"
            items={devices}
            label="Favorite Animal"
            placeholder="Select an animal"
          >
            {(devices) => <SelectItem>{devices.label}</SelectItem>}
          </Select>
        </CardHeader>
        <CardBody>
          <p>Some example text.</p>

        </CardBody>
      </Card>
      <h1 className={title()}>This is dashboard page</h1>
    </div>
  );
}
