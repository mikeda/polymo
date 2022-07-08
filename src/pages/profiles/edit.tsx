import { requireSignIn } from "@/services/server/auth";

import Page from "@/components/page/profiles/edit";

export default Page;

export const getServerSideProps = requireSignIn;
