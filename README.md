# UNDERSCORE

Bienvenue sur le repository officiel de la web app `UNDERSCORE`

## Quickstart

1. Clone the repository

```sh
git clone git@github.com:FredeAlexandre/underscore.git
```

2. Install the dependencies

```sh
cd underscore
pnpm install
```

3. Copy Environement variables example file

```sh
cp .env.example .env
```

4. Start the database

```sh
pnpm db:start
```

5. Create tables

```sh
pnpm db:push
```

6. Seed the database of fake data

> See /src/server/db/seed.ts to edit the information added to the database as fake data

```sh
pnpm db:seed
```

7. Start the Next.JS server

```sh
pnpm dev
```

8. (Optional) Start the Drizzle Studio

```sh
pnpm db:studio
```
