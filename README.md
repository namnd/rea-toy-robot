# Toy Robot Simulator

## Problem
[Description here](PROBLEM.md)

## Build Docker image
~~~
docker build . --tag=toy-robot:latest
~~~

## Run application in CLI
~~~
docker run -it --rm rea-toy-robot
~~~
- Run with custom input files
1. Make a new folder & copy your input files to that folder `~/your-files-input`
2. Run command
~~~
docker run -it -v ~/your-files-input/:/home/node/app/files-input --rm rea-toy-robot
~~~


## Tests
~~~
docker run -it --rm rea-toy-robot npm test
~~~
- Test with coverage
~~~
docker run -it --rm rea-toy-robot npm run coverage
~~~