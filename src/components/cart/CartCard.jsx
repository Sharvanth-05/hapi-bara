// "use client";

// import Image from "next/image";
// import { MdDelete } from "react-icons/md";
// import { FaBolt } from "react-icons/fa";

// export default function CartCard({ name, category, src, price, onDelete, onBuy }) {
//   return (
//     <div className="shadow-neutral-300/30 shadow-2xl flex flex-col items-center justify-between min-h-[200px] w-[45%] md:w-[15%] min-w-[120px] max-w-[180px] border-2 border-neutral-100 rounded-xl bg-white p-2">
//       <div className="relative">
//         <Image
//           src={src || "/images/placeholder.png"}
//           alt={name}
//           height={500}
//           width={500}
//           className="w-full rounded-lg object-cover brightness-[0.85] mask-b-from-16"
//         />
//       </div>
//       <div className="flex justify-between items-center w-full mt-2">
//         <div className="flex flex-col text-left mt-2">
//           <h2 className="text-[1em] font-semibold text-neutral-700">{name}</h2>
//           <p className="bg-neutral-200/50 mt-1 text-neutral-400 text-xs rounded-sm text-center p-1 px-2 whitespace-nowrap">
//             {category}
//           </p>
//           <p className="text-sm font-semibold text-amber-500 mt-1">₹{price}</p>
//         </div>
//         <div className="flex flex-col gap-2 items-end">
//           <button
//             onClick={onBuy}
//             className="border h-8 w-fit shadow-amber-500/50 shadow text-amber-400 text-xs px-2 rounded-lg flex items-center gap-1 hover:text-white hover:bg-amber-400 transition-all duration-300"
//           >
//             <FaBolt size={14} />
//             Buy Now
//           </button>
//           <button
//             onClick={onDelete}
//             className="border h-8 w-fit shadow-red-500/50 shadow text-red-400 text-xs px-2 rounded-lg flex items-center gap-1 hover:text-white hover:bg-red-400 transition-all duration-300"
//           >
//             <MdDelete size={14} />
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }