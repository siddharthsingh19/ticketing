"use client";
import { useRouter } from "next/navigation";
import { MdDeleteForever } from "react-icons/md";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch(
      `https://ticketing-two.vercel.app/api/Tickets/${id}`,
      {
        method: "DELETE",
      }
    );
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <MdDeleteForever
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
