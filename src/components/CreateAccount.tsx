import { HiMiniXMark } from "react-icons/hi2";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";
import { toast } from "react-toastify";

export default function CreateAccountModal({
  closeFunction,
}: {
  closeFunction: Function;
}) {
  const linkRegex =
    /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[^\s]*)?$/;

  const [platform, setPlatform] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [link, setLink] = useState("");

  const createAccount = () => {
    if (
      platform.length > 1 &&
      username.length > 3 &&
      password.length > 7 &&
      linkRegex.test(link)
    ) {
      const storageAccounts: any = localStorage.getItem("accounts");
      let accounts = storageAccounts ? JSON.parse(storageAccounts) : [];

      accounts.push({
        platform,
        username,
        password,
        link,
      });

      localStorage.setItem("accounts", JSON.stringify(accounts));

      toast.success(`${platform} account has been created.`);

      closeFunction();
    }
  };

  return (
    <div className="fixed bg-[#242424] top-0 left-0 flex justify-center items-center w-full h-full">
      <div className="relative max-w-[400px] bg-indigo-600/5 container border-indigo-600/30 border-2 rounded-2xl flex flex-col items-center justify-center gap-8 p-12">
        <HiMiniXMark
          onClick={() => {
            closeFunction();
          }}
          className="absolute top-4 right-4 text-2xl cursor-pointer text-indigo-400"
        />

        <Input
          onChange={(e: { target: { value: string } }) =>
            setPlatform(e.target.value)
          }
          invalidMessage="Platform's Name must be more than 1 charather"
          invalid={platform.length < 2}
          maxLength={30}
          placeholder="Platform's Name"
        />

        <Input
          onChange={(e: { target: { value: string } }) =>
            setUsername(e.target.value)
          }
          invalidMessage="Username/Mail/Phone must be more than 3 charather"
          invalid={username.length < 4}
          maxLength={20}
          placeholder="Username/Mail/Phone"
        />

        <Input
          onChange={(e: { target: { value: string } }) =>
            setPassword(e.target.value)
          }
          invalidMessage="Password must be more than 7 charather"
          maxLength={40}
          invalid={password.length < 8}
          placeholder="Password"
          type="password"
        />

        <Input
          onChange={(e: { target: { value: string } }) =>
            setLink(e.target.value)
          }
          maxLength={100}
          invalidMessage="Link must be a link"
          invalid={!linkRegex.test(link)}
          placeholder="Platform's logo (link)"
        />

        <Button
          disabled={
            !(
              platform.length > 1 &&
              username.length > 3 &&
              password.length > 7 &&
              linkRegex.test(link)
            )
          }
          onClick={() => createAccount()}
        >
          Create Account
        </Button>
      </div>
    </div>
  );
}
