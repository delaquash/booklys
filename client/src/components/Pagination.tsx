import React from 'react';

type PaginationProps = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void
}

const Pagination = ({page, pages, onPageChange}: PaginationProps) => {
    const pageNumbers = [];
    for(let i =1; i <= pages; i++){
        pageNumbers.push(i)
    }
  return (
    <div className='flex justify-center'>
        <div className="flex border border-slate-300">
            {pageNumbers.map((pageNumber)=> (
                <li className={`px-2 py-1 ${page === pageNumber ? "bg-gray-200" : ""}`}>
                    <button onClick={()=>onPageChange(pageNumber)}>{pageNumber}</button>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Pagination;