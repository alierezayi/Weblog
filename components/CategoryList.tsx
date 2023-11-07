import Image from "next/image";
import Link from "next/link";

type Category = {
  _id: string;
  slug: string;
  title: string;
  img?: string;
};

const categorysColors = [
  "bg-[#da85c731]",
  "bg-[#ffb04f45]",
  "bg-[#7fb88133]",
  "bg-[#5e4fff31]",
  "bg-[#57c4ff31]",
  "bg-[#ff795736]",
];

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="my-12 text-xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.map((category: Category, i: number) => (
          <Link
            key={category._id}
            href={`/blog?cat=${category.slug}`}
            className={`w-full sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] flex items-center gap-[15px] capitalize
            h-[60px] justify-center rounded-lg hover:scale-105 transition ${categorysColors[i]}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className="rounded-full h-[32px]"
              />
            )}

            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
