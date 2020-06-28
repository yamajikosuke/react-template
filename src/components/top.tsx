import React from "react";
import { Link } from "react-router-dom";

export const Top: React.FC = (): JSX.Element => {
  return (
    <>
      <div>Top page</div>
      <div>
        <Link to={"/p1"}>page1</Link>
      </div>
      <div>
        <Link to={"/p2"}>page2</Link>
      </div>
    </>
  );
};

export default Top;
