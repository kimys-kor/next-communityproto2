import Container from "../components/Container";
import RightSideBanner from "../components/layouts/RightSideBanner";
import AdminSide from "./(components)/AdminSide";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <aside className="md:w-1/6 hidden md:flex flex-col gap-10 max-w-[300px] h-full">
        <AdminSide />
      </aside>
      <section className="w-full md:w-5/6">{children}</section>
      <RightSideBanner></RightSideBanner>
    </Container>
  );
}
