import Notice from "../components/cards/Notice";
import Container from "../components/Container";
import Footer from "@/app/components/layouts/Footer";
import RightSideBanner from "../components/layouts/RightSideBanner";
import Login from "../components/login/Login";
import IconTabs from "../components/sportRank/IconTabs";

import Headers from "@/app/components/layouts/headers/Headers";
import { Suspense } from "react";
import ProfileSk from "../components/skeleton/ProfileSk";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Headers></Headers>
      <div className="min-h-[100vh]">
        <Container>
          <aside className="md:w-1/4 mt-40 hidden md:flex flex-col gap-10 max-w-[300px] h-full">
            <Suspense fallback={<ProfileSk />}>
              <Login></Login>
            </Suspense>
            <Notice></Notice>
            <IconTabs></IconTabs>
          </aside>
          <section className="w-full mt-36 md:w-3/4">{children}</section>
          <RightSideBanner></RightSideBanner>
        </Container>
      </div>
      ``
      <Footer />
    </>
  );
}
