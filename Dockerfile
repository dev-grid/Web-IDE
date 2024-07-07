FROM node:22-alpine

WORKDIR /home/app

LABEL version="1.0" co-author="parvez"

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]