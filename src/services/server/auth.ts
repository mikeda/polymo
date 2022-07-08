import { GetServerSidePropsContext, NextApiRequest } from "next";

import { getSession } from "next-auth/react";

export async function getUser(req: NextApiRequest) {
  const session = await getSession({ req });

  const user = session?.user;

  if (user == null) {
    throw Error("Not found a user.");
  }

  return user;
}

export async function requireSignIn({ req }: GetServerSidePropsContext) {
  const session = await getSession({ req });

  const user = session?.user;

  if (user == null) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }

  return { props: { user } };
}
