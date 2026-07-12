FROM jenkins/jenkins:lts-jdk21

USER root

# Install system packages
RUN apt-get update && apt-get install -y \
    docker.io \
    git \
    curl \
    wget \
    python3 \
    python3-pip \
    ca-certificates \
    gnupg \
    lsb-release

# Install Node.js 22 LTS
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
    apt-get install -y nodejs

# Install Semgrep
RUN pip3 install --break-system-packages semgrep

# Install Trivy
RUN wget -qO - https://aquasecurity.github.io/trivy-repo/deb/public.key | gpg --dearmor -o /usr/share/keyrings/trivy.gpg && \
    echo "deb [signed-by=/usr/share/keyrings/trivy.gpg] https://aquasecurity.github.io/trivy-repo/deb generic main" > /etc/apt/sources.list.d/trivy.list && \
    apt-get update && \
    apt-get install -y trivy

USER jenkinsexit
