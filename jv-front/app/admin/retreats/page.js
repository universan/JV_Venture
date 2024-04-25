import RetreatList from "@/components/admin/RetreatList";

export default function AdminRetreatsList() {
  return (
    <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl text-yellow-900 font-bold text-center relative mt-16 mb-4 dark:text-gray-300">List of Retreats</p>
        <p className="text-1xl text-yellow-500 font-base text-center relative  dark:text-gray-200">(Click image to edit the retreat detail)</p>
        <hr />
        <RetreatList />
    </div>
  );
}
