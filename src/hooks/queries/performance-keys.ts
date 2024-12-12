export const performanceKeys = {
  all: ["performances"] as const,
  details: (id: string) => [...performanceKeys.all, "details", id] as const,
};
