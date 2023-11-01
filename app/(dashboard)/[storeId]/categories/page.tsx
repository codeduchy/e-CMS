import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { CategoryColumn } from "./components/columns";
import CategoryClient from "./components/client";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billboard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="space-y-4">
      <CategoryClient data={formattedCategories} />
    </div>
  );
};

export default CategoriesPage;
