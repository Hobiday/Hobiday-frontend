export const performanceKeys = {
  all: ["performances"] as const,
  details: (id: string) => [...performanceKeys.all, "details", id] as const,
  byGenre: (genre: string, rowStart: string, rowEnd: string) =>
    [...performanceKeys.all, "genre", genre, rowStart, rowEnd] as const,
};
