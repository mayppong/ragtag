FROM node:7

RUN npm install -g tslint typescript typings
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
