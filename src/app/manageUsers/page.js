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
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h1 className='text-3xl px-5 py-10'>Users </h1>
        <div className='max-w-[1200px] mx-auto py-[10px]'>
          <DataTable
          columns={columns}
          data= {data}
          selectableRows
          selectableRowsRadio
          />
      </div>
    </div>
  )
}

export default ManageUsers