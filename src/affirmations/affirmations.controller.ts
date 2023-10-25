import AffirmationsService from './affirmations.service';
import { NextFunction, Response, Request } from 'express';
import Accounts from '../models/accounts';
import selfAffirmations from '../helpers/self-affirmations';
import imposterSyndromeStatements from '../helpers/imposter-syndrome';
import { getRandomAffirmation, injectWord } from '../helpers/utils';
import hypeStatements from '../helpers/hype-me-up';
const secretKey = process.env.SECRET_KEY;
const prefix = process.env.MESSAGE_PREFIX || 'Happier Me:\n';

const AffirmationsController = {
    send: async (request: Request, response: Response, next: NextFunction) => {
        const { key, message } = request.query as {
            key: string;
            message: string;
        };
        if (!!key && key === secretKey) {
            await AffirmationsService.send(message);
            response.send({ message: 'Dones' });
        } else {
            response.send({ message: 'We almost did it' });
        }
    },
    sendToAll: async (request: Request, response: Response) => {
        try {
            console.log('Received request to send to all');
            const { key, message, deliveryTime } = request.query as {
                key: string;
                message: string;
                deliveryTime: string;
            };
            console.log('Checking key is valid');
            if (!!key && key === secretKey) {
                console.log('Key is valid');
                const selfAffirmation = getRandomAffirmation(selfAffirmations);
                const imposterSyndromeAffirmation = getRandomAffirmation(
                    imposterSyndromeStatements,
                );
                const hypeStatement = getRandomAffirmation(hypeStatements);

                const accounts = await Accounts.find({
                    active: true,
                    lastLogin: { $exists: true },
                    deliveryTime,
                });
                await Promise.all(
                    accounts.map((account) => {
                        let message = `${prefix}${selfAffirmation}`;
                        if (
                            account.messageTypes?.includes('imposter-syndrome')
                        ) {
                            message = `${prefix}${imposterSyndromeAffirmation}`;
                        } else if (account.messageTypes?.includes('hyped')) {
                            message = `${prefix}${hypeStatement}`;
                            message = injectWord(
                                message,
                                account.useSwearWords ? 'f*cking ' : '',
                            );
                        }
                        return AffirmationsService.send(
                            message,
                            account.phoneNumber,
                        );
                    }),
                );
                console.log('Done sending to all');
                response.send({ message: 'Dones' });
            } else {
                response.send({ message: 'We almost did it' });
            }
        } catch (error: any) {
            console.log('Error sending to all');
            console.log(error);
            response.status(500).send({ message: error.message });
        }
    },
};

export default AffirmationsController;
