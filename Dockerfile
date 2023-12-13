FROM mcr.microsoft.com/playwright:v1.39.0-jammy



COPY . /aqa-playwright2
WORKDIR /aqa-playwright2

RUN npm ci

CMD ["npm","run", "test:api"]