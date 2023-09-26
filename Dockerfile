FROM node:20.7-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

LABEL org.opencontainers.image.url="https://bvsr.space" \
      org.opencontainers.image.description="Temporary landing page of the BVSR" \
      org.opencontainers.image.title="BVSR Landing page" \
      maintainer="Yasamato <https://github.com/Yasamato>"

CMD ["sh", "-c", "npm run start"]
#CMD ["sh", "-c", "node server.js"]
