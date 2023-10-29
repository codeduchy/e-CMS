import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

type ApiListProps = {
  entityName: string;
  entityIdName: string;
};

const ApiList: React.FC<ApiListProps> = ({ entityIdName, entityName }) => {
  const params = useParams();
  const origin = process.env.NEXT_PUBLIC_URL;
  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title={"GET"}
        description={`${baseUrl}/${entityName}`}
        variant={"public"}
      />
      <ApiAlert
        title={"GET"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant={"public"}
      />
      <ApiAlert
        title={"POST"}
        description={`${baseUrl}/${entityName}`}
        variant={"admin"}
      />
      <ApiAlert
        title={"PATCH"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant={"admin"}
      />
      <ApiAlert
        title={"DELETE"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
        variant={"admin"}
      />
    </>
  );
};

export default ApiList;
