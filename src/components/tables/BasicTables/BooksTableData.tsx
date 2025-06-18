import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


type Order = {
  _id: string
  bookName: string
  price: number
  picture: string
  writer: string
  publications: string
  type: string,
  pages: number
}


export default function BooksTableData() {
  const [books, setBooks] = useState([])
  const [deleted, setDeleted] = useState(0);
// console.log(import.meta.env.VITE_SERVER);
   useEffect(() => {
      fetch(`${import.meta.env.VITE_SERVER}/All-books`).then(res => res.json()).then(data => {
  
        // setShowBooks(data[0].slice(0, 8))
        setBooks(data[0])
        // setLength(data[1])
        console.log(data)
      })
    }, [deleted])

    const handleDelete = (id: string) => {
      fetch(`${import.meta.env.VITE_SERVER}/book/${id}`, {
        method: "DELETE",
        headers: {"content-type": "application/json"}
      
      }).then(res => res.json()).then(data => {
        if(data?.deletedCount === 1){
          toast("book deleted")
          console.log(data)
          setDeleted(prev => prev + 1)
        }
      })
      console.log(id);
    }
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                No.
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Book Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
               Writer
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
               Publications
              </TableCell>
          
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Pages
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Price
              </TableCell>
           
           
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {books.map((book: Order, i) => (
              <TableRow key={book._id}>
                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {i+1}
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={ !book?.picture ? 'https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png' : book?.picture }
                        alt={book?.bookName}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {book.bookName}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {book?.writer}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {book?.publications}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {book?.pages}
                </TableCell>
                
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                     book?.price < 100 ? "success" : 200 > book?.price ? "warning" : 'error'
                    }
                  >
                    {book?.price}
                  </Badge>
                </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <div onClick={() => handleDelete(book?._id)} className=" cursor-pointer flex justify-center items-center w-full h-full">
                  <Badge
                    size="sm"
                    color="error"
                  >
                    X
                  </Badge>
                </div>
                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
