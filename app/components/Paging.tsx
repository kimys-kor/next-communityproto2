import { FC } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

interface PagingProps {
  page: number;
  count: number;
  setPage: (pageNumber: number) => void;
}

const Paging: FC<PagingProps> = ({ page, count, setPage }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 px-4 text-gray-600 md:px-8">
      <div className="hidden justify-center sm:flex" aria-label="Pagination">
        <StyledPagination>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={
              <span className="inline-flex items-center gap-x-2">
                <MdOutlineKeyboardArrowLeft></MdOutlineKeyboardArrowLeft>
              </span>
            }
            nextPageText={
              <span className="inline-flex items-center gap-x-2">
                <MdOutlineKeyboardArrowRight></MdOutlineKeyboardArrowRight>
              </span>
            }
            firstPageText={
              <span className="inline-flex items-center gap-x-2">
                <MdOutlineKeyboardDoubleArrowLeft></MdOutlineKeyboardDoubleArrowLeft>
              </span>
            }
            lastPageText={
              <span className="inline-flex items-center gap-x-2">
                <MdOutlineKeyboardDoubleArrowRight></MdOutlineKeyboardDoubleArrowRight>
              </span>
            }
            onChange={setPage}
          />
        </StyledPagination>
      </div>
    </div>
  );
};

export default Paging;

const StyledPagination = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.35rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 2.5rem; /* Set the width of each button */
    height: 2.5rem; /* Set the height of each button */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
  }

  ul.pagination li a {
    border-radius: 1.5rem;
    text-decoration: none;
    color: black;
    width: 100%; /* Ensure the anchor tag takes up the full width */
    height: 100%; /* Ensure the anchor tag takes up the full height */
    display: flex;
    justify-content: center;
    align-items: center;
    transition:
      background-color 0.2s,
      color 0.2s;
  }

  ul.pagination li a:hover,
  ul.pagination li.active a {
    border-radius: 1.5rem;
    background-color: #e0e7ff;
    color: white;
    font-size: large;
  }

  ul.pagination li:first-child a,
  ul.pagination li:last-child a {
    border-radius: 1.5rem;
  }
`;
