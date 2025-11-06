import { LiaShoppingBagSolid as BagOutline } from "react-icons/lia";
import PageHeader from "@/components/layout/PageHeader";

export default function CartHeader({search,setSearch}) {
  return (
    <PageHeader
      search={search}
      setSearch={setSearch}
      title="Bag"
      placeholder="Search in bag.."
      icon={<BagOutline />}
    />
  );
}