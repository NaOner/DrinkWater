module.exports = {
    "*.{ts,tsx}": (filenames) => [`prettier --write ${filenames.join(" ")}`, "tsc --noEmit"],
    "*.{js,jsx,json,md}": ["prettier --write"],
};
