import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDebounce, fetchUsers } from "../../utils";
import { setSearchName } from "redux/user";
const Search = () => {
  const { users_per_page, page } = useSelector((state) => state.user);
  const [q, setQ] = useState("");
  const dispatch = useDispatch();

  const debouncedSearchName = useDebounce(q, 500);
  useEffect(() => {
    if (debouncedSearchName) {
      dispatch(setSearchName({ search_name: debouncedSearchName }));
      fetchUsers(dispatch, debouncedSearchName, users_per_page, page);
    }
  }, [debouncedSearchName, dispatch, page, users_per_page]);

  return (
    <>
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            data-testid="search-input"
            name="search-form"
            id="search-form"
            className="search-input"
            placeholder="Search Github Users"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </label>
      </div>
      <div className="marginBtm"></div>
    </>
  );
};

export default Search;
