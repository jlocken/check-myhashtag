ARG node_version


FROM node:${node_version}
ENV NODE_ENV=develop

WORKDIR /app

COPY ["package.json", "yarn.lock","./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]