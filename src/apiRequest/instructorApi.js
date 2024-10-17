import { create } from "zustand";
import useAxiosPublic from "../hook/UseAxiosPublic";
const axiosPublic = useAxiosPublic()

const instructorStore = create((set) => ({
    instructorNameDropDown: null,
    instructorNameDropDownDropDownApi: async () => {
        let res = await axiosPublic.get(`/instructors-name`);
        if (res.data["status"] === 'success') {
            set({ instructorNameDropDown: res.data.data });
        } else {
            return false;
        }
    },
    instructorCreateApi: async function (payload) {
        let res = await axiosPublic.post(`/instructor/create`, payload);
        if (res.data["status"] === 'success') {
            return res.data["status"];
        } else {
            return false;
        }
    },
    instructorDataByCourseId: [],
    instructorDataByCourseIdApi: async (courseId) => {
        let res = await axiosPublic.get(`/instructor-by/course-id/${courseId}`);
        if (res.data["status"] === 'success') {
            set({ instructorDataByCourseId: res.data.data });
        } else {
            return false;
        }
    },
    singleInstructorData: [],
    singleInstructorDataApi: async (id) => {
        let res = await axiosPublic.get(`/single/instructor/${id}`);
        if (res.data["status"] === 'success') {
            set({ singleInstructorData: res.data.data });
        } else {
            return false;
        }
    },
    instructorUpdateApi: async function (id, payload) {
        let res = await axiosPublic.put(`/instructor/update/${id}`, payload);
        if (res.data["status"] === 'success') {
            return res.data["status"];
        } else {
            return false;
        }
    },

    allInstructorDataList : [],
    allInstructorDataListApi : async function(){
        let res = await axiosPublic.get(`/all/instructor`);
        if(res.data["status"] ==='success'){
            set({ allInstructorDataList : res.data.data });
        } else{
            return false;
        }
    },
    instructorDeleteApi: async function (id) {
        let res = await axiosPublic.delete(`/instructor/delete/${id}`);
        if(res.data["status"] ==='success'){
            return res.data["status"];
        } else{
            return false;
        }
    },

}));

export default instructorStore;