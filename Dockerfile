# Użyj oficjalnego obrazu Node.js jako bazowego
FROM node:18

# Ustal katalog roboczy w kontenerze
WORKDIR /usr/src/app

# Skopiuj pliki package.json oraz package-lock.json do kontenera
COPY src/server/package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę kodu do kontenera
COPY src/server/ .

# Odpalenie aplikacji na porcie 8888
EXPOSE 8888

# Uruchom aplikację
CMD ["node", "index.js"]