import { useRouter } from "next/router";

import { BuiltInProviderType } from "next-auth/providers";
import { signIn, ClientSafeProvider, LiteralUnion } from "next-auth/react";

import { Locale } from "@/locales/Locale";

import { Layout } from "@/components/layout/Layout";

import { Stack } from "@/components/ui/layout/Stack";

const Page = ({ providers }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> }): JSX.Element => {
  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  return (
    <Layout>
      <Stack>
        <h1 className="text-2xl">{t.page.auth.signIn.title}</h1>
        <>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  signIn(provider.id, {
                    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
                  })
                }
                className="btn btn-primary btn-block"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </>
      </Stack>
    </Layout>
  );
};

export default Page;
