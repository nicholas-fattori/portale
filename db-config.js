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
        { username: "santillo", password: "paride2026", role: "studente", nome: "Studente Paride Santillo" },
        { username: "bruzzo", password: "gabriele2026", role: "studente", nome: "Studente Gabriele Bruzzo" },
        { username: "paticchia", password: "marco2026", role: "studente", nome: "Studente Marco Paticchia" },
        { username: "cukovic", password: "sergej2026", role: "studente", nome: "Studente Sergej Cukovic" },
        { username: "rachidi", password: "rida2026", role: "studente", nome: "Studente Rida Rachidi" },
        { username: "facchin", password: "devis2026", role: "studente", nome: "Studente Devis Facchin" },
        { username: "lamaangad", password: "sami2026", role: "studente", nome: "Studente Sami Lamaangad" },
        { username: "bertolaso", password: "lorenzo2026", role: "studente", nome: "Studente Lorenzo Bertolaso" },
        { username: "marini", password: "mattia2026", role: "studente", nome: "Studente Mattia Marini" },
        { username: "azzi", password: "rayan2026", role: "studente", nome: "Studente Rayan Azzi" },
        { username: "belllin", password: "enrico2026", role: "studente", nome: "Studente Enrico Bellin" },
        { username: "carlan", password: "lorenzo2026", role: "studente", nome: "Studente Lorenzo Carlan" },
        { username: "damini", password: "mattia2026", role: "studente", nome: "Studente Mattia Damini" },
        { username: "garbouch", password: "yassin2026", role: "studente", nome: "Studente Yassin Garbouch" },
        { username: "kebe", password: "mamadoubamba2026", role: "studente", nome: "Studente Mamadou Bamba Kebe" },
        { username: "kusi", password: "markoduro2026", role: "studente", nome: "Studente Mark Oduro Kusi" },
        { username: "singh", password: "anmol2026", role: "studente", nome: "Studente Anmol Singh" },
        { username: "stevic", password: "rayan2026", role: "studente", nome: "Studente Ryan Stevic" },
        { username: "saraci", password: "francesco2026", role: "studente", nome: "Studente Francesco Saraci" },
        { username: "trentin", password: "emmanuela2026", role: "docente", nome: "Prof.ssa Trentin Emmanuela" },
        { username: "dudau", password: "mirela2026", role: "docente", nome: "Prof.ssa Dudau Mirela" },
        { username: "volpe", password: "salvatore2026", role: "docente", nome: "Prof.ssa Volpe Salvatore" },
        { username: "lucente", password: "fabio2026", role: "docente", nome: "Prof. Lucente Fabio" }
    ],
    maxAttempts: 3 // Numero massimo di tentativi consentiti
};

// Esporta la configurazione per gli altri script
window.DB_CONFIG = DATABASE_CREDENTIALS;
