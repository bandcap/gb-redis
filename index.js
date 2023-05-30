// 全局 reids
import { Redis } from "ioredis";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
const result = dotenv.config({ debug: false });
let { REDIS_URI } = result.parsed;
if (!REDIS_URI) throw new Error("[GBREDIS]:未定义redis连接");
const redis = new Redis(REDIS_URI);
export default redis;
