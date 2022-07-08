import Link from "next/link";

import SyntaxHighlighter from "react-syntax-highlighter";
import { arduinoLight, solarizedLight } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { Layout } from "@/components/layout/Layout";

import { Stack } from "@/components/ui/layout/Stack";

const featureCode1_1 = `
npm run crud
`;

const featureCode1_2 = `
✔ src/pages/examples/index.tsx
✔ src/pages/examples/new.tsx
✔ src/pages/examples/[id].tsx
✔ src/components/page/examples/index.tsx
✔ src/components/page/examples/new.tsx
✔ src/components/page/examples/edit.tsx
✔ src/components/part/examples/Index.tsx
✔ src/components/part/examples/New.tsx
✔ src/components/part/examples/Edit.tsx
✔ src/graphql/schema.graphql
✔ src/graphql/schema/examples.graphql
✔ src/graphql/resolvers/examples.ts
✔ src/graphql/resolvers.ts
✔ prisma/schema.prisma
`;

const tutorialCode1 = `
curl -L https://github.com/andraindrops/kumuto/archive/refs/tags/0.0.1.tar.gz | tar xvf -
cd kumuto-0.0.1
`;

const tutorialCode2 = `
# .env

DATABASE_URL="mysql://root:root@localhost:3306/db"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_GRAPHQL_ENDPOINT="http://localhost:3000/api/graphql"
NEXTAUTH_SECRET="SET YOUR SECRET PHRASE"
GITHUB_ID="SET YOUR GITHUB ID for OAuth Sign in / up"
GITHUB_SECRET="SET YOUR GITHUB_SECRET for OAuth Sign in / up"
`;

const tutorialCode3_1 = `
docker-compose up
`;

const tutorialCode3_2 = `
npx prisma db push
`;

const tutorialCode4 = `
npm install
npm run dev
`;

const tutorialCode6_1 = `
npm run crud
`;

const tutorialCode6_2 = `
Please enter a model name. todo
`;

const tutorialCode6_3 = `
Please enter attributes. title:string,priority:number
`;

const tutorialCode7 = `
npx prisma db push
`;

interface FeatureProps {
  title: JSX.Element | JSX.Element[] | string;
  description: JSX.Element | JSX.Element[] | string;
}

const Feature = (props: FeatureProps) => {
  const { title, description } = props;

  return (
    <Stack className="rounded border border-solid bg-white p-4">
      <h4 className="font-bold">{title}</h4>
      <div>{description}</div>
    </Stack>
  );
};

interface TutorialProps {
  title: JSX.Element | JSX.Element[] | string;
  description: JSX.Element | JSX.Element[] | string;
}

const Tutorial = (props: TutorialProps) => {
  const { title, description } = props;

  return (
    <Stack>
      <h4 className="font-bold">{title}</h4>
      <Stack>{description}</Stack>
    </Stack>
  );
};

