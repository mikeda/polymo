import { useRouter } from "next/router";

import { signOut } from "next-auth/react";

import { notifyError } from "@/services/client/notifier";

import { Locale } from "@/locales/Locale";

import { Layout } from "@/components/layout/Layout";

import { Stack } from "@/components/ui/layout/Stack";

import { SignOut } from "@/components/part/auth/SignOut";

const Page = (): JSX.Element => {
  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  const signOutHandler = async () => {
    try {
      await signOut();
      router.push("/");
    } catch (error) {
      notifyError({ t, error: error as Error });
    }
  };

  return (
    <Layout>
      <Stack>
        <h1 className="text-2xl">{t.page.auth.setting.title}</h1>
        <h2>{t.part.auth.signOut.action}</h2>
        <SignOut t={t} signOutHandler={signOutHandler} />
      </Stack>
    </Layout>
  );
};

export default Page;
