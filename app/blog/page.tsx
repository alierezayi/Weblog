import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const BlogPage = ({
  searchParams,
}: {
  searchParams: { page: string; cat: string };
}) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className="my-16">
      <h1 className="bg-[#ffb04f45] py-2 px-3 text-lg text-center capitalize rounded-lg">
        @ {cat} Blog
      </h1>
      <div className="flex gap-12">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
