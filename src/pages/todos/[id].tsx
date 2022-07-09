import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { DefaultUser } from "next-auth";
import { getSession } from "next-auth/react";

import Page from "@/components/page/todos/edit";

export default Page;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<
  | {
      props: {
        user: DefaultUser & {
          id: string;
        };
        id: string | string[];
      };
    }
  | { redirect: { destination: string; permanent: boolean } }
> => {
  const { req, query } = context;

  const session = await getSession({ req });

  const user = session?.user;

  if (user == null || query.id == null) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return { props: { user, id: query.id } };
};
