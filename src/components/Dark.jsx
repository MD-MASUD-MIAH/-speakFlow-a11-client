import { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const Dark = () => {
  const { isDark, setIsDark } = use(AuthContext);

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <span>
        {isDark ? (
          <span>🌙 <span className="ml-1.5 font-bold">Dark</span></span>
        ) : (
          <span>
            ☀️ <span className="ml-1.5 font-bold">Light</span>
          </span>
        )}
      </span>
      <input
        type="checkbox"
        className="toggle "
        checked={isDark}
        onChange={() => setIsDark(!isDark)}
      />
    </label>
  );
};

export default Dark;
