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

type Member = {
 [key: string]: string
}


export default function MembersTableData() {
  const [members, setMembers] = useState([])
  const [deleted, setDeleted] = useState(0);
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_SERVER}/members`).then(res => res.json()).then(data => {
    console.log(data);
    setMembers(data)
  })
  },[deleted])

   const handleDelete = (id: string) => {
        fetch(`${import.meta.env.VITE_SERVER}/member/${id}`, {
          method: "DELETE",
          headers: {"content-type": "application/json"}
        
        }).then(res => res.json()).then(data => {
          if(data?.deletedCount === 1){
            toast("member deleted")
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
                className="px-5 py-3 font-medium text-gray-500 text-center text-theme-xs dark:text-gray-400" >
                Name
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-ceneter text-theme-xs dark:text-gray-400"
              >
                Designation
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
               Mobile
              </TableCell>
            
          
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
              
           
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {members.map((member: Member, i) => (
              <TableRow key={member._id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                 <p className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{i+1}</p>
                </TableCell>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={member?.image}
                        alt={member?.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {member.name}
                      </span>
                    
                    </div>
                  </div>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-center text-theme-sm dark:text-gray-400">
                  {member?.designation}
                </TableCell>

                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {member?.mobile}
                </TableCell>

                
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                     member?.type === "Committee" ? "success" : "warning"
                    }
                  >
                    {member?.type}
                  </Badge>
                </TableCell>
                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                <div onClick={() => handleDelete(member?._id)} className=" cursor-pointer flex justify-center items-center w-full h-full">
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
