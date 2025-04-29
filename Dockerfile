FROM node:23-alpine AS prod
WORKDIR /app
COPY . .
RUN rm -rf node_modules && npm i
RUN npm run build


FROM nginx:alpine AS web
COPY --from=prod /app/dist /var/www
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80



