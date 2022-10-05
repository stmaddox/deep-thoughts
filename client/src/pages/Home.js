import React from "react";
import { userQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";
import { QueryInfo } from "@apollo/client/core/QueryInfo";

const Home = () => {
  const { loading, data } = userQuery(QUERY_THOUGHTS);

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Home;
