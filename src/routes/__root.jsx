import { createRootRoute, Outlet } from "@tanstack/react-router";
import Header from "../components/Header";
import FooterSection from "../pages/FooterSection";
import ScrollToHash from "../components/ScrollToHash";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen w-full flex flex-col items-center font-inria overflow-x-hidden">
      <Header />
      <ScrollToHash />
      <Outlet />
      <FooterSection />
    </div>
  ),
});
