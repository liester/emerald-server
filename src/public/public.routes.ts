const publicPath = `/public`;
const PublicRoutes = (app: any) => {
    app.get(`${publicPath}/hello`, async (request: any, response: any) => {
        console.log(`${publicPath}/hello was called`);
        response.send('Hey there good lookin!');
    });
    app.get(`${publicPath}/debug-sentry`, function mainHandler(request: any) {
        const { key } = request.query;
        if (key && key === 'TestingSentryErrors') {
            throw new Error('Sentry Error Debug');
        }
    });
};

export default PublicRoutes;
