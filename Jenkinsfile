pipeline
{
    tools {
        maven "M2_HOME"
        jdk "Java 11"
    }

    agent any
    environment
    {
        Path = "/usr/local/bin/minikube:${PATH}"
        registry = "architsangal/speminiproject"
        registryCredential = "dockerhub"
        dockerImage = ""
    }
    stages
    {
        stage('Clone Git')
        {
            steps
            {
                git branch: 'main', url: 'https://github.com/architsangal/Courier-Management-Application.git'
            }
        }
        // stage('Frontend Docker Image Build')
        // {
        //     steps
        //     {
        //         dir("frontend/")
        //         {
        //             sh "npm install"
        //             sh "npm run build"
        //             sh "docker build -t architsangal/courier_react:latest ."
        //         }
        //     }
        // }
        // stage('Frontend DockerHub Image Push')
        // {
        //     steps
        //     {
        //         script
        //         {
        //             docker.withRegistry('', registryCredential)
        //             {
        //                 sh "docker push architsangal/courier_react:latest"
        //             }
        //         }
        //     }
        // }
        // stage('Backend Docker Image Build')
        // {
        //     steps
        //     {
        //         dir("backend/")
        //         {
        //             sh "mvn clean install"
        //             sh "docker build -t architsangal/courier_spring_boot:latest ."
        //         }
        //     }
        // }
        // stage('Backend DockerHub Image Push')
        // {
        //     steps
        //     {
        //         script
        //         {
        //             docker.withRegistry('', registryCredential)
        //             {
        //                 sh "docker push architsangal/courier_spring_boot:latest"
        //             }
        //         }
        //     }
        // }
        stage('Checking Path')
        {
            steps
            {

                sh 'echo $PATH'
            }
        }
        stage('Ansible Deployment')
        {
            steps
            {
                dir('./ansible')
                {
                    ansiblePlaybook colorized: true,
                    installation: 'Ansible',
                    inventory: 'inventory',
                    playbook: 'playbook.yml'
                }
            }
        }
    }
}