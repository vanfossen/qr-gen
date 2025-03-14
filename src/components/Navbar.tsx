import ThemeController from "./ThemeController";

function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="px-4 text-xl font-semibold">qr-gen</a>
      </div>
      <div className="navbar-end px-4">
        <ThemeController />
      </div>
    </nav>
  );
}

export default Navbar;
