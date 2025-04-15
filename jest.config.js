/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testMatch: ["**/*.test.[jt]s?(x)"], // jest는 (filename).test.j(t)s 파일만 테스트
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
