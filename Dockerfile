FROM node:16 as package
WORKDIR /app
ARG DEPLOY_ENV
ENV DEPLOY_ENV=$DEPLOY_ENV
COPY . .
RUN npm install
RUN npm run build

FROM nginx:stable
WORKDIR /app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=package /app/build/ /app/

