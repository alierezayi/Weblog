import Menu from "@/components/Menu";
import Image from "next/image";
import Comments from "@/components/Comments";

const SinglePage = async ({ params }) => {
  const { slug } = params;

  return (
    <div className="{styles.container}">
      <div className="{styles.infoContainer}">
        <div className="{styles.textContainer}">
          <h1 className="{styles.title}">{/* {data?.title} */}</h1>

          <div className="{styles.user}">
            {/* {data?.user?.image && ( */}
            <div className="{styles.userImageContainer}">
              <Image
                src="/images/p1.png"
                alt=""
                fill
                className="{styles.avatar}"
              />
            </div>
            {/* )} */}
            <div className="{styles.userTextContainer}">
              <span className="{styles.username}">
                {/* {data?.user.name} */}
              </span>
              <span className="{styles.date}">01.01.2024</span>
            </div>
          </div>
        </div>
        {/* {data?.img && ( */}
        <div className="{styles.imageContainer}">
          <Image src="/images/p1.png" alt="" fill className="{styles.image}" />
        </div>
        {/* )} */}
      </div>
      <div className="{styles.content}">
        <div className="{styles.post}">
          <div
            className="{styles.description}"
            // dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <div className="{styles.comment}">
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
