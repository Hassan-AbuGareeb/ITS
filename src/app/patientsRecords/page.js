'use client'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
const PatientsRecords = () => {
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
  name:"Gender",
  selector : row=>row.gender,
  sortable: true,
},
{
  name:"Date Of Birth",
  selector : row=>row.dateOfBirth,
  sortable: true,
},
{
  name:"NID",
  selector : row=>row.NID,
  sortable: true,
},
{
  name:"vaccine name 1",
  selector : row=>row.vacc1,
  sortable: true,
},
{
  name:"vaccine name 2",
  selector : row=>row.vacc2,
  sortable: true,
}]);

const [data,setData] =useState([{
  id:1,
  firstName:"john",
  lastName:"doe",
  gender:"male",
  dateOfBirth:"21/5/2000",
  NID:"123456789",
  vacc1:"yes",
  vacc2:"no"
},
{
  id:1,
  firstName:"jane",
  lastName:"doe",
  gender:"female",
  dateOfBirth:"21/2/1998",
  NID:"123444689",
  vacc1:"no",
  vacc2:"no"
}])


  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='text-3xl px-5 py-10'>PatientsRecords</h1>
        <div className='max-w-[1200px] mx-auto py-[10px]'>
          <div className='flex gap-10 mb-3'>
            <button className='px-5 py-2 bg-cyan-800 rounded-xl'>Add</button>
            <button className='px-5 py-2 bg-cyan-800 rounded-xl'>Edit</button>
            <button className='px-5 py-2 bg-cyan-800 rounded-xl'>Delete</button>
          </div>
          <DataTable
          columns={columns}
          data= {data}
          selectableRows
          />
      </div>
    </div>
  )
}

export default PatientsRecords