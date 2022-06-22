# Install dependencies only when needed
FROM node:17.4.0-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:17.4.0-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm ci && npm run build

EXPOSE 3000

LABEL org.opencontainers.image.url="https://bvsr.space" \
      org.opencontainers.image.description="Temporary landing page of the BVSR" \
      org.opencontainers.image.title="BVSR Landing page" \
      maintainer="Yasamato <https://github.com/Yasamato>"

CMD ["sh", "-c", "npm run start"]
