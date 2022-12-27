FROM node:18

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

RUN mkdir /home/nodejs/app

WORKDIR /home/nodejs/app

# Install dependencies based on the preferred package manager
COPY ./package.json ./yarn.lock* ./package-lock.json* ./pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Lockfile not found." && exit 1; \
  fi

COPY src ./src
COPY .env .
COPY .sequelizerc .
COPY nodemon.json .

EXPOSE 4000

CMD npm run dev
