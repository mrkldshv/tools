import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import * as fs from "node:fs";

const ROMECLI_ROOT = resolve(fileURLToPath(import.meta.url), "../..");
const MANIFEST_PATH = resolve(ROMECLI_ROOT, "package.json");

const rootManifest = JSON.parse(
	fs.readFileSync(MANIFEST_PATH).toString("utf-8"),
);

let version = rootManifest["version"];
if (!version.includes("-")) {
	version += "-next";
}

if (
	typeof process.env.GITHUB_SHA !== "string" ||
	process.env.GITHUB_SHA === ""
) {
	throw new Error("GITHUB_SHA environment variable is undefined");
}

version += `.${process.env.GITHUB_SHA.substring(0, 7)}`;
rootManifest["version"] = version;

const content = JSON.stringify(rootManifest);
fs.writeFileSync(MANIFEST_PATH, content);

console.log(`version=${version}`);