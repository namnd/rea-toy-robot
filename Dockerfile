FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./

# Switch user to node
USER node

# Install all packages
RUN npm install

COPY --chown=node:node . .

# Compile all typescript to javascript
RUN npm run build

# Start the app
CMD ["node", "./dist/app.js"]
