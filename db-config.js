const DATABASE_CREDENTIALS = {
    // Credenziali predefinite del docente
    users: [
        { username: "fattori", password: "prof", role: "docente", nome: "Prof. Nicholas Fattori" },
        { username: "gazzetto", password: "gazzettodaniel", role: "studente", nome: "Studente Daniel Gazzetto" },
        { username: "boulmane", password: "mohamedali2026", role: "studente", nome: "Studente Mohamed Ali Boulmane" },
        { username: "jait", password: "othmane2026", role: "studente", nome: "Studente Othmane Jait" },
        { username: "negretto", password: "alessio2026", role: "studente", nome: "Studente Alessio Negretto" },
        { username: "dalcero", password: "thomas2026", role: "studente", nome: "Studente Thomas Dal Cero" },
        { username: "confente", password: "anvedi2026", role: "studente", nome: "Studente Thomas Confente" },
        { username: "kumar", password: "divyansh2026", role: "studente", nome: "Studente Divyansh Kumar" },
        { username: "trentin", password: "emmanuela2026", role: "docente", nome: "Prof.ssa Trentin Emmanuela" },
        { username: "lucente", password: "fabio2026", role: "docente", nome: "Prof. Lucente Fabio" }
    ],
    maxAttempts: 3 // Numero massimo di tentativi consentiti
};

// Esporta la configurazione per gli altri script
window.DB_CONFIG = DATABASE_CREDENTIALS;
