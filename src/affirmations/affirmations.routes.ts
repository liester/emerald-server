// import RelinkController from "./relink.controller";
// import ApiAuthentication from '../authentication/api.authentication'
import ApiKeys from '../models/api.keys';
import AffirmationsController from '../affirmations/affirmations.controller';

const path = `/api/affirmations`;
const AffirmationRoutes = (app: any) => {
    app.get(`${path}/send`, AffirmationsController.send);
    app.get(`${path}/sendToAll`, AffirmationsController.sendToAll);
    // app.get('/relink/updates', ApiAuthentication.verifyKey("RELINK"), RelinkController.getListingUpdates);
    // app.get('/relink/collections', ApiAuthentication.verifyKey("RELINK"), RelinkController.getAvailableCollections);
    // app.patch('/relink/collections', ApiAuthentication.verifyKey("RELINK"), RelinkController.updateCollections);
    // app.patch('/relink/collections/urls', ApiAuthentication.verifyKey("RELINK"), RelinkController.updateCollectionsByUrls);
    // app.get('/api/testUrl', async (request:any, response:any)=> {
    //     await ApiKeys.create({
    //         key: 99,
    //     })
    //     response.send('Hey there good lookin!')
    // });
};

export default AffirmationRoutes;
