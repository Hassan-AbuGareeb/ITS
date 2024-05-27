import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-[1000px]'>
      <div className='flex gap-10 py-64 px-[450px] '>
            <Link href={"/signup-signin"} className='px-5 py-1 bg-cyan-800 rounded-xl'>Sign in</Link>
            <Link href={"/patientsRecords"} className='px-5 py-1 bg-cyan-800 rounded-xl'>Patients records</Link>
            <Link href={"/manageUsers"} className='px-5 py-1 bg-cyan-800 rounded-xl'>manage users access</Link>
            <Link href={"dashboard"} className='px-5 py-1 bg-cyan-800 rounded-xl'>ITS dashboard</Link>
          </div>
      </div>
  
  );
}
