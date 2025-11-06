import { BsShop } from "react-icons/bs";
import PageHeader from "@/components/layout/PageHeader";

export default function MarketHeader({search,setSearch}) {
  return (
    <PageHeader
      search={search}
      setSearch={setSearch}
      title="Market"
      placeholder="Search recipe to get items.."
      icon={<BsShop />}
    />
  );
}
