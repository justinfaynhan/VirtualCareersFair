// more rotues to be added
const routePaths = {
    login: '/login',
    register: '/register'
}

export default class Routes {
    
    public getLoginRoute() {
        return this.makeRoutes(routePaths.login);
    }

    public getRegisterRoute() {
        return this.makeRoutes(routePaths.register);
    }

    private makeRoutes(routeName: string) {
        return `${process.env.API_BASE_URL}/${routeName}`;
    }
}