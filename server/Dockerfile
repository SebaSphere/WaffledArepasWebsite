FROM node:18.13.0
# Create app directory
ENV NODE_ENV=production
WORKDIR /usr/src/app/server

COPY package*.json ./


# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

# Start the server using the production build
CMD [ "node", "dist/main.js" ]