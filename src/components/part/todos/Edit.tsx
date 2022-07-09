import { useForm, SubmitHandler } from "react-hook-form";

import { TodoInput } from "@/graphql/generated/client";

import { TextResourceProps } from "@/locales/TextResourceProps";

import { Form } from "@/components/ui/form/Form";
import { FormInput } from "@/components/ui/form/FormInput";
import { Stack } from "@/components/ui/layout/Stack";

interface Props {
  t: TextResourceProps;
  item: TodoInput;
  updateHandler: SubmitHandler<TodoInput>;
  deleteHandler: () => void;
}

export const Edit = (props: Props) => {
  const { t, item, updateHandler, deleteHandler } = props;

  const form = useForm<TodoInput>({
    defaultValues: {
      title: item.title,
      priority: item.priority,
    },
  });

  return (
    <Stack>
      <Form onSubmit={form.handleSubmit(updateHandler)}>
        <Stack>
          <FormInput t={t} form={form} name="title" type="text" label={"title"} required />
          <FormInput t={t} form={form} name="priority" type="number" label={"priority"} required valueAsNumber />
          <button type="submit" className="btn btn-primary btn-block" disabled={form.formState.isSubmitting}>
            {t.update.action}
          </button>
        </Stack>
      </Form>
      <button type="submit" className="btn btn-secondary btn-block" onClick={deleteHandler}>
        {t.delete.action}
      </button>
    </Stack>
  );
};
