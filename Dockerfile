FROM node:14.16.1

WORKDIR /app

COPY . /app

RUN npm i


EXPOSE 7071

CMD ["npm", "start"]

