module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
    },
  },
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)"],
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  verbose: true,
};
