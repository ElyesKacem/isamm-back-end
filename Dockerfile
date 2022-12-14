FROM node:alpine

WORKDIR /usr/app
COPY package.json .
RUN npm install -g nodemon
COPY . .
CMD ["npm","run","dev"]