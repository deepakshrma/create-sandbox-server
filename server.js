const jsonServer = require('json-server');
const cors = require('cors');
const data = require('./db.json');
const jsonRouter = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 3100;
const adminRoutes = require('./routes/admin.routes');
const customRoutes = require('./routes/custom.routes');
const finalRoutes = {
    "admin": [],
    "ms": [
        "users/login",
        "users/:username"
    ]
}
exports.createServer = (applications, restartMiddeware) => {
    const server = jsonServer.create();
    server.use(middlewares);
    server.use('/admin', adminRoutes.init(jsonRouter, [restartMiddeware]))
    server.use('/ms', customRoutes.init());
    server.use(cors());
    applications.forEach((r) => {
        const mappedRoutes = Object.keys(r.json);
        const routePath = `/${r.path}/`
        const allRoutePath = `/${r.path}/routes/`
        finalRoutes[r.path] = ['routes',...mappedRoutes];
        server.get(allRoutePath, (req, res) => {
            res.send(mappedRoutes)
        });
        server.use(routePath, jsonServer.router(r.json));
    });
    console.log(`Mapped Routes:: ${JSON.stringify(finalRoutes, null, 4)}`)
    server.use('/routes', (req, res)=> res.send(finalRoutes));
    server.listen(PORT, () => {
        console.log(`JSON Server is running on http://localhost:${PORT}`);
    });
    return server;
}