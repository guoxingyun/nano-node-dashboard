import React from "react";
import carlos from "./404.gif";

export default function NotFound() {
  return (
    <div className="row my-5 mx-0">
      <div className="col text-center">
        <h1 className="display-1">404</h1>
        <h3 className="mb-4">This page doesn't seem to exist</h3>
        <img src={carlos} className="mw-100" />
      </div>
    </div>
  );
}
