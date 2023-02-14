FROM node:18.13.0 as development

# Create app directory
ENV NODE_ENV=production
WORKDIR /usr/src/app/server

# Bundle app source
COPY package*.json ./
COPY . .

# Install app dependencies
RUN yarn global add @vue/cli
RUN yarn install

# Download the wait-for-it.sh script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
  && chmod +x wait-for-it.sh

# Start the script to wait for the backend container to be ready
CMD ["./wait-for-it.sh", "nestjs-backend:22802", "--", "yarn", "run", "serve"]