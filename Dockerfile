FROM node:16-alpine3.12 AS builder
USER root
WORKDIR /opt/web
COPY package.json ./
COPY package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN chmod a+x ./node_modules/.bin/react-scripts
RUN npm run build

FROM nginx:1.17-alpine
RUN apk --no-cache add curl
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /opt/web/build /usr/share/nginx/html
CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]