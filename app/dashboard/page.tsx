import { title } from "@/components/primitives";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";

export default function DashboardPage() {
  return (
    <div>
      <Card>
        <CardBody>
          <p>Some example text.</p>
          
        </CardBody>
      </Card>
      <h1 className={title()}>This is dashboard page</h1>
    </div>
  );
}
