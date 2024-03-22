{
  /*CC is short for Concatenate Classes */
}
export function cc(...classes: unknown[]) {
  return classes.filter((c) => typeof c === "string").join(" ");
}
