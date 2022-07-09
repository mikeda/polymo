This is a [Polymo](https://polymo.dev).
<br>
Polymo is a simple boilerplate and CRUD scaffolding for Next.js with TypeScript.

## Getting Started

### 1. Get Polymo from GitHub

```
curl -L https://github.com/andraindrops/polymo/archive/refs/tags/0.0.1.tar.gz | tar xvf -
```

### 2. Setup env files

```
# .env

DATABASE_URL="mysql://root:root@localhost:3306/db"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_GRAPHQL_ENDPOINT="http://localhost:3000/api/graphql"
NEXTAUTH_SECRET="SET YOUR SECRET PHRASE"
GITHUB_ID="SET YOUR GITHUB ID for OAuth Sign in / up"
GITHUB_SECRET="SET YOUR GITHUB_SECRET for OAuth Sign in / up"
```

How to get GitHub ID and Secret code?
<br>
[Basics of authentication - GitHub Docs](https://docs.github.com/en/rest/guides/basics-of-authentication).
<br>
<br>
Homepage URL:
<br>
http://localhost:3000
<br>
<br>
Callback URL:
<br>
http://localhost:3000/api/auth/callback
<br>
<br>
Webhook:
<br>
Off Active

### 3. Setup database

```
docker-compose up
```

We needs [Docker](https://docs.docker.com/get-started/).

```
npx prisma db push
```

### 4. Start server

```
npm install
npm run dev
```

### 5. Sign up / in this wep app with GitHub oAuth

Please [sign up / in](/auth/signin) with GitHub oAuth.

### 6. Generate CRUD code

```
npm run crud
```

Enter a model name and attributes names.

```
Please enter a model name. todo
```

```
Please enter attributes. title:string,priority:number
```

### 7. Migrate database schemas

```
npx prisma db push
```

### 8. Check CRUD page

Show [CRUD page](/todos).
<br>
Note: Please restart app server.

## Support

We can help you, Please contact [Twitter]() or [Discord]().
