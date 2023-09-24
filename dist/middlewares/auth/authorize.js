const authorize = (api) => {
    return (req, res, next) => {
        const permissions = res.locals.user?.role?.permissions || [];
        if (permissions.filter(p => p.name === api).length > 0) {
            next();
        }
        else {
            res.status(403).send("You don't have the permission to access this resource!");
        }
    };
};
export { authorize };
