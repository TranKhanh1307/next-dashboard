import AcmeLogo from "../ui/common/acme-logo";
import Form from "../ui/login/form";

export default function Page() {
  return (
    <main className="w-full max-w-[400px] space-y-4">
      <AcmeLogo />
      <Form />
    </main>
  );
}
