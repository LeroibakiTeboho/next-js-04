import fs from "fs";

export const ServerComponentOne = () => {
  fs.readFileSync("app/components/server-component-one.tsx", "utf-8");
  return <h1>ServerComponentOne</h1>;
};