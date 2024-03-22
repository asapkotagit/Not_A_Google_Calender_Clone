import { useContext } from "react";
import { Context } from "./Events";
export const EVENT_COLORS = ["red", "blue", "green"] as const;
export function useEvents() {
  const value = useContext(Context);
  if (value == null) {
    throw new Error("useEvents must be used within an Evenvtsprovider");
  }
  return value;
}
