import prismadb from "@/lib/prismadb";
import SizeForm from "./components/size-form";

const SizesPage = async ({ params }: { params: { sizeId: string } }) => {
  const size = await prismadb.size.findUnique({
    where: {
      id: params.sizeId,
    },
  });

  return (
    <div className="space-y-4">
      <SizeForm initialData={size} />
    </div>
  );
};

export default SizesPage;
