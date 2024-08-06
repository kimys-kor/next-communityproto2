import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import RightSideBanner from "../components/layouts/RightSideBanner";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <aside className="md:w-1/4 hidden md:flex flex-col gap-8 max-w-[300px] h-full">
        <Login></Login>
        <Notice></Notice>
        <IconTabs></IconTabs>
      </aside>
      <section className="w-full md:w-3/4">{children}</section>
      <RightSideBanner></RightSideBanner>
    </Container>
  );
}
