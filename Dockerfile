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

# Production image, copy all the files and run next
FROM node:17.4.0-alpine AS runner
WORKDIR /app

EXPOSE 3000

LABEL org.opencontainers.image.url="https://bvsr.space" \
      org.opencontainers.image.description="Temporary landing page of the BVSR" \
      org.opencontainers.image.title="BVSR Landing page" \
      maintainer="Yasamato <https://github.com/Yasamato>"

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

CMD ["sh", "-c", "node server.js"]
