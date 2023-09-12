pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    parameters {
        choice(name:'VERSION', choices:['1.0', '1.1', '1.2'], description:'Choose the version of the project')

        booleanParam(name :'executeTests', description:'Execute the tests', defaultValue:false)
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
                withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    sh 'docker build -t kimheang68/react-jenkin .'
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh 'docker push kimheang68/react-jenkin'
                }
            }
        }
        stage ('Deploy') {
            steps {
                script {
                    def dockerCmd = 'docker run  -p 3000:3000 -d kimheang68/react-jenkin:latest'
                    sshagent(['ec2-server-key']) {
                        sh "ssh -o StrictHostKeyChecking=no manager@35.240.214.239 ${dockerCmd}"
                    }
                }
            }
        }
    }
}
