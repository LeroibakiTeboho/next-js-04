"use client";

import React, { useState } from "react";

function DashboardPage() {
  const [name, setname] = useState("");
  console.log('Dashboard client component');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input className="text-black" value={name} type="text" onChange={(e) => setname(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

export default DashboardPage;
