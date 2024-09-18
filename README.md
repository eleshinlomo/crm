


This project has recently been converted from React to Next JS. The current cloud hosting the app will not host the backend so I have hosted the backend on a separate cloud server.

This app can be started in a docker container although , some of the env variables may not fully fucntion in a docker environment at the moment until all features are added and issues fixed.

Thd backend is using both Django and Fast API and they both are connected to a psotGRES database.

Some of the APIs used are openai, google text-to-speech  and google speech-to-text.

This project used to be a standalone project containing various app which include:
- Voice-to-text app
- Text-to-voice app
- Image Generator
- CRM

However, I have seen a lot of issues while trying to run all this in one single project so I am moving all the apps into their separate project to become a standalone. However, I would still like to use the same backend to manage all the services leveraging on Docker.

After all the modifications, this app will now become just the frontend to link with the standalone apps. This will make my apps lighter and easier for me to manage as a separate concern.