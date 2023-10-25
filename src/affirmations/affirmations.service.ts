import makeTwilioClient from 'twilio';
import { getRandomAffirmation } from '../helpers/self-affirmations';
import { defaultPhoneNumber } from '../utils';

const twilio_test_config = {
    account_sid: 'AC348ac262497babe10de369b049a7efea',
    auth_toke: '6b1629df75c8a289b3c9ea4f17621cae',
    from_phone_number: '+15005550006',
};
const accountSid =
    process.env.TWILIO_ACCOUNT_SID || twilio_test_config.account_sid;
const authToken = process.env.TWILIO_AUTH_TOKEN || twilio_test_config.auth_toke;
const fromPhoneNumber =
    process.env.TWILIO_PHONE_NUMBER || twilio_test_config.from_phone_number;

const twilioClient = makeTwilioClient(accountSid, authToken);

const AffirmationsService = {
    send: async (message?: string, toPhoneNumber?: string) => {
        const affirmation = getRandomAffirmation();
        const messageToSend = message || affirmation;
        await twilioClient.messages
            .create({
                body: messageToSend,
                from: fromPhoneNumber,
                to: toPhoneNumber || defaultPhoneNumber,
            })
            .then((message) =>
                console.log(
                    `MessageId: ${message.sid} - Sent: ${messageToSend} to ${toPhoneNumber}`,
                ),
            );
    },
};

export default AffirmationsService;
