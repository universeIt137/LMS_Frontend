// src/components/ModuleTable.jsx
import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useAxiosPublic from "../../../../hook/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import CreateModuleForm from "./CreateModuleForm";
import ModulesTable from "./ModuleTable";

const ModuleTable = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: singleCourse = {} } = useQuery({
    queryKey: ['singleCourse'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/single-course/${id}`);
      return res.data.data;
    }
  })


  console.log(singleCourse);
  const dummyModules = [
    {
        _id: "1",
        module_name: "Introduction to JavaScript",
        module_topic: "Basics of JS",
        total_days_module: 14,
        total_live_class: 3,
        total_assignment: 2,
        total_pre_record_video: 8,
        total_quiz_test: 1,
    },
    {
        _id: "2",
        module_name: "Advanced React",
        module_topic: "React Hooks, Context API",
        total_days_module: 21,
        total_live_class: 5,
        total_assignment: 4,
        total_pre_record_video: 12,
        total_quiz_test: 3,
    },
    {
        _id: "3",
        module_name: "Node.js & Express",
        module_topic: "Server-side Development",
        total_days_module: 18,
        total_live_class: 4,
        total_assignment: 3,
        total_pre_record_video: 10,
        total_quiz_test: 2,
    }
];

  return (
    <>
      <CreateModuleForm></CreateModuleForm>
      <ModulesTable modules={dummyModules}></ModulesTable>
    </>
  );
};

export default ModuleTable;
