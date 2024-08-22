import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import RightSideBanner from "../components/layouts/RightSideBanner";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
