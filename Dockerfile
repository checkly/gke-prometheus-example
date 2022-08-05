FROM node:18-slim
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
ENTRYPOINT ["node", "index.js"]
EXPOSE 8080