import { FC } from "react";
import styled from "styled-components";
import Pagination from "react-js-pagination";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

// activePage : 현재 페이지
// itemsCountPerPage : 한 페이지 당 보여줄 아이템 수
//  totalItemsCount : 총 아이템 수
// pageRangeDisplayed : paginator에서 보여줄 최대 페이지 범위
// prevPageText : 이전 페이지로 가기를 나타내는 텍스트
// nextPageText : 다음 페이지로 가기를 나타내는 텍스트
// onChange : 페이지가 바뀔 때 핸들링하는 함수

interface PagingProps {
  page: number;
  size: number;
  totalElements: number;
  setPage: (pageNumber: number) => void;
}

const Paging: FC<PagingProps> = ({ page, size, totalElements, setPage }) => {
  return (
    <div className="max-w-screen-xl mx-auto mt-1 px-4 text-gray-600 md:px-8 mb-5">
      <div className="justify-center sm:flex" aria-label="Pagination">
        <StyledPagination>
          <Pagination
            activePage={page}
            itemsCountPerPage={size}
            totalItemsCount={totalElements}
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
            onChange={(pageNumber) => {
              setPage(pageNumber);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
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

  ul.pagination {
    display: flex;
    gap: 0; /* Remove gaps so only border width separates items */
  }

  ul.pagination li {
    display: inline-block;
    width: 2.3rem; /* Set the width of each button */
    height: 2.3rem; /* Set the height of each button */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875rem;
  }

  ul.pagination li a {
    border: 1px solid #ccc; /* Add border to each button */
    border-left: 0; /* Remove the left border for all buttons */
    border-right: 0; /* Remove the right border for all buttons */
    border-radius: 0; /* Set border-radius to 0 for internal buttons */
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

  /* First button should have left border and rounded left */
  ul.pagination li:first-child a {
    border-left: 1px solid #ccc;
    border-radius: 1.5rem 0 0 1.5rem; /* Round left corners */
  }

  /* Last button should have right border and rounded right */
  ul.pagination li:last-child a {
    border-right: 1px solid #ccc;
    border-radius: 0 1.5rem 1.5rem 0; /* Round right corners */
  }

  /* Active and hover states */
  ul.pagination li a:hover,
  ul.pagination li.active a {
    background-color: #e0e7ff;
    color: white;
  }

  /* Ensure the first and last buttons are rounded correctly */
  ul.pagination li:first-child a:hover,
  ul.pagination li:last-child a:hover,
  ul.pagination li:first-child a.active,
  ul.pagination li:last-child a.active {
  }
`;
