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

# Download the wait-for-it.sh script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
  && chmod +x wait-for-it.sh

# Start the script to wait for the postgres-db container to be ready
CMD ["./wait-for-it.sh", "postgres-database:5432", "--", "node", "dist/main.js"]