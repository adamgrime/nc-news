import { useState } from "react";

export const SortBy = ({ setSort, setOrder }) => {
  const [currentValue, setCurrentValue] = useState();

  const handleClick = (sort) => {
    const [sortBy, order] = sort.split(" ");
    setSort(sortBy);
    setOrder(order);
    setCurrentValue(sort);
  };

  return (
    <div>
      <label>
        <select
        className="sort_by"
          value={currentValue}
          onChange={(event) => {
            handleClick(event.target.value);
          }}
        >
          <option value="" disabled selected>
            Sort By...
          </option>
          <option value="created_at asc">Oldest</option>
          <option value="created_at desc">Most Recent</option>
          <option value="comment_count asc">Fewest Comments</option>
          <option value="comment_count desc">Most Comment</option>
          <option value="votes asc">Least Votes</option>
          <option value="votes desc">Most Votes</option>
        </select>
      </label>
    </div>
  );
};
