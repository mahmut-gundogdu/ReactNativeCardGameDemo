export function recordError(error) {
  // info:We should store on central exception management system like sentry or firebase but now i just log on console
  console.error(error);
}
