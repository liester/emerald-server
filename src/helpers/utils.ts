export const getRandomAffirmation = (affirmations: string[]) => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    return affirmations[randomIndex];
};

export const injectWord = (message: string, word: string) => {
    const wordRegex = new RegExp(/\[xxx] /g);
    return message.replace(wordRegex, word);
};
