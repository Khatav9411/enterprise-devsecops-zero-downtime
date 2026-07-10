FROM jenkins/jenkins:lts-jdk21

USER root

RUN apt-get update && \
    apt-get install -y \
        docker.io \
        git \
        curl \
        wget \
        unzip && \
    apt-get clean

USER jenkins