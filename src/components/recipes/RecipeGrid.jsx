import PageCard from "../layout/PageCards";
import { BsShop as MarketOutline } from "react-icons/bs";
export default function RecipeGrid({ items }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10 px-4">
      {items.map((item) => (
        <PageCard
          key={item.name}
          name={item.name}
          category={item.category}
          src={item.src}
          icon={<MarketOutline size={25} />}
        />
      ))}
    </div>
  );
}