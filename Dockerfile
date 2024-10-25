# Use an official Node runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the app
RUN yarn build

# Install serve globally
RUN yarn global add serve

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "8080", "--cors", "--single"]