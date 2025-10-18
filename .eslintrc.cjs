module.exports = {
  root: true,
  extends: ["next", "next/core-web-vitals"],
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "no-restricted-syntax": [
          "error",
          {
            selector: "Literal[value=/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/u]",
            message: "Use design tokens instead of hard-coded hex colors.",
          },
        ],
      },
    },
  ],
}
