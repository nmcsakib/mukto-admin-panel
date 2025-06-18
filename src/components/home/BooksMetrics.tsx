import { useEffect, useState } from "react";
import {
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function BooksMetrics() {
  const [books, setBooks] = useState(0)
  const [members, setMembers] = useState(0)
  // console.log(import.meta.env.VITE_SERVER);
     useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/All-books`).then(res => res.json()).then(data => {
    
          // setShowBooks(data[0].slice(0, 8))
          setBooks(data[1])
          // setLength(data[1])
          console.log(data)
        })
      }, [])
     useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/members`).then(res => res.json()).then(data => {
    
          // setShowBooks(data[0].slice(0, 8))
          setMembers(data.length)
          // setLength(data[1])
          console.log(data)
        })
      }, [])
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <GroupIcon className="text-gray-800 size-6 dark:text-white/90" />
        </div>

        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Members
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {members}
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
          <BoxIconLine className="text-gray-800 size-6 dark:text-white/90" />
        </div>
        <div className="flex items-end justify-between mt-5">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Books
            </span>
            <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
              {books}
            </h4>
          </div>

          <Badge color="success">
            <ArrowUpIcon />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
}
