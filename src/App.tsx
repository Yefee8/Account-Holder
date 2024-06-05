import { useEffect, useState } from "react";
import "./App.css";
import "./styles.css";
import CreateAccountModal from "./components/CreateAccount";
import Welcome from "./components/pages/Welcome";
import Accounts from "./components/pages/Accounts";
import EditAccountModal from "./components/EditAccount";
import DeleteAccountModal from "./components/DeleteAccount";

function App() {
  const [createAccountModal, setCreateAccountModal] = useState(false);
  const storage: any = localStorage.getItem("accounts");

  const [accounts, setAccounts] = useState(storage ? JSON.parse(storage) : []);
  const [editAccountModal, setEditAccountModal] = useState(false);
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const [activeIndex, setActiveIndex]: any = useState(null);

  useEffect(() => {
    const newStorage: any = localStorage.getItem("accounts");
    setAccounts(newStorage ? JSON.parse(newStorage) : []);
  }, [createAccountModal, editAccountModal, deleteAccountModal]);

  return (
    <div className="w-full flex items-center py-16 flex-col">
      <div className="container max-w-[900px]">
        {accounts.length > 0 ? (
          <Accounts
            openDelete={() => setDeleteAccountModal(true)}
            setActiveIndex={(i: number) => setActiveIndex(i)}
            openEdit={() => setEditAccountModal(true)}
            open={() => setCreateAccountModal(true)}
            accounts={accounts}
          />
        ) : (
          <Welcome open={() => setCreateAccountModal(true)} />
        )}
      </div>
      {createAccountModal && (
        <CreateAccountModal
          closeFunction={() => setCreateAccountModal(false)}
        />
      )}

      {editAccountModal && activeIndex !== null && (
        <EditAccountModal
          closeFunction={() => {
            setEditAccountModal(false);
            setActiveIndex(null);
          }}
          datas={accounts[activeIndex]}
          index={activeIndex}
        />
      )}

      {deleteAccountModal && activeIndex !== null && (
        <DeleteAccountModal
          closeFunction={() => {
            setDeleteAccountModal(false);
            setActiveIndex(null);
          }}
          platform={accounts[activeIndex].platform}
          index={activeIndex}
        />
      )}
    </div>
  );
}

export default App;
