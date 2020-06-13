FROM node:latest
LABEL Williams Gomes (williamsgomess@outlook.com)
ENV NODE_ENV=development
COPY . /var/www
WORKDIR /var/www
RUN npm install && npm run build
ENTRYPOINT ["npm", "start"]
EXPOSE 3333
