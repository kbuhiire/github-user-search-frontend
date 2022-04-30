import { useEffect, useState } from "react";
import { setUserResults, setIsLoading } from "../redux/user";

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export const fetchUsers = (dispatch, searchName, users_per_page, page) => {
  dispatch(setIsLoading(true));
  getUsers(searchName, users_per_page, page)
    .then((results) => {
      dispatch(setUserResults({ users: results }));
      dispatch(setIsLoading(false));
    })
    .catch(() => {
      dispatch(setIsLoading(false));
      dispatch(setUserResults({ users: [] }));
    });
};

const getUsers = (name, per_page, page) => {
  return fetch(
    `http://localhost:9000/users?name=${name}&per_page=${per_page}&page=${page}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
      return [];
    });
};
