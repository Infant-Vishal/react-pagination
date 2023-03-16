import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="d-flex flex-row justify-content-center">
      <ul class="pagination">
        {pageNumbers?.map((pageNumber) => {
          return (
            <li class="page-item" onClick={() => paginate(pageNumber)}>
              <a class="page-link" href="#">
                {pageNumber}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
