FROM node:22.0.0-alpine3.19
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD ["npx", "next", "dev"]