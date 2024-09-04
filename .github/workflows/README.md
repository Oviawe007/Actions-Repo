# CI/CD Pipeline Setup Documentation

## Objective

This CI/CD pipeline is designed to automate the build, testing, and deployment of a Node.js application. The pipeline is triggered by a push to the `main` branch and includes multiple Node.js versions to ensure compatibility across different environments.

## Functional Requirements:

1. ### Automated Testing

**Description**: The pipeline ensures all code changes trigger an automated testing process.
**Implementation**: The `build-and-test` job includes a step to run unit tests using the `npm test` command. Ensure that this command runs all necessary unit tests.

2. ### Automated Deployment

**Description**: On successful testing, the pipeline automatically deploys the code to the staging environment.
**Implementation**: The `deploy` job runs only if the `build-and-test` job is successful. It uses a secure deployment command (`scp` in this case) to transfer files to the staging server. Customize this step according to your deployment needs.

## Workflow File Configuration

**Location**: `.github/workflows/ci-cd-pipeline.yml`
**Workflow Overview:**
- ### Trigger: The workflow is triggered by push events to the `main` branch.
- ### Jobs:
    - build-and-test:
    - Checks out the code.
    - Sets up Node.js.
    - Installs dependencies.
    - Runs unit tests.
- ### deploy:
    - Runs after `build-and-test` completes successfully.
    - Checks out the code again.
    - Deploys the application to the staging environment.

## Secrets and Environment Variables

- ### Secrets Required:

    - **STAGING_SERVER**: The address of the staging server.
    - **DEPLOY_KEY**: Deployment credentials or SSH key for secure access.

- ### Adding Secrets:
    - Navigate to `Settings > Secrets and variables > Actions.`
    - Add the necessary secrets for deployment.

## How to Trigger the Pipeline
- **Trigger Event**: Push changes to the main branch of the repository.
- **Pipeline Execution**: On push, the pipeline will automatically run through the build, test, and deployment steps as defined.
