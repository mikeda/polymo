import { useForm, SubmitHandler } from "react-hook-form";

import { TodoInput } from "@/graphql/generated/client";

import { TextResourceProps } from "@/locales/TextResourceProps";

import { Form } from "@/components/ui/form/Form";
import { FormInput } from "@/components/ui/form/FormInput";
import { Stack } from "@/components/ui/layout/Stack";

interface Props {
  t: TextResourceProps;
  createHandler: SubmitHandler<TodoInput>;
}

export const New = (props: Props) => {
  const { t, createHandler } = props;

  const form = useForm<TodoInput>({
    defaultValues: {
      title: "",
      priority: 0,
    },
  });

  return (
    <Form onSubmit={form.handleSubmit(createHandler)}>
      <Stack>
        <FormInput t={t} form={form} name="title" type="text" label={"title"} required />
        <FormInput t={t} form={form} name="priority" type="number" label={"priority"} required valueAsNumber />
        <button type="submit" className="btn btn-primary btn-block" disabled={form.formState.isSubmitting}>
          {t.create.action}
        </button>
      </Stack>
    </Form>
  );
};
