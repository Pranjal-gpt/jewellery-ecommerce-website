# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY jew-backend/package*.json ./jew-backend/
COPY jew-frontend/package*.json ./jew-frontend/

# Install the dependencies for the backend
RUN cd jew-backend && npm install

# Install the dependencies for the frontend
RUN cd jew-frontend && npm install

# Copy the backend and frontend source code to the working directory
COPY jew-backend ./jew-backend
COPY jew-frontend ./jew-frontend

# Expose the backend and frontend ports
EXPOSE 5173
EXPOSE 3000

# Start both the backend and frontend servers
CMD cd jew-backend && npm run start & cd ../jew-frontend && npm run dev
