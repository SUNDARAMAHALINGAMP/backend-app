node {
    stage('Clone Repository') {
        git branch: 'main', url: 'https://github.com/SUNDARAMAHALINGAMP/backend-app.git'
    }

    stage('Build Docker Image') {
        script {
            dockerImage = docker.build("sundar/backend-app:latest")
        }
    }

    stage('Run Container') {
        script {
            sh "docker run -d -p 3000:3000 --name backend-app sundar/backend-app:latest"
        }
    }
}