const Page = (): JSX.Element => {
  return (
    <Layout>
      <Stack className="py-32">
        <img src="/index/kv.svg" alt="kv" className="mx-auto max-h-60" />
        <h1 className="mt-8 text-6xl font-bold">Kumuto</h1>
        <Stack className="mt-8">
          <h2 className="text-2xl">
            Hi, Kumuto is a simple <span className="font-bold">boilerplate</span> and <span className="font-bold">CRUD scaffolding</span> for Next.js with TypeScript.
          </h2>
          <Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">GitHub</h3>
                <Link href="https://github.com/andraindrops/kumuto">https://github.com/andraindrops/kumuto</Link>
              </Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Boilerplate</h3>
                <p>We provide basic features with standard OSS.</p>
              </Stack>
              <Stack className="sm:grid-cols-2">
                <Feature
                  title="Form"
                  description={
                    <>
                      Basic input form and validation with <Link href="https://react-hook-form.com/">React Hook Form</Link>.
                    </>
                  }
                />
                <Feature
                  title="Auth"
                  description={
                    <>
                      Sign in / up features and check auth in pages with <Link href="https://next-auth.js.org/">NextAuth</Link>.
                    </>
                  }
                />
                <Feature
                  title="GraphQL"
                  description={
                    <>
                      GraphQL client / server codes with <Link href="https://www.graphql-code-generator.com/">GraphQL Code Generator.</Link>
                    </>
                  }
                />
                <Feature
                  title="Database"
                  description={
                    <>
                      Using ORM and migration with <Link href="https://www.prisma.io/">Prisma</Link> and <Link href="https://www.docker.com/">Docker</Link>.
                    </>
                  }
                />
                <Feature
                  title="Styling"
                  description={
                    <>
                      Layout style rules and <Link href="https://tailwindcss.com/">Tailwind</Link> and <Link href="https://daisyui.com/">daisyUI</Link> settings.
                    </>
                  }
                />
                <Feature
                  title="i18n"
                  description={
                    <>
                      Multiple languages support with <Link href="https://nextjs.org/docs/advanced-features/i18n-routing">Next.js Internationalized Routing.</Link>
                    </>
                  }
                />
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">CRUD scaffolding</h3>
                <p>You can build CRUD view and form and GraphQL server / client codes.</p>
              </Stack>
              <Stack>
                <SyntaxHighlighter style={arduinoLight} className="rounded-xl p-4" language="bash">
                  {featureCode1_1.trim()}
                </SyntaxHighlighter>
                <SyntaxHighlighter style={arduinoLight} className="rounded-xl p-4" language="bash">
                  {featureCode1_2.trim()}
                </SyntaxHighlighter>
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Getting Started</h3>
                <p>Why dont you start Kumuto dev day.</p>
              </Stack>
              <Stack>
                <Tutorial
                  title="1. Clone Kumuto from GitHub"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode1.trim()}
                      </SyntaxHighlighter>
                    </>
                  }
                />
                <Tutorial
                  title="2. Setup env files"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode2.trim()}
                      </SyntaxHighlighter>
                      <p>
                        How to get GitHub ID and Secret code?
                        <br />
                        <Link href="https://docs.github.com/en/rest/guides/basics-of-authentication">Basics of authentication - GitHub Docs</Link>
                      </p>
                      <p>
                        Homepage URL:
                        <br />
                        http://localhost:3000
                      </p>
                      <p>
                        Callback URL:
                        <br />
                        http://localhost:3000/api/auth/callback
                      </p>
                      <p>
                        Webhook:
                        <br />
                        Off Active
                      </p>
                    </>
                  }
                />
                <Tutorial
                  title="3. Setup database"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode3_1.trim()}
                      </SyntaxHighlighter>
                      <p>
                        We needs <Link href="https://docs.docker.com/get-started/">Docker.</Link>
                      </p>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode3_2.trim()}
                      </SyntaxHighlighter>
                    </>
                  }
                />
                <Tutorial
                  title="4. Start server"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode4.trim()}
                      </SyntaxHighlighter>
                    </>
                  }
                />
                <Tutorial
                  title="5. Sign up / in this wep app with GitHub oAuth"
                  description={
                    <>
                      <p>
                        Please <Link href="/auth/signin">sign up / in</Link> with GitHub oAuth.
                      </p>
                    </>
                  }
                />
                <Tutorial
                  title="6. Generate CRUD code"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode6_1.trim()}
                      </SyntaxHighlighter>
                      <p>Enter a model name and attributes names.</p>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode6_2.trim()}
                      </SyntaxHighlighter>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode6_3.trim()}
                      </SyntaxHighlighter>
                    </>
                  }
                />
                <Tutorial
                  title="7. Migrate database schemas"
                  description={
                    <>
                      <SyntaxHighlighter style={solarizedLight} language="bash">
                        {tutorialCode7.trim()}
                      </SyntaxHighlighter>
                    </>
                  }
                />
                <Tutorial
                  title="8. Check CRUD page"
                  description={
                    <>
                      <p>
                        Show <Link href="/todos">CRUD page</Link>.
                        <br />
                        Note: Please restart app server.
                      </p>
                    </>
                  }
                />
              </Stack>
            </Stack>
            <Stack>
              <Stack className="gap-2">
                <h3 className="text-xl font-bold">Support</h3>
                <p>
                  We can help you, Please contact <Link href="https://github.com/andraindrops/kumuto">GitHub</Link> or <Link href="https://twitter.com/kumuto_dev">Twitter</Link>.
                </p>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Page;
