FROM node

COPY ./protos ./protos
COPY  ./server.js ./
COPY ./package.json ./

EXPOSE 50051

RUN npm install

CMD ["node", "server.js"]