FROM node:20-bookworm-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:20-bookworm-slim AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs

RUN apt-get update -y && apt-get install -y openssl

RUN apt-get update && apt-get install -y libnss-mdns \
    && rm -r /var/cache/* /var/lib/apt/lists/*

COPY --from=builder /app/build .

ENV PORT 3000

CMD ["npm", "run", "start"]
