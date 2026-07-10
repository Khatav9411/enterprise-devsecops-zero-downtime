# Base Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy application
COPY . .

# Expose application port
EXPOSE 3000

# Environment
ENV NODE_ENV=production

# Start application
CMD ["node", "src/server.js"]