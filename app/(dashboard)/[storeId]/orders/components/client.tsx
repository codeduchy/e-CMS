"use client";
import { useParams, useRouter } from "next/navigation";
import { OrderColumn, columns } from "./columns";
import Heading from "@/components/heading";
import { Separator } from "@/components/ui/separator";
import DataTable from "@/components/data-table";

type OrderClientProps = {
  data: OrderColumn[];
};

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
