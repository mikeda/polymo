import { requireSignIn } from "@/services/server/auth";

import Page from "@/components/page/todos/new";

export default Page;

export const getServerSideProps = requireSignIn;
