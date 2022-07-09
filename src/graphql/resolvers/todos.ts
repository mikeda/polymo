import { NextApiRequest } from "next";

import { MutationCreateTodoArgs, MutationUpdateTodoArgs, MutationDeleteTodoArgs, QueryGetTodoArgs, RequireFields } from "@/graphql/generated/resolvers";

import { db } from "@/libs/db";

import { getUser } from "@/services/server/auth";

export async function getTodos(req: NextApiRequest) {
  const user = await getUser(req);

  const data = await db.todo.findMany({ where: { userId: user.id } });

  if (data == null) {
    throw Error("Cound not select data.");
  }

  const res = data.map((findData) => {
    return {
      id: findData.id,
      userId: findData.userId,
      title: findData.title,
      priority: findData.priority,
    };
  });

  return res;
}

export async function getTodo(req: NextApiRequest, args: RequireFields<QueryGetTodoArgs, "id">) {
  const user = await getUser(req);

  const findData = await db.todo.findUnique({ where: { id: args.id } });

  if (findData?.userId != user.id) {
    throw Error("Cound not select data.");
  }

  const res = {
    id: findData.id,
    userId: findData.userId,
    title: findData.title,
    priority: findData.priority,
  };

  return res;
}

export async function createTodo(req: NextApiRequest, args: RequireFields<MutationCreateTodoArgs, "input">) {
  const user = await getUser(req);

  const findData = await db.todo.create({
    data: {
      userId: user.id,
      title: args.input.title,
      priority: args.input.priority,
    },
  });

  const res = {
    id: findData.id,
    userId: findData.userId,
    title: findData.title,
    priority: findData.priority,
  };

  return res;
}

export async function updateTodo(req: NextApiRequest, args: RequireFields<MutationUpdateTodoArgs, "id" | "input">) {
  const user = await getUser(req);

  const targetData = await db.todo.findUnique({ where: { id: args.id } });

  if (targetData?.userId != user.id) {
    throw Error("Cound not update data.");
  }

  const findData = await db.todo.update({
    where: { id: args.id },
    data: {
      userId: user.id,
      title: args.input.title,
      priority: args.input.priority,
    },
  });

  if (findData == null) {
    throw Error("Cound not update data.");
  }

  const res = {
    id: findData.id,
    userId: findData.userId,
    title: findData.title,
    priority: findData.priority,
  };

  return res;
}

export async function deleteTodo(req: NextApiRequest, args: RequireFields<MutationDeleteTodoArgs, "id">) {
  const user = await getUser(req);

  const targetData = await db.todo.findUnique({ where: { id: args.id } });

  if (targetData?.userId != user.id) {
    throw Error("Cound not update data.");
  }

  const findData = await db.todo.delete({
    where: { id: args.id },
  });

  if (findData == null) {
    throw Error("Cound not update data.");
  }

  const res = {
    id: findData.id,
    userId: findData.userId,
    title: findData.title,
    priority: findData.priority,
  };

  return res;
}
