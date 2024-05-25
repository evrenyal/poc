FROM node:18

RUN apt-get update && apt-get install -y \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libcups2 \
    libxcomposite1 \
    libxrandr2 \
    libxdamage1 \
    libpango1.0-0 \
    libgbm1 \
    libxshmfence1 \
    libglu1-mesa \
    libxi6 \
    libgconf-2-4 \
    libfontconfig1 \
    libxtst6 \
    libxss1 \
    libgtk-3-0 \
    libasound2 \
    libdrm2 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npx playwright install && npx playwright install-deps

COPY . .

CMD ["npm", "start"]

