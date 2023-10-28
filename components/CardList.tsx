import Card from "./Card";
import Pagination from "./Pagination";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <h1 className="my-12 text-xl font-bold">Recent Posts</h1>

      <div className="{styles.posts}">
          <Card  />
          <Card  />
          <Card  />
          <Card  />
      </div>
      <Pagination  />
    </div>
  );
};

export default CardList;
