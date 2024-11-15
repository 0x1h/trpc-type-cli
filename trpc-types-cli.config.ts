export default {
  // Path to your main router file
  routerFile: "./src/server/api/root.ts",

  // Where to output the generated types
  outputFile: "./schema/trpc-types.ts",

  // Optional: Additional paths to include
  includePaths: ["./src/server/api/**/*.ts"],

  // Optional: Paths to exclude
  excludePaths: ["**/*.test.ts"],

  // Optional: Base URL for imports
  baseUrl: "./src",

  // Optional: Generate additional client utilities
  generateClient: true,
};
