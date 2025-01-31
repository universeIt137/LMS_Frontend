import Swal from "sweetalert2";

export const updateAlert = async () => {
  return await Swal.fire({
    title: "Are you sure you want to update?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, update it!",
  });
};