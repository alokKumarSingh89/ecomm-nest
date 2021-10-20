FROM node:12.13-alpine
WORKDIR /home/app
COPY . /home/app
RUN npm install
