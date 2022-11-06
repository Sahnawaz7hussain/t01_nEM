import React, { useState, useEffect } from "react";

import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searcParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searcParams.get("sortBy") || "");

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);
  };
  useEffect(() => {
    const params = {};
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [searcParams, sortBy, setSortBy]);
  // console.log("sort by", sortBy);
  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
        <div>
          <input
            defaultChecked={sortBy === "asc"}
            onChange={handleSortChange}
            type="radio"
            data-cy="asc"
            value="asc"
            name="sortBy"
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            defaultChecked={sortBy === "desc"}
            onChange={handleSortChange}
            type="radio"
            data-cy="desc"
            value="desc"
            name="sortBy"
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
