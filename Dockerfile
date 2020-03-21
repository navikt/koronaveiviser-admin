FROM node:12-alpine
ENV NODE_ENV production
ENV CI=true

WORKDIR /app
COPY server ./
COPY dist ./dist
RUN npm ci

CMD ["node", "./server.js"]

EXPOSE 8080

