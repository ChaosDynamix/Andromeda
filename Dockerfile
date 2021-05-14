FROM node:latest

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

ENV PATH=$PATH:/home/node/.npm-global/bin

USER node

WORKDIR /home/node/app

RUN npm install -g gatsby-cli

RUN gatsby telemetry --disable

EXPOSE 4000

CMD gatsby --help
