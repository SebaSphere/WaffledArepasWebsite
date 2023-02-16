FROM node:18.14.0 as development
# used for file debugging
ENV CHOKIDAR_USEPOLLING=true
# Create app directory
WORKDIR /usr/src/app/client
# Download the wait-for-it.sh script
RUN wget https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
  && chmod +x wait-for-it.sh
# Start the script to wait for the backend container to be ready
CMD ["./wait-for-it.sh", "nestjs-backend:22802", "--", "yarn", "run", "serve"]

# Bundle app source
COPY package*.json ./
COPY . .


# Install app dependencies
RUN yarn global add @vue/cli
RUN yarn install