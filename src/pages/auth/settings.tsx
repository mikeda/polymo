import { requireSignIn } from "@/services/server/auth";

import Page from "@/components/page/auth/settings";

export default Page;

export const getServerSideProps = requireSignIn;
