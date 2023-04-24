pipeline
{
    tools {
        maven "M2_HOME"
    }

    agent any
    environment
    {
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
        stage('')
        {
            steps
            {
                dir("frontend/")
                {
                    sh "npm install"
                    sh "npm run build"
                    // sh "docker build -t architsangal/courier_react:latest ."
                }
            }
        }
        // stage('Build Code')
        // {
        //     steps
        //     {
        //         dir("src/calculator/")
        //         {
        //             withMaven(options: [
        //                 openTasksPublisher(disabled: true), 
        //                 dependenciesFingerprintPublisher(disabled: true), 
        //                 artifactsPublisher(disabled: true), 
        //                 //junitPublisher(disabled: true), 
        //                 jgivenPublisher(disabled: true), 
        //                 invokerPublisher(disabled: true), 
        //                 findbugsPublisher(disabled: true),
        //                 concordionPublisher(disabled: true), 
        //                 pipelineGraphPublisher(disabled: true)
        //                 ]
        //             )
        //             {
        //                 // TODO uncomment this
        //                 sh "mvn clean"
        //                 //sh "mvn validate"
        //                 sh "mvn compile"
        //             }                    
        //         }
        //     }
        // }
        // stage('Test Code')
        // {
        //     steps
        //     {
        //         dir("src/calculator/")
        //         {
        //             withMaven(options: [
        //                 openTasksPublisher(disabled: true), 
        //                 dependenciesFingerprintPublisher(disabled: true), 
        //                 artifactsPublisher(disabled: true), 
        //                 //junitPublisher(disabled: true), 
        //                 jgivenPublisher(disabled: true), 
        //                 invokerPublisher(disabled: true), 
        //                 findbugsPublisher(disabled: true),
        //                 concordionPublisher(disabled: true), 
        //                 pipelineGraphPublisher(disabled: true)
        //                 ]
        //             )
        //             {
        //                 // TODO uncomment this
        //                 sh "mvn test"
        //                 //sh "mvn package"
        //                 //sh "mvn verify"
        //             }                    
        //         }
        //     }
        // }
        // stage('Package Code')
        // {
        //     steps
        //     {
        //         dir("src/calculator/")
        //         {
        //             withMaven(options: [
        //                 openTasksPublisher(disabled: true), 
        //                 dependenciesFingerprintPublisher(disabled: true), 
        //                 artifactsPublisher(disabled: true), 
        //                 //junitPublisher(disabled: true), 
        //                 jgivenPublisher(disabled: true), 
        //                 invokerPublisher(disabled: true), 
        //                 findbugsPublisher(disabled: true),
        //                 concordionPublisher(disabled: true), 
        //                 pipelineGraphPublisher(disabled: true)
        //                 ]
        //             )
        //             {
        //                 // TODO uncomment this
        //                 sh "mvn package"
        //                 //sh "mvn verify"
        //             }                    
        //         }
        //     }
        // }
        // stage('Docker Image Build')
        // {
        //     steps
        //     {
        //         script
        //         {
        //             dockerImage = docker.build(registry + ":latest")
        //         }
        //     }
        // }
        // stage('DockerHub Image Push')
        // {
        //     steps
        //     {
        //         script
        //         {
        //             docker.withRegistry('', registryCredential)
        //             {
        //                 dockerImage.push()
        //             }
        //         }
        //     }
        // }
        // stage('Cleaning Up')
        // {
        //     steps
        //     {
        //         sh "docker rmi $registry:latest" 
        //     }
        // }
        // stage('Ansible Deployment')
        // {
        //     steps
        //     {
        //         ansiblePlaybook colorized: true,
        //         installation: 'Ansible',
        //         inventory: 'inventory',
        //         playbook: 'playbook.yml'
        //     }
        // }
    }
}