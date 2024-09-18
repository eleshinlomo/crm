


This project has recently been converted from React to Next JS. The current cloud hosting the app will not host the backend so I have hosted the backend on a separate cloud server.

This app can be started in a docker container although , some of the env variables may not fully fucntion in a docker environment at the moment until all features are added and issues fixed.

Thd backend is using both Django and Fast API and they both are connected to a psotGRES database.

Some of the APIs used are openai, google text-to-speech  and google speech-to-text.