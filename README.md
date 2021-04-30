[![CircleCI](https://circleci.com/gh/EugenePetrik/api-node-axios-mocha/tree/main.svg?style=svg)](https://circleci.com/gh/EugenePetrik/api-node-axios-mocha/tree/main)

## Sample project for API testing

### Test Services 
https://restful-booker.herokuapp.com/

### Requirements
- NodeJS
- GIT

### Install project

```bash
npm i
```

### Run tests

```bash
npm t
```

### Run tests from a specific file

```bash
npm t -- ./test/client.test.js
```

### Run tests in docker

- Build Docker image:

```bash
docker build . -t <image_name:image_tag>
```

For example,

```bash
docker build . -t api-node-axios-mocha:latest
```

- Run tests:

```bash
docker run -it --rm <image_name:image_tag>
```

For example,

```bash
docker run -it --rm api-node-axios-mocha:latest
```

- Save test report:

```bash
docker run -v ${PWD}/reports:/app/reports -it --rm api-node-axios-mocha
```

### Run tests in docker-compose

```bash
docker-compose up
```

```bash
docker-compose down
```
