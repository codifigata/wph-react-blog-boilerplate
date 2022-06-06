export default function ThemeReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "theme/toggle":
      if (state === "dark") {
        return "light";
      } else {
        return "dark";
      }
    default:
      throw new Error("Theme variable not recognized.");
  }
}
