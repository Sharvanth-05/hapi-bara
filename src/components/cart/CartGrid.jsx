import CartCard from "./CartCard";

export default function CartGrid({ items, onDelete, onBuy }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-10 px-4">
      {items.map((item, index) => (
        <CartCard
          key={index}
          name={item.name}
          category={item.category}
          src={item.src}
          price={item.price}
          onDelete={() => onDelete(index)}
          onBuy={() => onBuy(item)}
        />
      ))}
    </div>
  );
}