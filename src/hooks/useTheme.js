import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    if (!context) {
      throw Error("useAuthContext must be inside an ThemeProvider");
    }
  }
  return context;
}

export default useTheme;
