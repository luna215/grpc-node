# How to run
### 1. Clone project
you're going to clone with the ```git clone ``` cmd

## 2.NPM
Next you're going to install all the dependecies with ```npm install ```

## 3. Docker part
Run these commands in the following order:
```
 docker build -t pluna/node-grpc .
 ```
 And then run:
 ```
 docker run -it -d -p 50051:50051 pluna/node-grpc
 ```
Finally run
```
node client.js
```
You should see that our client side is now communicating with our grpc server that is running on the docker container