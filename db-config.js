const DATABASE_CREDENTIALS = {
    // Credenziali predefinite del docente
    users: [
        { username: "fattori", password: "prof", role: "docente", nome: "Prof. Nicholas Fattori" },
        { username: "studente", password: "gazzettodaniel", role: "studente", nome: "Studente Daniel Gazzetto" },
        { username: "gazzetto", password: "gazzettodaniel", role: "studente", nome: "Studente Daniel Gazzetto" },
        { username: "trentin", password: "emmanuela2026", role: "studente", nome: "Prof.ssa Trentin Emmanuela" }
    ],
    maxAttempts: 3 // Numero massimo di tentativi consentiti
};

// Esporta la configurazione per gli altri script
window.DB_CONFIG = DATABASE_CREDENTIALS;
