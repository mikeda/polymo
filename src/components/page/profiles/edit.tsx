import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { Profile, ProfileInput } from "@/graphql/generated/client";

import { graphql } from "@/libs/graphql";

import { notifyError } from "@/services/client/notifier";

import { Locale } from "@/locales/Locale";

import { useFetch } from "@/hooks/useFetch";

import { Layout } from "@/components/layout/Layout";

import { Loading } from "@/components/ui/app/Loading";
import { Stack } from "@/components/ui/layout/Stack";

import { Edit } from "@/components/part/profiles/Edit";

const Page = (): JSX.Element => {
  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  const updateHandler = async (input: ProfileInput) => {
    try {
      await graphql.updateProfile({ input });
      toast.success(t.update.succeed);
    } catch (error) {
      notifyError({ t, error: error as Error });
    }
  };

  const data = useFetch<Profile | null>(async () => {
    try {
      const query = await graphql.getProfile();
      return query.getProfile;
    } catch (e) {
      notifyError({ t, error: e as Error });
    }

    return null;
  });

  if (data == null) {
    return <Loading t={t} />;
  }

  return (
    <Layout>
      <Stack>
        <h1 className="text-2xl">{t.page.profiles.edit.title}</h1>
        <Edit t={t} item={data} updateHandler={updateHandler} />
      </Stack>
    </Layout>
  );
};

export default Page;
