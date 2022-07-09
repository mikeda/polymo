import Link from "next/link";

import { Todo } from "@/graphql/generated/client";

import { TextResourceProps } from "@/locales/TextResourceProps";

import { Stack } from "@/components/ui/layout/Stack";

interface Props {
  t: TextResourceProps;
  items: Todo[];
}

export const Index = (props: Props) => {
  const { t, items } = props;

  if (items.length <= 0) {
    return <p>{t.list.empty}</p>;
  }

  return (
    <Stack>
      {items.map((item) => {
        const { id } = item;

        return (
          <Link key={id} href={`/todos/${id}`} passHref>
            <div className="block cursor-pointer rounded border border-base-content p-2 font-mono text-base-content">{id}</div>
          </Link>
        );
      })}
    </Stack>
  );
};
