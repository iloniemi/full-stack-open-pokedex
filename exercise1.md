I chose Java to be the language of the hyphothetical project. Java IDEs are already quite good at checking the code, but I would use google-java-format (https://github.com/google/google-java-format) or checkstyle for linting purposes. They can be used from terminal and they have plugins for popular IDEs and Maven. I would choose Maven to manage dependencies, build the app and run tests. Maven surefire plugin would be used to run tests during builds. JUnit library could be used for the unit tests. 

GitLab CI/CD is GitLab’s answer to GitHub Actions and seems quite similar in the way it works. Both are integrated with respective hosting services and offer runners for jobs defined in CI configurations. BitBucket also has their version of CI/CD. However their free tier does not seem to include CD/CD, unlike GitHub and GitLab. 
As an alternative for self-hosting Jenkins, CircleCI server is one possible option. The CircleCI server is run in a Kubernetes cluster.
Azure pipelines and AWS CodePipeline are the CI/CD solutions from two big cloud providers that of course work well with their cloud services and serverless services.

This hypothetical project has only six developers meaning it’s relatively small project. So based on that and the fact that the technologies that have been chosen are quite common, the most reasonable choice would be to use cloud-based environment. Hosting own server would allow more customizability, but that would also mean extra configuring and maintaining.

