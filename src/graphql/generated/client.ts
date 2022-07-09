import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  deleteTodo: Todo;
  updateProfile: Profile;
  updateTodo: Todo;
};


export type MutationCreateTodoArgs = {
  input: TodoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  input: ProfileInput;
};


export type MutationUpdateTodoArgs = {
  id: Scalars['String'];
  input: TodoInput;
};

export type Profile = {
  __typename?: 'Profile';
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type ProfileInput = {
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getProfile: Profile;
  getTodo: Todo;
  getTodos: Array<Todo>;
};


export type QueryGetTodoArgs = {
  id: Scalars['String'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  priority: Scalars['Int'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type TodoInput = {
  priority: Scalars['Int'];
  title: Scalars['String'];
};

export type ProfileFragment = { __typename?: 'Profile', id: string, name?: string | null, image?: string | null };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'Profile', id: string, name?: string | null, image?: string | null } };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'Profile', id: string, name?: string | null, image?: string | null } };

export type TodoFragment = { __typename?: 'Todo', id: string, userId: string, title: string, priority: number };

export type GetTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTodosQuery = { __typename?: 'Query', getTodos: Array<{ __typename?: 'Todo', id: string, userId: string, title: string, priority: number }> };

export type GetTodoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetTodoQuery = { __typename?: 'Query', getTodo: { __typename?: 'Todo', id: string, userId: string, title: string, priority: number } };

export type CreateTodoMutationVariables = Exact<{
  input: TodoInput;
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: string, userId: string, title: string, priority: number } };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['String'];
  input: TodoInput;
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo: { __typename?: 'Todo', id: string, userId: string, title: string, priority: number } };

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', deleteTodo: { __typename?: 'Todo', id: string, userId: string, title: string, priority: number } };

export const ProfileFragmentDoc = gql`
    fragment Profile on Profile {
  id
  name
  image
}
    `;
export const TodoFragmentDoc = gql`
    fragment Todo on Todo {
  id
  userId
  title
  priority
}
    `;
export const GetProfileDocument = gql`
    query getProfile {
  getProfile {
    ...Profile
  }
}
    ${ProfileFragmentDoc}`;
export const UpdateProfileDocument = gql`
    mutation updateProfile($input: ProfileInput!) {
  updateProfile(input: $input) {
    ...Profile
  }
}
    ${ProfileFragmentDoc}`;
export const GetTodosDocument = gql`
    query getTodos {
  getTodos {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export const GetTodoDocument = gql`
    query getTodo($id: String!) {
  getTodo(id: $id) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export const CreateTodoDocument = gql`
    mutation createTodo($input: TodoInput!) {
  createTodo(input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: String!, $input: TodoInput!) {
  updateTodo(id: $id, input: $input) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: String!) {
  deleteTodo(id: $id) {
    ...Todo
  }
}
    ${TodoFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProfile(variables?: GetProfileQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetProfileQuery>(GetProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProfile', 'query');
    },
    updateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>(UpdateProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateProfile', 'mutation');
    },
    getTodos(variables?: GetTodosQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTodosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodosQuery>(GetTodosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTodos', 'query');
    },
    getTodo(variables: GetTodoQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTodoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTodoQuery>(GetTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTodo', 'query');
    },
    createTodo(variables: CreateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateTodoMutation>(CreateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createTodo', 'mutation');
    },
    updateTodo(variables: UpdateTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateTodoMutation>(UpdateTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateTodo', 'mutation');
    },
    deleteTodo(variables: DeleteTodoMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTodoMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteTodoMutation>(DeleteTodoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteTodo', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;