import { IoFastFoodOutline as RecipeFill } from "react-icons/io5";
import PageHeader from "@/components/layout/PageHeader";

export default function RecipeHeader({search,setSearch}) {
  return (
    <PageHeader
      search={search}
      setSearch={setSearch}
      title="Food Items"
      placeholder="Search for food items.."
      icon={<RecipeFill />}
    />
  );
}
