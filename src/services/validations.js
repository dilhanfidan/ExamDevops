// TODO: Refactor validation function to follow the defined validations rules
const isValid = (gamerTag) => {
    // Rule: Le gamer tag doit contenir au moins 8 caractères
    if (gamerTag.length < 8) {
        return "Invalid - gamertag length must be at least 8 characters";
    }

    // Rule: Le gamer tag doit contenir au moins un caractère spécial parmi &,$,!,è,§,à,_
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    if (!specialCharacters.some(char => gamerTag.includes(char))) {
        return "Invalid - gamertag must contain at least a special character";
    }

    // Rule: Le gamer tag doit contenir au moins un chiffre
    if (!/\d/.test(gamerTag)) {
        return 'Invalid - gamertag must contain at least a number';
    }

    // If all rules pass, the gamer tag is valid
    return null;
};

exports.isValid = isValid;