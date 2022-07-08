import { getProviders } from "next-auth/react";

import Page from "@/components/page/auth/signin";

export default Page;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
