import React from 'react';

type PaginationProps = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void
}

const Pagination = ({page, pages, onPageChange}: PaginationProps) => {
    const pageNumber = [];
    for(let i =1; i <= pages; i++){
        pageNumber.push(i)
    }
  return (
    <div className='flex justify-center'>
        <div className="flex border border-slate-300">
            {pageNumber.map((number)=> (
                <li key={number} className={`px-2 py-1 ${page === number ? "bg-gray-200" : ""}`}>
                    <button onClick={()=>onPageChange(number)}>{number}</button>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Pagination;