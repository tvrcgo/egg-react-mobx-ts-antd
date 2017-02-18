# egg-react-mobx-ts-antd

### Front

- react
- mobx-react
- typescript
- css modules (beta)
- ant design

### Server

- egg

## Start

### Development
```shell
$ npm install
$ npm run build:dll
$ npm run build & npm run dev
$ open http://localhost:7001
```

### Deploy

Use `EGG_SERVER_ENV=prod` to enable prod mode

```shell
$ EGG_SERVER_ENV=prod npm start
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade.