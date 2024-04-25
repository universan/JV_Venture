import Link from "next/link";

export default function Pagination({ currentPage, totalPages, setPage }) {
  return (
    <div className="flex flex-row justify-center">
      <ul className="inline-flex gap-1 text-sm">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;
          return (
            <li
              key={page}
              className={`rounded-2xl text-white mx-2 px-2 cursor-pointer ${
                currentPage === page ? " bg-blue-500" : "bg-yellow-500"
              }`}
            >
              <span onClick={()=>setPage(page)}>
                {page}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
