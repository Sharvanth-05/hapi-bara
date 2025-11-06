import PageCard from "../layout/PageCards";
import { GiShoppingBag } from "react-icons/gi";

export default function MarketGrid({ items,addToCart }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10 px-4">
      {items.map((item) => (
        <PageCard
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          src={item.src}
          icon={<GiShoppingBag size={25}/>}
          onIconClick={() => addToCart(item)}
        />
      ))}
    </div>
  );
}