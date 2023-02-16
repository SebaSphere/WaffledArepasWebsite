FROM node:18.14.0 as development
# Create app directory
WORKDIR /usr/src/app/server
# Download the wait-for-it.sh script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
  && chmod +x wait-for-it.sh
# Start the script to wait for the postgres-db container to be ready
CMD ["./wait-for-it.sh", "postgres-database:5432", "--", "yarn", "run", "start:dev"]

# Bundle app source
COPY package*.json ./
COPY /tsconfig.build.json .
COPY /tsconfig.json .
# copy just the src folder
COPY /src .

# Build the app
RUN yarn install