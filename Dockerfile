FROM node:8.9
WORKDIR /usr/src/app
COPY ["./package.json", "./"]
RUN npm install
ENV NODE_ENV production
ENV PORT 42563
COPY . .
EXPOSE 42563
CMD npm run start:production