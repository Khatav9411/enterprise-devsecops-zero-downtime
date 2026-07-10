pipeline {
    agent any

    environment {
        IMAGE_NAME = "enterprise-devsecops-api"
        IMAGE_TAG = "v1"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Tools') {
            steps {
                sh '''
                    docker --version
                    git --version
                '''
            }
        }

        stage('Unit Tests') {
            steps {
                dir('app') {
                    sh '''
                        npm test
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh '''
                        docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
                    '''
                }
            }
        }

        stage('List Images') {
            steps {
                sh 'docker images'
            }
        }
    }

    post {
        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }
    }
}