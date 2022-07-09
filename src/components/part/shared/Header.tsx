import Link from "next/link";

import { useSession } from "next-auth/react";

import { TextResourceProps } from "@/locales/TextResourceProps";

interface Props {
  t: TextResourceProps;
}

export const Header = (props: Props) => {
  const { t } = props;

  const { data: session } = useSession();

  return (
    <div className="bg-base-200">
      <div className="mx-auto flex max-w-screen-sm justify-between p-4">
        <div className="text-2xl font-bold">
          <Link href="/">Polymo</Link>
        </div>
        <div className="invisible">Hi, {session != null ? <Link href="/profiles/edit">{session.user?.name}</Link> : <Link href="/auth/signin">{t.part.auth.signIn.action}</Link>}</div>
      </div>
    </div>
  );
};
