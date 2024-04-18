import React from 'react';

type PaginationProps = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void
}

const Pagination = ({}: PaginationProps) => {
  return (
    <div>Pagination</div>
  )
}

export default Pagination