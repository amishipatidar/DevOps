FROM node:20-alpine AS builder
WORKDIR /app
COPY application/package*.json ./
RUN npm ci --only=production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY application/package*.json ./
COPY application/src/ ./src/
EXPOSE 8080
USER node
CMD ["node", "src/index.js"]
