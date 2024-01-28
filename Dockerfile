# Use an official Node.js runtime as a parent image
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm install --force

# Copy the rest of the application code to the working directory
COPY . .

# Build the Angular application
RUN npm run build

# Use a lightweight, NGINX-based image for serving the Angular application
FROM nginx:alpine

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom nginx.conf to the NGINX configuration directory
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built Angular app from the previous stage to the NGINX HTML directory
COPY --from=builder /app/build /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

# Expose port 80 for the NGINX server
EXPOSE 80

# Start the NGINX server
CMD ["nginx", "-g", "daemon off;"]