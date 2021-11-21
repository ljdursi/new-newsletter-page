FROM ubuntu:latest

RUN apt update \
    && apt install -y wget

# install stork
WORKDIR /tmp
RUN wget https://files.stork-search.net/releases/v1.2.1/stork-ubuntu-20-04 \
    && chmod +x stork-ubuntu-20-04 \
    && mv stork-ubuntu-20-04 /usr/local/bin

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# install the script we use to create the index
# Copies your code file from your action repository to the filesystem path `/` of the container

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]