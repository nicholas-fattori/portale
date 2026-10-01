const DATABASE_CREDENTIALS = {
    // Credenziali predefinite del docente
    users: [
        { username: "fattori", password: "prof", role: "docente", nome: "Prof. Nicholas Fattori" },
        { username: "studente", password: "gazzettodaniel", role: "studente", nome: "Studente Daniel Gazzetto" }
    ],
    maxAttempts: 3 // Numero massimo di tentativi consentiti
};

// Esporta la configurazione per gli altri script
window.DB_CONFIG = DATABASE_CREDENTIALS;
