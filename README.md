## Mock API
__Mock API:__ It will help developer to create mock api with zero coding by just enabling.
It is implemented with using json-server. This help developers to quick start back-end for prototyping and mocking.

Developer can use json-server running on **http://localhost:3100**. For route, just create a valid json file inside **applications** folder. It become as appication with **multiple endpoints**.

If you need customize route with logic, you can modify **routes/admin.routes.js** or **routes/custom.routes.js** under root of your project.

It come with nodemon setup, meaning wheneve new application added in applications folder. It will restart the server, will behave like provisioning.

__Note:__ Do not use it for prod enviroment
### Create new Sandbox server
```
git clone https://github.com/deepakshrma/create-sandbox-server.git my-sandbox-srver
```
#### Install Node modules: 
```
cd my-sandbox-srver
npm install
```
### How to run
```
npm run start
```
