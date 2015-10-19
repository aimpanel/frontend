window.locale.pl = {
    general: {
        notfound: "Błąd 404 - Nie znaleziono strony",
        notfoundNote: "Dajemy Ci za to gifa z kotem",
        close: "Zamknij",
        loading: "Ładowanie"
    },
    home: {
        "news": "Aktualności",
        "helpHeader": "Masz uwagi? Potrzebujesz pomocy?",
        "helpDesc": "Jeśli napotkasz jakieś trudności lub chcesz podzielić się swoją opinię napisz na forum",
        "manualDesc": "Instrukcja obsługi jest dostępna pod adresem",
        "updateHeader": "Jak zaktualizować panel do najnowszej wersji?",
        "updateDesc": "Wystarczy przez SSH wykonać aktualizację systemu na koncie root przez komendę:"
    },
    auth: {
        "enterLoginAndPassword": "Wpisz login i hasło",
        "signIn": "Logowanie",
        "clickToSignIn": "Zaloguj się",
        "logout": "Wyloguj się",
        "signInToExistingAccount": "Zaloguj się do istniejącego konta",
        "yourUsername": "Twoja nazwa użytkownika",
        "yourPassword": "Twoje hasło",
        "loggingIn": " Logowanie..."
    },
    about: {
        panel: "O panelu",
        thanks: "Aimpanel powstał dzięki wspaniałym projetom osób trzecich, większość jest otwartoźródłowa.",
        specialThanks: "Szczególne podziękowania dla:",
        license: "Licencja",
        proprietaryLicense: "licencja własnościowa"
    },
    security: {
        unauthorized: "Brak uprawnień do wyświetlenia tej strony"
    },
    license: {
        active: "Aktywna",
        yes: "Tak",
        no: "Nie",
        forUser: "Dla",
        desc: "Opis",
        validTo: "Ważna do",
        thanks: "Dziękujemy za używanie Aimpanel :)"
    },
    servers: {
        servers: "Servers",
        listOfServers: "Lista serwerów",
        state: "Stan",
        console: "Konsola",
        actions: "Akcje",
        remove: "Usuń",
        on: "Włączony",
        off: "Wyłączony",
        empty: "Brak serwerów",
        emptyMaybeAddNew: "Brak serwerów. Może warto dodać nowy? :)",
        addTooltip: "Protip: w prawym dolnym rogu znajduje się plusik",
        addServer: "Dodaj serwer",
        serverAdded: "Serwer dodano",
        addModal: {
            idLabel: "Identyfikator serwera np. 1",
            clickToAdd: "Dodaj",
            working: "Pracuję...",
            serverType: "Typ serwera"
        },
        removeModal: {
            removeServer: "Usuń serwer",
            areYouSure: "Czy jesteś pewien że chcesz usunąć serwer?<br>Jest to nieodwracalne usunięcie wszystkich plików serwera!",
            yesDestroy: "Tak, zniszcz"
        }
    },
    osStats: {
        stats: "Statystyki systemu",
        refreshEach: "Odświeżanie wykresu co {sec} sek",
        ramInMb: "RAM w MB",
        ram: {
            howTo: "Jak rozumieć zużycie RAMu?",
            apps: "Aplikacje",
            appsInfo: "pamięć zużyta przez aplikacje aby te mogły działać, jest to główny powód dla posiadania RAMu :)",
            cache: "Cache",
            cacheInfo: "często odczytywane dane z dysku są przechowywane w pamięci aby system mógł je szybciej odczytywać.",
            buffer: "Bufory",
            bufferInfo: "obszar do którego zbierane są dane do zapisu na dysk, może być duży jeśli dysk jest zbyt wolny.",
            free: "Wolne",
            freeInfo: "pamięć całkowicie nieużywana i gotowa do \"zasiedlenia\", według jądra Linux jest to zmarnowany RAM, lepiej gdy jest przeznaczony na cache.",
            cacheBufferInfo: "Cache i bufory mogą być zwolnione aby zrobić miejsce dla aplikacji.",
            cacheBufferOsInfo: "System operacyjny sam dba o odpowiednie wartości pamięci cache oraz buforów. Nie jest wymagana interwencja użytkownika."
        },
        cpuInPerc: "CPU w %",
        cpu: {
            howTo: "Co zużywa czas procesora?",
            general: {
                info: "Ogólne",
                usr: "aplikacje w systemie np. serwery gier",
                idle: "nieużywany",
                nice: "mało ważne zadania w systemie"
            },
            sys: {
                info: "Systemowe",
                sys: "jądro systemu",
                irq: "sterowniki urządzeń",
                soft: "sterowniki urządzeń c.d.",
                iowait: "oczekiwanie zapisu na dysk"
            },
            virt: {
                info: "Związane z wirtualizacją",
                steal: "inne VPSy na maszynie lub przekraczanie twojego przydziału CPU",
                guest: "tworzenie wirtualnych procesorów na maszynie"
            }
        }
    }
};