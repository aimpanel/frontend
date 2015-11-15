window.locale.pl = {
    general: {
        notfound: "Błąd 404 - Nie znaleziono strony",
        notfoundNote: "Dajemy Ci za to gifa z kotem",
        close: "Zamknij",
        loading: "Ładowanie",
        taskAddedToQueue: "Zadanie dodane do kolejki",
        remember: "Pamiętaj!",
        desc: "Opis"
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
        "loggingIn": " Logowanie...",
        "sessionExpired": "Sesja przedawniona, zaloguj się ponownie"
    },
    about: {
        panel: "O panelu",
        thanks: "Aimpanel powstał dzięki wspaniałym projetom osób trzecich, większość jest otwartoźródłowa.",
        specialThanks: "Szczególne podziękowania",
        license: "Licencja",
        proprietaryLicense: "licencja własnościowa",
        composerPacks: "Paczki PHP używane przez Aimpanel backend z Composer'a",
        version: "Wersja",
        project: "Projekt",
        link: "Link"
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
        thanks: "Dziękujemy za używanie Aimpanel :)",
        howToUpdate: "Jak zaktualizować licencję?",
        howToUpdateDesc: "Potrzebujesz klucza produktu który jest podobny jest w formacie:",
        helpCmd: "Następnie wykonaj komendę spod konta root przez SSH:",
        yourKey: "twoj_klucz",
        example: "example:"
    },
    servers: {
        servers: "Serwery",
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
        serverRemoved: "Server removed",
        addModal: {
            idLabel: "Identyfikator serwera np. 1",
            clickToAdd: "Dodaj",
            working: "Pracuję...",
            serverType: "Typ serwera",
            ts3CostWarningPreLink: "Aby TS3MusicBot zadziałał potrzebna jest licencja z ",
            ts3CostWarningPostLink: " kosztująca €2.50 na miesiąc",
            csgoManualInstall: 'Po dodaniu serwera należy uruchomić jedną komendę w SSH aby zainstalować pliki serwera <a class="green-text" target="_blank" href="http://aimpanel.pro/pl/dokumentacja/serwery-gier/">Instrukcja</a>'
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
    },
    tasks: {
        title: "Zadania",
        empty: "Brak zadań",
        id: "ID",
        lastModified: "Ostatnia modyfikacja",
        state: "Stan",
        progressBar: "Pasek postępu"
    },
    serverMenu: {
        title: "Menu serwera",
        java: "Java",
        autorestart: "Autorestart",
        sftp: "SFTP",
        info: "Informacje",
        stats: "Statystyki",
        console: "Konsola i log",
        params: "Parametry"
    },
    server: {
        autorestart: {
            title: "Autorestart",
            alwaysOn: "Autorestart serwera jest zawsze włączony.",
            queue: "Panel co pełną minutę sprawdza czy proces serwera jest włączony, jeśli jest wyłączony to dodaje do kolejki zadanie restartu serwera.",
            estimate: "Wystartowanie serwera po crashu powinno zająć około minuty."
        },
        console: {
            title: "Konsola",
            console: "Konsola",
            log: "Log"
        },
        stats: {
            title: "Statystyki",
            timespan: "Przedział czasu",
            day1: "Ostatnie 24h",
            day7: "Ostatnie 7 dni",
            day30: "Ostatnie 30 dni"
        },
        sftp: {
            title: "SFTP",
            credentials: "Dane do konta SFTP",
            host: "Adres",
            username: "Login",
            port: "Port",
            password: "Hasło",
            secureInfo: "SFTP to zalecany i bezpieczny sposób aby przesyłać pliki na serwer.",
            desc: "SFTP (ang. SSH File Transfer Protocol) – protokół komunikacyjny typu klient-serwer, który umożliwia przesyłanie plików poprzez sieć TCP/IP. Przesyłając plik przy użyciu protokołu FTP uzyskujemy dobre przepływności, ale nie zyskujemy bezpieczeństwa – nasze hasła i dane nie są szyfrowane podczas przysyłania, co potencjalnie stwarza zagrożenie ich kradzieży. Znaczną poprawę bezpieczeństwa przynosi protokół SFTP, który nie wymaga obecności serwera FTP, a przesyłane dane są szyfrowane z wykorzystaniem klucza szyfrującego. SFTP nie powinien być mylony z protokołem FTPS, który jest rozszerzeniem protokołu FTP.",
            descSource: "<a class=\"green-text truncate\" href=\"https://pl.wikipedia.org/wiki/SSH_File_Transfer_Protocol\"  target=\"_blank\">https://pl.wikipedia.org/wiki/SSH_File_Transfer_Protocol</a>",
            newPassword: {
                set: "Ustaw nowe losowe hasło do konta SFTP",
                pressToRandom: "Wciśnięcie przycisku wygeneruje nowe bezpieczne 16 znakowe hasło.",
                noRecovery: "Po ustawieniu hasła ze względów bezpieczeństwa nie można go już odczytać, można za to utworzyć nowe.",
                clickToChange: "Zmień hasło",
                done: "Gotowe! Poniżej twoje nowe hasło, możesz je wkleić do klienta SFTP np.",
                newPass: "Nowe hasło"
            }
        },
        params: {
            generic: {
                param: "Parametr",
                params: "Parametry",
                help: "Pomoc z parametrami",
                change: "Zmień pogrubiony tekst na swoje ustawienia."
            },
            ts3mb: {
                email: "Twój email zarejestrowany na",
                webPort: "Port web interfejsu WWW",
                adminPass: "Hasło admina web interfejsu",
                userPass: "Hasło użytkownika web interfejsu (ograniczony dostęp)",
                noQuery: "Wyłącz funkcję czatu na TS3 (zalecane na start)"
            }
        },
        mc: {
            info: {
                title: "Informacje o serwerze",
                portGame: "Port gry",
                portQuery: "Port query",
                portRcon: "Port RCON",
                passwordRcon: "Hasło RCON",
                onlineMode: "Tryb online",
                on: "Włączony",
                off: "Wyłączony",
                configNotFound: "Nie znaleziono pliku server.properties"
            },
            java: {
                title: "JVM",
                paramsSaved: "Parametry zapisano",
                javaRamHog: "JVM (Wirtualna Maszyna Java) potrafi zająć całą dostępną pamięć RAM, dlatego warto z góry przydzielić jej maksymalną pamięć.<br>Służy do tego parametr -Xmx.",
                paramExample: " Przykładowo dla limitu 1024MB RAM należy użyć:<br>-Xmx1024M",
                javaRamHogWarning: "Wartość Xmx powinna być mniejsza niż dostępny RAM, gdyż JVM potrafi zająć RAMu więcej niż zostanie przydzielone.",
                jvmParams: "Parametry JVM",
                param: "Parametr",
                add: "Dodaj",
                save: "Zapisz"
            }
        }
    }
};