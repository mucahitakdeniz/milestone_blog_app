FROM node:hydrogen-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN pnpm install

COPY . .

COPY .env .

RUN pnpm run build

EXPOSE 3000:4000

CMD ["pnpm", "start"]