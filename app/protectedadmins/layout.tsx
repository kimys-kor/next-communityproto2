import Container from "../components/Container";
import AdminSide from "./(components)/AdminSide";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-[100vh] flex">
        <aside className="md:w-1/4 hidden md:flex flex-col gap-10 max-w-[300px] min-h-[100vh]">
          <AdminSide />
        </aside>
        <section className="w-full md:w-3/4">{children}</section>
      </div>
    </>
  );
}
