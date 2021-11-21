FROM ubuntu:focal

RUN apt update \
    && apt install -y python3-pip

# install script for generating toml index from markdown files
COPY requirements.txt .
COPY generate_toml.py /usr/local/bin
RUN pip3 install -r requirements.txt

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# install the script we use to create the index
# Copies your code file from your action repository to the filesystem path `/` of the container

# Code file to execute when the docker container starts up (`entrypoint.sh`)
ENTRYPOINT ["/entrypoint.sh"]