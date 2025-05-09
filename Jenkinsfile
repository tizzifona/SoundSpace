pipeline {
    agent any

    environment {
        IMAGE_NAME = 'soundspace-app'
        CONTAINER_NAME = 'soundspace-container'
        PORT_OUT = '8081'
        PORT_IN = '80'
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build --no-cache -t ${IMAGE_NAME} -f Dockerfile ."
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    
                    sh "docker run -d -p ${PORT_OUT}:${PORT_IN} --name ${CONTAINER_NAME} ${IMAGE_NAME}"
                }
            }
        }
    }
}
