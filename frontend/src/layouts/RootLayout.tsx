import { Outlet } from "react-router";
import { Navbar } from "../components/navigations/Navbar";

export const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-1">
        <Outlet />
      </main>

      {/* Footer later */}
    </div>
  );
};
