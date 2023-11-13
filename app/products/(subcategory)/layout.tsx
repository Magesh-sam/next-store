import Categories from "@/components/Categories";
import SearchBar from "@/components/SearchBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-screen mt-20 flex">
      <Categories />
      <div className="flex flex-1 flex-col justify-center gap-3 ">
        <SearchBar />
        {children}
      </div>
    </div>
  );
}
