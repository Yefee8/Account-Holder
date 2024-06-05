import Button from "../Button";

export default function Welcome({open}: {open: Function}) {
  return (
    <div className="flex container flex-col gap-6 items-start">
      <h1 className="text-2xl font-[600]">Welcome to Account Holder!</h1>

      <p className="text-base font-medium">
        Create your first account with the button!
      </p>

      <Button onClick={() => open()}>
        Create Account
      </Button>
    </div>
  );
}
