FROM node:14-slim
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app
CMD ["yarn", "dev"]
