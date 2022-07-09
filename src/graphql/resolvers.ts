import { Resolvers } from "@/graphql/generated/resolvers";
// eslint-disable-next-line import/order
import { getProfile, updateProfile } from "@/graphql/resolvers/profiles";

export const resolvers: Resolvers = {
  Query: {},
  Mutation: {},
};

if (resolvers.Query == null || resolvers.Mutation == null) {
  throw Error("Can not found resolvers");
}

resolvers.Query.getProfile = async (_parent, args, _context) => {
  const data = getProfile(_context.req);
  return data;
};

resolvers.Mutation.updateProfile = async (_parent, args, _context) => {
  const data = await updateProfile(_context.req, args);
  return data;
};

// eslint-disable-next-line import/order
import { getTodos, getTodo, createTodo, updateTodo, deleteTodo } from "@/graphql/resolvers/todos";

resolvers.Query.getTodos = async (_parent, args, _context) => {
  const data = await getTodos(_context.req);
  return data;
};

resolvers.Query.getTodo = async (_parent, args, _context) => {
  const data = getTodo(_context.req, args);
  return data;
};

resolvers.Mutation.createTodo = async (_parent, args, _context) => {
  const data = await createTodo(_context.req, args);
  return data;
};

resolvers.Mutation.updateTodo = async (_parent, args, _context) => {
  const data = await updateTodo(_context.req, args);
  return data;
};

resolvers.Mutation.deleteTodo = async (_parent, args, _context) => {
  const data = await deleteTodo(_context.req, args);
  return data;
};
