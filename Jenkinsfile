pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('app') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('app') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t enterprise-devsecops-api:v1 ./app'
            }
        }

        stage('Container Image Scan - Trivy') {
            steps {
                sh '''
                mkdir -p reports

                trivy image \
                    --severity HIGH,CRITICAL \
                    --format table \
                    --output reports/trivy-image-report.txt \
                    enterprise-devsecops-api:v1
                '''
            }
        }


        stage('SAST - Semgrep') {
            steps {
                sh '''
                mkdir -p reports

                semgrep \
                  --config semgrep/rules.yml \
                  --json \
                  --output reports/semgrep-report.json \
                  app/
                '''
            }
        }

        stage('Dependency Scan - Trivy') {
            steps {
                sh '''
                mkdir -p reports

                trivy fs \
                    --scanners vuln \
                    --format json \
                    --output reports/trivy-dependency-report.json \
                    app
                '''
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/*', fingerprint: true
        }
    }
}