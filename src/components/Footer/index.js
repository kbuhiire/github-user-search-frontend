import Pagination from "react-responsive-pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsersPerPage,
  setPaginationPage,
} from "redux/user";
import { fetchUsers } from "utils";

const Footer = () => {
  const {
    users: { total_count },
    users_per_page,
    page,
    search_name,
  } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onPageChange = (page_no) => {
    dispatch(setPaginationPage({ page: page_no }));
    if (search_name) {
      fetchUsers(dispatch, search_name, users_per_page, page_no);
    }
  };

  const onPageNumberSelect = (e) => {
      const per_page = parseInt(e.target.value, 10);
    dispatch(
      setUsersPerPage({
        users_per_page: per_page,
      })
    );
    if (search_name) {
      fetchUsers(dispatch, search_name, per_page, page);
    }
  };

  return (
    <div className="footer">
      <div className="pagination-container">
        <Pagination
          total={Math.ceil(total_count / users_per_page) || 1}
          current={page}
          onPageChange={(page) => onPageChange(page)}
          maxWidth={20}
        />
        <div className="select">
          <select
            onChange={(e) => onPageNumberSelect(e)}
            className="custom-select"
            aria-label="Select Users Per Page"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
          </select>
          <span className="focus"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
