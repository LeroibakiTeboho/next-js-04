import { ClientComponentOne } from "@/app/components/client-component-one";
import { ServerComponentOne } from "@/app/components/server-component-one";

export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
