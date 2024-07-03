import React from "react";
import { serverSideFuction } from "../utils/server-utils";

function ServerRoutePage() {
  const result = serverSideFuction();
  console.log("Server route rendered");

  return (
    <>
      <div>Server Route Page</div>
      <p>{result}</p>
    </>
  );
}

export default ServerRoutePage;
