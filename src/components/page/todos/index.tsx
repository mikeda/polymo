import Link from "next/link";
import { useRouter } from "next/router";

import { Todo } from "@/graphql/generated/client";

import { graphql } from "@/libs/graphql";

import { notifyError } from "@/services/client/notifier";

import { Locale } from "@/locales/Locale";

import { useFetch } from "@/hooks/useFetch";

import { Layout } from "@/components/layout/Layout";

import { Loading } from "@/components/ui/app/Loading";
import { Stack } from "@/components/ui/layout/Stack";

import { Index } from "@/components/part/todos/Index";

const Page = () => {
  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  const data = useFetch<Todo[] | null>(async () => {
    try {
      const query = await graphql.getTodos();
      return query.getTodos;
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
        <Index t={t} items={data} />
        <Link href="/todos/new" passHref>
          <span className="btn btn-primary btn-block cursor-pointer">{t.addNew.action}</span>
        </Link>
      </Stack>
    </Layout>
  );
};

export default Page;
