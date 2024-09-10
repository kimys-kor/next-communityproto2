import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import RightSideBanner from "../components/layouts/RightSideBanner";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";
import Headers from "@/app/components/layouts/headers/Headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers></Headers>
      <Container>
        <aside className="md:w-1/4 mt-40 hidden md:flex flex-col gap-8 max-w-[300px] h-full">
          <Login></Login>
          <Notice></Notice>
          <IconTabs></IconTabs>
        </aside>
        <section className="w-full mt-32 md:w-3/4">{children}</section>
        <RightSideBanner></RightSideBanner>
      </Container>
      <Footer />
    </>
  );
}
