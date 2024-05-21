#!/bin/bash

# Ruta al directorio del repositorio
rm -rf hernandezpalo/

# Actualizar el repositorio
git clone https://github.com/hernandezpalo83/hernandezpalo.git

# Elimino el dockerfile y renombro el que me interesa
sudo rm Dockerfile
mv Dockerfile_Local Dockerfile

# Construir la imagen de Docker
sudo docker build -t portafolio .

# Detener y eliminar el contenedor antiguo (si existe)
sudo docker stop portafolio
sudo docker rm portafolio

# Levantar un nuevo contenedor
docker run -d -p 3000:3000 -p 8000:8000 --name app portafolio:latest

