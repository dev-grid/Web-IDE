
FROM node:22-alpine

WORKDIR /home/app

LABEL version="1.0" co-author="parvez"

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]


FROM node:18.17.0


WORKDIR /app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

