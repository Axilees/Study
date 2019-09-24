const manageTranslations = require("react-intl-translations-manager");

manageTranslations({
    messagesDirectory: "build/messages/src/extracted/",
    translationsDirectory: "src/translations/locales/",
    languages: ["ru"]
})