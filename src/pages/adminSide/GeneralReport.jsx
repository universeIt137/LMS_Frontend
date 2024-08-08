import { MdNextWeek } from "react-icons/md";
import { useState } from 'react';
import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'
import { MdDateRange } from "react-icons/md";


const GeneralReport = () => {
  const [date, setDate] = useState(null)
  console.log(date)

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 justify-center">
        <div className="col-span-3 text-3xl text-black"> Dashboard Report</div>
        <div className=" grid grid-cols-3  gap-1 border items-center bg-[#365884] text-[#B7C4D5] rounded-2xl overflow-hidden"> 
          <div className="text-2xl ml-4 hidden md:block w-2"> <MdNextWeek /> </div>

          <select className="select col-span-2 text-center select-bordered join-item bg-[#365884] focus:outline-none">
            <option selected>Filter</option>
            <option>Sci-fi</option>
            <option>Drama</option>
            <option>Action</option>
          </select>

        </div>
        <div className="flex gap-2 justify-center items-center bg-[#365883] rounded-lg px-3">
        <MdDateRange className="text-2xl"  ></MdDateRange>
        <DtPicker className="border-none " onChange={setDate}></DtPicker>
          
        </div>
      </div>
    </div>
  );
};

export default GeneralReport;