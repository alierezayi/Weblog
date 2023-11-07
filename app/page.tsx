import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="container mx-auto">
      <Featured />

      <CategoryList />

      <div className="flex gap-12">
        <CardList page={page} />

        <Menu />
      </div>
    </div>
  );
}
