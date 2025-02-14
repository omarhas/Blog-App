# Blog App

# Description
This project demonstrates how to Dockerize a React application, build and push the Docker image to Docker Hub, and then pull and run the Docker image on a host machine using Ansible.




## Overview
This project consists of the following components:

Dockerfile: Defines how to build a Docker image for the React application.
GitHub Actions pipeline: Automates the process of building and pushing the Docker image to Docker Hub when changes are pushed to the main branch.
Ansible playbook: Automates the process of pulling the Docker image from Docker Hub and running it as a container on a host machine.


## Getting Started

### Prerequisites

Before using this project, ensure you have the following:

  Docker: Installed on both the local machine (for building and running containers) and the target machine (for pulling and running containers).
  Docker Hub account: For pushing and pulling the Docker image.
  GitHub repository: For storing the source code of the React application and using GitHub Actions to build and push the Docker image.
  Ansible: Installed on the host machine for automation.

### Steps 
1. **Dockerfile**
This Dockerfile defines the steps to build and run the React application inside a Docker container. The steps are as follows:

  - Use a lightweight Node.js image (version 16) based on Alpine Linux for building the React app.
  - Set up a working directory, install dependencies, and build the app.
  - Use Nginx to serve the built React app.
  - Expose port 80 to access the app.

    ```bash
    FROM node:16-alpine AS build

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    RUN npm run build

    FROM nginx:alpine

    COPY --from=build /app/build /usr/share/nginx/html

    EXPOSE 80

    CMD ["nginx", "-g", "daemon off;"]
 


2. **Github Actions Pipeline**

The GitHub Actions workflow automates the process of building the Docker image and pushing it to Docker Hub. This workflow is triggered on pushes to the main branch.


```bash
name: Build and Push React App to Docker Hub

on:
  push:
    branches:
      - main  

jobs:
  build:
    runs-on: ubuntu-latest 

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }} 
          
      - name: Build Docker image
        run: |
          docker build -t ${{ secrets.DOCKER_USERNAME }}/react-app:latest .

      - name: Push Docker image to Docker Hub
        run: |
          docker push ${{ secrets.DOCKER_USERNAME }}/react-app:latest
  ```
3. **Ansible Playbook:** 

  The Ansible playbook automates the process of pulling the Docker image from Docker Hub and running the container on a target machine. It also performs cleanup by removing unused Docker containers and images.

  ```bash
      ---
  - name: Fetch Docker image from Docker Hub and run it
    hosts: localhost
    become: yes  
    tasks:

      - name: Pull Docker image from Docker Hub
        docker_image:
          name: "omarhasni123/react-app"
          source: pull

      - name: Run Docker container from pulled image
        docker_container:
          name: "react-app-container"  
          image: "omarhasni123/react-app"  
          state: started
          restart_policy: always
          ports:
            - "80:80"  

      - name: remove unused containers 
        command: docker system prune -a 
```

### Steps to Run

Clone the Repository: Clone this repository to your local machine.

Create Docker Hub Account: If you don't have one, create a Docker Hub account at Docker Hub.

Set up Secrets in GitHub: In your GitHub repository, add the following secrets:

DOCKER_USERNAME

DOCKER_PASSWORD

These secrets will be used by GitHub Actions to authenticate with Docker Hub.

Configure Ansible: Ensure that you have Ansible installed and configured to connect to the target machine where you want to run the Docker container. Update the hosts in the Ansible playbook to match your target machine.

Push Code to GitHub: When you push your changes to the main branch of the GitHub repository, the GitHub Actions pipeline will automatically build the Docker image and push it to Docker Hub.

Run Ansible Playbook: Once the image is pushed, you can run the Ansible playbook to pull the image and run the container on your target machine.

    ansible-playbook -i localhost Deploy.yml

Access the Application: The React app will be accessible on port 80 of your target machine.

Conclusion
This project demonstrates how to automate the process of building, pushing, and running a React app as a Docker container using GitHub Actions and Ansible. By following these steps, you can streamline the deployment of your React applications with Docker.

