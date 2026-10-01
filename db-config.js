/**
 * DB CONFIGURAZIONE CREDENZIALI DOCENTE / UTENTI AUTORIZZATI
 * Puoi modificare liberamente le coppie username e password qui sotto.
 */
const DATABASE_CREDENTIALS = {
    // Credenziali predefinite del docente
    users: [
        { username: "prof.stem", password: "Password123!", role: "docente", nome: "Prof. Rossi" },
        { username: "studente", password: "stem2026", role: "studente", nome: "Studente ITI" }
    ],
    maxAttempts: 3 // Numero massimo di tentativi consentiti
};

// Esporta la configurazione per gli altri script
window.DB_CONFIG = DATABASE_CREDENTIALS;