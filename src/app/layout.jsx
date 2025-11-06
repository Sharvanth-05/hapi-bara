import { McLaren } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import BottomBar from "@/components/layout/BottomBar";

const mcLaren = McLaren({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Recipes",
  description: "Make a recipe based on your mood",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mcLaren.className} bg-cover bg-center bg-no-repeat min-h-screen op`}
        //style={{ backgroundImage: "url('/images/background.png')" }}
      >
        <div>
          <Header />
        </div>
        <div className="pt-20">{children}</div>
        <div className="mt-[100px]">
          <BottomBar />
        </div>
      </body>
    </html>
  );
}