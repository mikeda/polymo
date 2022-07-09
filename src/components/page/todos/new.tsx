import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { TodoInput } from "@/graphql/generated/client";

import { graphql } from "@/libs/graphql";

import { notifyError } from "@/services/client/notifier";

import { Locale } from "@/locales/Locale";

import { Layout } from "@/components/layout/Layout";

import { New } from "@/components/part/todos/New";

const Page = () => {
  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  const createHandler = async (input: TodoInput) => {
    try {
      await graphql.createTodo({ input });
      toast.success(t.create.succeed);
      router.push("/todos");
    } catch (error) {
      notifyError({ t, error: error as Error });
    }
  };

  return (
    <Layout>
      <New t={t} createHandler={createHandler} />
    </Layout>
  );
};

export default Page;
