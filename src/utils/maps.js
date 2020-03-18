export const positionMap = new Map()
  .set("top", { top: "16px" })
  .set("center", {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    margin: "0"
  })
  .set("bottom", { bottom: "16px" });

export const colorMap = new Map()
  .set("light", "#f2f2f2")
  .set("dark", "#0F151C");

export const backgroundMap = new Map()
  .set("light", "rgba(255, 255, 255, 0.41)")
  .set("dark", "rgba(0, 0, 0, 0.41)")
  .set("none", null);
