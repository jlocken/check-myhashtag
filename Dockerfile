FROM node:14.5-alpine
ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "yarn.lock","./"]

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]