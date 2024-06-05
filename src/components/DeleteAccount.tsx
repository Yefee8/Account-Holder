import { toast } from "react-toastify";
import Button from "./Button";

export default function DeleteAccountModal({
  index,
  closeFunction,
  platform,
}: {
  index: number;
  closeFunction: Function;
  platform: string;
}) {
  return (
    <div className="fixed bg-[#242424] top-0 left-0 flex justify-center items-center w-full h-full">
      <div className="relative max-w-[400px] bg-indigo-600/5 container border-indigo-600/30 border-2 rounded-2xl flex flex-col items-center justify-center gap-8 p-12">
        <h1 className="text-2xl text-indigo-500 font-medium">Are You Sure?</h1>

        <div className="flex gap-4">
          <Button
            onClick={() => {
              const storageAccounts: any = localStorage.getItem("accounts");
              let accounts = storageAccounts ? JSON.parse(storageAccounts) : [];

              // Indexteki eski account'u silip yerine yenisini eklemek
              accounts.splice(index, 1);

              localStorage.setItem("accounts", JSON.stringify(accounts));

              toast.success(`${platform} account has been deleted.`);

              closeFunction();
            }}
          >
            Yes
          </Button>

          <Button onClick={() => closeFunction()}>No</Button>
        </div>
      </div>
    </div>
  );
}
