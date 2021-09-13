FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

copy . .

EXPOSE 3000

CMD ["npm","start"]