## 全局 redis

既然 redis 连接很容易暴涨，那就做个全局 redis,实例化，一个连接，不知道能不能优化连接数

### 安装

```sh
# https://www.npmjs.com/package/gb-redis
npm i gb-redis
```

### 配置

需要在项目环境配置文件 `.env` 中设置 redis 连接参数 `REDIS_URI`

```sh
REDIS_URI='redis://******.redis.rds.aliyuncs.com:6379/9'
```

## 开发

使用 dotenv 处理环境变量： https://github.com/motdotla/dotenv
