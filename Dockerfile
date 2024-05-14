# This Dockerfile is used to deploy a simple single-container Reflex app instance.
FROM python:3.11

# Copy local context to `/app` inside container (see .dockerignore)
WORKDIR /app
COPY . .

# Install app requirements and reflex in the container
RUN pip install -r requirements.txt

# Deploy templates and prepare app
RUN reflex init

# Download all npm dependencies and compile frontend
RUN reflex export --frontend-only --no-zip

# Needed until Reflex properly passes SIGTERM on backend.
STOPSIGNAL SIGKILL

# Always apply migrations before starting the backend.
CMD [ -d alembic ] && reflex db migrate; reflex run --env prod


#Actual
# Stage 1: init
#FROM python:3.11 as init
#WORKDIR /app
#COPY . .
# Create virtualenv which will be copied into final container
#ENV VIRTUAL_ENV=/app/.venv_docker
#ENV PATH="$VIRTUAL_ENV/bin:$PATH"
#RUN python3.11 -m venv $VIRTUAL_ENV
# Install app requirements and reflex inside virtualenv
#RUN pip install --upgrade pip
#RUN pip install --no-cache-dir -r requirements.txt
## Esta linea arranca solo la parte back
#CMD reflex run --env prod --backend-only

