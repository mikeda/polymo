import { useRouter } from "next/router";

import { toast } from "react-toastify";

import { Todo, TodoInput } from "@/graphql/generated/client";

import { graphql } from "@/libs/graphql";

import { notifyError } from "@/services/client/notifier";

import { Locale } from "@/locales/Locale";

import { useFetch } from "@/hooks/useFetch";

import { Layout } from "@/components/layout/Layout";

import { Loading } from "@/components/ui/app/Loading";

import { Edit } from "@/components/part/todos/Edit";

interface Props {
  id: string;
}

const Page = (props: Props) => {
  const { id } = props;

  const router = useRouter();

  const { t } = new Locale({ locale: router.locale });

  const updateHandler = async (input: TodoInput) => {
    try {
      await graphql.updateTodo({ id, input });
      toast.success(t.update.succeed);
    } catch (error) {
      notifyError({ t, error: error as Error });
    }
  };

  const deleteHandler = async () => {
    try {
      await graphql.deleteTodo({ id });
      toast.success(t.delete.succeed);
      router.push("/todos");
    } catch (error) {
      notifyError({ t, error: error as Error });
    }
  };

  const data = useFetch<Todo | null>(async () => {
    try {
      const query = await graphql.getTodo({ id });
      return query.getTodo;
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
      <Edit t={t} item={data} updateHandler={updateHandler} deleteHandler={deleteHandler} />
    </Layout>
  );
};

export default Page;
