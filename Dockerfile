FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# Copie les fichiers package.json et pnpm-lock.yaml d'abord
COPY package.json pnpm-lock.yaml* ./

# Installe les dépendances
RUN pnpm install

# Copie tout le reste des fichiers de l'application
COPY . .

EXPOSE 3000

CMD ["/bin/sh", "-c", "pnpm dev"]