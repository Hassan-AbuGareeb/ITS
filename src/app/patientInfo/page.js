'use client'
import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
const PatientsRecords = () => {
  const [columns, setColumns] = useState([{
    name:"Vaccination",
    selector: row=>row.vaccination,
    sortable: true,
  },
{
  name:"Date",
  selector : row=>row.date,
  sortable: true,
},
{
  name:"Doctor name",
  selector : row=>row.name,
  sortable: true,
},
{
  name:"Place",
  selector : row=>row.place,
  sortable: true,
},
]);

const [data,setData] =useState([{
  id:1,
  vaccination:"vaccine1",
  date:"23/4/2024",
  name:"Dr. Mohammed",
  place:"University Hospital",

},
{
  id:2,
  vaccination:"vaccine2",
  date:"10/4/2024",
  name:"Dr. Raed",
  place:"University Hospital",
}])


  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[1000px]'>
      <h1 className='text-3xl px-5 py-10'>Patient Info</h1>
        <div className='max-w-[1200px] mx-auto py-[10px]'>
          <div className='flex flex-col gap-5 mb-10'>
            <div className='font-bold text-2xl'>Name: <span>Abdullah Alawad</span></div>
            <div className='font-bold text-2xl'>Age: <span>22</span></div>
            <div className='font-bold text-2xl'>NID: <span>200056689</span></div>
          </div>
          <DataTable
          columns={columns}
          data= {data}
          selectableRows
          />
      </div>
      <button className='p-5 rounded-2xl bg-teal-800 m-10 text-slate-200 font-extrabold hover:bg-teal-600'>Generate Report</button>
    </div>
  )
}

export default PatientsRecords