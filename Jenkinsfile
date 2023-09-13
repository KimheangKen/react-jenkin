pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                // sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                // sh 'npm run test'
                echo "Test"

            }
        }
        stage('Build Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: '86f466ab-0366-4461-8d22-cc40fb1d489b', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    script {
                        sh 'docker build -t kimheang68/react-jenkin .'
                        sh "echo \$PASS | docker login -u \$USER --password-stdin"
                        sh 'docker push kimheang68/react-jenkin'
                    }
                }
            }
        }

        stage ('Deploy') {
            steps {
                script {
                    sh 'docker run  -p 3000:80 -d kimheang68/react-jenkin:latest'
                }
            }
        }
    }
}
