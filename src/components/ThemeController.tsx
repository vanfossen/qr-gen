import { Moon, Sun } from "lucide-react";

function ThemeController() {
  return (
    <>
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          className="theme-controller"
          value={
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "light"
              : "dark"
          }
        />

        <Sun className="swap-off" />

        <Moon className="swap-on" />
      </label>
    </>
  );
}

export default ThemeController;
