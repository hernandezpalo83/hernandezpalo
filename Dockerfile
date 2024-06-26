#Actual
# Stage 1: init
FROM python:3.11 as init
WORKDIR /app
COPY . .
# Create virtualenv which will be copied into final container
ENV VIRTUAL_ENV=/app/.venv_docker
ENV PATH="$VIRTUAL_ENV/bin:$PATH"
RUN python3.11 -m venv $VIRTUAL_ENV
# Install app requirements and reflex inside virtualenv
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
# Esta linea arranca solo la parte back
CMD reflex run --env prod

