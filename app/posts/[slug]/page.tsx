import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "@/components/Comments";
import { useTheme } from "@/context/ThemeContext";

const getData = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }: { params: any }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="mt-20">
      <div className="flex items-center gap-12">
        <div className="flex-1">
          <h1 className="h2 mb-12">{data?.title}</h1>

          <div className="flex items-center gap-5">
            <div className="relative w-12 h-12">
              <Image
                src={data?.user?.image || ""}
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>

            <div className={`flex flex-col gap-1`}>
              <span className="md:text-xl font-medium">{data?.user.name}</span>
              <span className="">{data.createdAt}</span>
            </div>
          </div>
        </div>

        {data.img && (
          <div className="flex-1 relative h-[350px] hidden lg:block">
            <Image
              src={data.img || ""}
              alt=""
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}
      </div>

      <div className="flex gap-12">
        <div className="flex-5 mt-16 w-full lg:max-w-[75%]">
          <div
            className={`md:text-xl  mb-5 description`}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <Comments postSlug={slug} />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
