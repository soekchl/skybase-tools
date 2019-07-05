# skybase-tools 各种工具合计

### 安装依赖

```bash
$ npm i
```

### 当前工具
    1、id服务
    2、短信模块

### 本地配置设置 - ./config/config.local.js
```js
module.exports = {
    redis: {
        host: 'localhost',
        port: 6379,
        auth: '',
        db: 1
    }
}
```

### 启动项目

```bash
$ node index.js
```

### 访问相应api

```
http://localhost:13000/skyapi/id
http://localhost:13000/skyapi/id?count=10
http://localhost:13000/skyapi/sendPhoneCode
http://localhost:13000/skyapi/checkPhoneCode
```
### 获取一个或多个id

获取一个或多个不重复的id

**地址**： `/skyapi/id`

**方法**： `GET`

**query参数**：

| 参数名 | 必须 | 类型 | 默认值 | 说明 |
| ---: | :---: | :---: | :--- | :--- |
| count | 否 | number | 默认：1<br> | **输出id个数 默认1**<br>输出id个数 默认1 |

**200返回说明**：

```json
{
  "data": [
    "1146725014138130432",
    "1146725014138130433",
    "1146725014138130434",
    "1146725014138130435",
    "1146725014138130436"
  ],
  "code": 200,
  "msg": "成功",
  "t": 1561964915613
}
```

### 获取一个或多个id

获取一个或多个不重复的id

**地址**： `/skyapi/id`

**方法**： `GET`

**query参数**：

| 参数名 | 必须 | 类型 | 默认值 | 说明 |
| ---: | :---: | :---: | :--- | :--- |
| count | 否 | number | 默认：1<br> | **输出id个数 默认1**<br>输出id个数 默认1 |

**200返回说明**：

```json
{
  "data": [
    "1146725014138130432",
    "1146725014138130433",
    "1146725014138130434",
    "1146725014138130435",
    "1146725014138130436"
  ],
  "code": 200,
  "msg": "成功",
  "t": 1561964915613
}
```

### 发送验证码到相应手机

发送验证码到相应手机

**地址**： `/skyapi/sendPhoneCode`

**方法**： `POST`



**formData/body参数**：

| 参数名 | 必须 | 类型 | 默认值 | 说明 |
| ---: | :---: | :---: | :--- | :--- |
| phone | 是 | string | 默认：无<br><br>正则：`/^[1][0-9]{10}$/` | **手机号码**<br>手机号码 |


---

### 检查手机验证码

检查手机验证码

**地址**： `/skyapi/checkPhoneCode`

**方法**： `POST`


**formData/body参数**：

| 参数名 | 必须 | 类型 | 默认值 | 说明 |
| ---: | :---: | :---: | :--- | :--- |
| phone | 是 | string | 默认：无<br><br>正则：`/^[1][0-9]{10}$/` | **手机号码**<br>手机号码 |
| code | 是 | number | 默认：无<br> | **验证码**<br>验证码 |