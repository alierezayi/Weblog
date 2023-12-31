import Card from "./Card";
import Pagination from "./Pagination";

interface CardListProps {
  page: number;
  cat?: string;
}

const getData = async (page: number, cat: string) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList: React.FC<CardListProps> = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat as string);

  const POST_PER_PAGE = 4;
  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className="flex-[5]">
      <h1 className="my-12 text-xl font-bold">Recent Posts</h1>

      <div className="">
        {posts?.map((post: any, i: number) => (
          <Card key={i} data={post} />
        ))}
      </div>

      {page > 4 && (
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      )}
    </div>
  );
};

export default CardList;
