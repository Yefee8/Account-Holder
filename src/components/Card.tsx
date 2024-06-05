import { useState } from "react";
import {
  FaKey,
  FaRegEye,
  FaRegEyeSlash,
  FaRegTrashAlt,
  FaUserAlt,
} from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { toast } from "react-toastify";

export default function Card({
  platform,
  username,
  password,
  link,
  index,
  openEdit,
  setActiveIndex,
  openDelete,
}: {
  platform: string;
  username: string;
  password: string;
  link: string;
  index: number;
  openEdit: Function;
  setActiveIndex: Function;
  openDelete: Function;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-[300px] relative shadow-indigo-500 hover:shadow-2xl duration-150 flex-col bg-indigo-400/10 flex gap-12 border-2 p-8 border-indigo-500/40 rounded-2xl">
      <div className="absolute flex gap-4 right-4 top-4">
        <FaPen
          onClick={() => {
            setActiveIndex(index);
            openEdit();
          }}
          className="text-base cursor-pointer"
        />
        <FaRegTrashAlt
          onClick={() => {
            setActiveIndex(index);
            openDelete();
          }}
          className="text-base cursor-pointer"
        />
      </div>
      <div className="flex gap-4 flex-wrap items-center">
        <img
          src={link}
          className="w-12 -translate-x-1 rounded-lg font-[600] h-12 object-cover object-center"
        />

        <h2 className="text-xl font-medium max-w-[160px] overflow-hidden text-ellipsis">
          {platform}
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4">
          <FaUserAlt className="text-2xl" />

          <span
            onClick={() => {
              navigator.clipboard.writeText(username);
              toast.success(
                `Your ${platform} Username / Mail / Phone has been copied to the clickboard.`
              );
            }}
            className="text-base cursor-pointer font-medium max-w-[188px] overflow-hidden text-ellipsis"
          >
            {username}
          </span>
        </div>

        <div className="flex flex-wrap gap-4">
          <FaKey className="text-2xl" />

          <div className="text-sm w-[calc(100%-40px)] font-medium flex gap-1 items-center justify-between">
            <div
              onClick={() => {
                navigator.clipboard.writeText(password);
                toast.success(
                  `Your ${platform} password has been copied to the clickboard.`
                );
              }}
              className="cursor-pointer max-w-[160px] text-ellipsis overflow-hidden"
            >
              {showPassword ? password : password.replace(/./g, "*")}
            </div>

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              {showPassword ? (
                <FaRegEye className="text-2xl" />
              ) : (
                <FaRegEyeSlash className="text-2xl" />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
