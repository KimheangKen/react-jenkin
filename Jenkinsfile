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
                withCredentials([usernamePassword(credentialsId: '86f466ab-0366-4461-8d22-cc40fb1d489b', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    script {
                        sh 'docker build -t kimheang68/react-jenkin .'
                        sh "echo \$PASS | docker login -u \$USER --password-stdin"
                        sh 'docker push kimheang68/react-jenkin'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def dockerCmd = 'docker run -p 3000:3000 -d kimheang68/react-jenkin:latest'
                    def sshKeyCredential = credentials('4472e56f-6a43-4a72-b7af-ce82d3684381') // Use the credential ID you created earlier

                    sh """
                    ssh -i \${sshKeyCredential} -o StrictHostKeyChecking=no manager@35.240.214.239 '\${dockerCmd}'
                    """
                }
            }
        }
    }
}
