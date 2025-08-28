import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="sticky top-0">
      <div className="flex h-12 items-center justify-between bg-gray-50/70 px-4 backdrop-blur-md">
        <NavLink
          to="/"
          className="transition-all hover:text-sky-700 active:scale-95"
        >
          <h1 className="text-lg font-semibold tracking-tight">
            🛝 Playground
          </h1>
        </NavLink>
        <div>
          <button>

          </button>
        </div>
      </div>
    </nav>
  );
};
