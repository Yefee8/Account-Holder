import { FaPlus } from "react-icons/fa6";
import Card from "../Card";

export default function Accounts({
  accounts,
  open,
  openEdit,
  setActiveIndex,
  openDelete
}: {
  accounts: {
    platform: string;
    username: string;
    password: string;
    link: string;
  }[];
  open: Function;
  openEdit: Function;
  setActiveIndex: Function;
  openDelete: Function
}) {
  return (
    <div className="flex container flex-col gap-6 items-start">
      <h1 className="text-2xl font-[600]">Your Accounts</h1>

      <div className="container custom-scrollbar py-6 overflow-x-auto overflow-y-hidden">
        <div
          className="flex flex-row gap-4"
          style={{
            width: `${
              300 * accounts.length + 16 * Math.floor(accounts.length / 2)
            }px`,
          }}
        >
          {accounts.map((account, i) => (
            <Card openDelete={openDelete} setActiveIndex={setActiveIndex} openEdit={openEdit} index={i} key={i} {...account} />
          ))}
        </div>
      </div>

      <div onClick={() => open()} className="mt-6 flex flex-col gap-6">
        <h1 className="text-2xl font-[600]">Create a New Account</h1>
        <div className="w-[300px] shadow-indigo-500 hover:shadow-2xl duration-150 cursor-pointer bg-indigo-400/10 p-8 border-indigo-500/40 rounded-2xl flex justify-center items-center h-[228px]">
          <FaPlus className="text-4xl text-indigo-500" />
        </div>
      </div>
    </div>
  );
}
