import type { Config } from "jest"

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files using ts-jest
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // Match test files
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Use your TypeScript config
    },
  },
}

export default config
