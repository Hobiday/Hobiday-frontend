export const PERFORMANCE_KEYS = {
  all: ["performances"] as const,
  infiniteList: (selectedTab: number, genre: string) =>
    [...PERFORMANCE_KEYS.all, "infinite", selectedTab, genre] as const,
  byGenre: (genre: string, rowStart: string, rowEnd: string) =>
    [...PERFORMANCE_KEYS.all, "genre", genre, rowStart, rowEnd] as const,
  details: (id: string) => [...PERFORMANCE_KEYS.all, "details", id] as const,
  detailAll: (id: string) => [...PERFORMANCE_KEYS.all, "detail-all", id] as const,
  search: (keyword: string) => ["performances", "search", keyword],
  recommendSearchWord: ["recommandSearch"] as const,
  facility: ["facility"] as const,
};

export const USER_KEYS = {
  CHECK_NICKNAME: "check-nickname",
};

export const PROFILE_KEYS = {
  PROFILE_REGISTRATION: "profile-registration",
  myProfile: "myProfile",
  byId: ["profileById"] as const,
  updateMyProfile: ["updateMyProfile"] as const,
};

export const WISHLIST_KEYS = {
  all: ["wishlist"] as const,
  byGenre: (genre: string) => [...WISHLIST_KEYS.all, "genre", genre] as const,
};

export const COMMENT_KEYS = {
  all: ["comment"] as const,
};

export const FEED_KEYS = {
  all: ["feed"] as const,
  latest: () => [...FEED_KEYS.all, "latest"] as const,
  popular: () => [...FEED_KEYS.all, "popular"] as const,
  byProfileId: (profileId: number) => [...FEED_KEYS.all, "profileId", profileId] as const,
  byPerformId: (performanceId: string) => [...FEED_KEYS.all, "performanceId", performanceId] as const,
};

export const FOLLOW_KEYS = {
  followingList: ["followingList"] as const,
  followerList: ["followerList"] as const,
};
