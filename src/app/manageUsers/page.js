'use client'
import React from 'react'
import DataTable from 'react-data-table-component';
import { useState } from 'react';

const ManageUsers = () => {
    const [columns, setColumns] = useState([{
        name:"first name",
        selector: row=>row.firstName,
        sortable: true,
      },
    {
      name:"last name",
      selector : row=>row.lastName,
      sortable: true,
    },
    {
      name:"NID",
      selector : row=>row.NID,
      sortable: true,
    },
    {
      name:"Role",
      selector : row=>row.role,
      sortable: true,
    }]);
    
    const [data,setData] =useState([{
      id:1,
      firstName:"john",
      lastName:"doe",
      NID:"123456789",
      role:"admin"
    },
    {
      id:1,
      firstName:"jane",
      lastName:"doe",
      NID:"123444689",
      role:"patient"
    }])



  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[1000px]'>
        <h1 className='text-3xl px-5 py-10'>Users </h1>
        <div className='max-w-[1200px] mx-auto py-[10px]'>
        <button className='px-5 py-2 bg-cyan-800 rounded-xl mb-5'>Edit</button>
          <DataTable
          columns={columns}
          data= {data}
          selectableRows
          selectableRowsRadio
          />
      </div>
      <div className='translate-x-[430px]'>
        <button className='self-end bg-cyan-600 py-2 px-5 mt-2 rounded-xl text-slate-200 font-extrabold'>Edit Users Role</button></div>
    </div>
  )
}

export default ManageUsers