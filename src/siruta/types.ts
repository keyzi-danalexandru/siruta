
enum TIP {
    /** Judet,municipiul Bucuresti */
    JUDET = 40,
    /** Municipiu resedinta de judet, municipiul Bucuresti */
    MUNICIPIU = 1,
    /** Oras ce apartine de judet, altele decit  resedinta de judet */
    ORAS = 2,
    /** Comuna */
    COMUNA = 3,
    /** Municipiu,altele decit resedinta de judet */
    MUNICIPIU_ALTUL = 4,
    /** Oras resedinta de judet */
    ORAS_RESEDINTA = 5,
    /** Sectoarele municipiului Bucuresti */
    SECTOARE = 6,
    /** Localitate componenta, resedinta de municipiu */
    LOCALITATE_COMPONENTA_RESEDINTA = 9,
    /** Localitate componentă, a unui municipiu alta decât reşedinţă de municipiu */
    LOCALITATE_COMPONENTA = 10,
    /** Sat ce apartine de municipiu */
    SAT = 11,
    /** Localitate componenta resedinta a orasului */
    LOCALITATE_COMPONENTA_RESEDINTA_ORAS = 17,
    /** Localitati  componente ale orasului altele decit resedinta de oras */
    LOCALITATE_COMPONENTA_ORAS = 18,
    /** Sate subordonate unui oras */
    SATE = 19,
    /** Sat resedinta de comuna */
    SAT_RESEDINTA = 22,
    /** Sat ce apartine de comuna, altele decit resedinta de comuna */
    SAT_COMUNA = 23
}

enum NIV {
    JUDET = 1,
    MINICIPII_ORASE_COMUNE = 2,
    LOCALITATI_SATE = 3
}

enum MED {
    URBAN = 1,
    RURAL = 3
}

enum REGIUNE {
    NORD_EST = 1,
    SUD_EST = 2,
    SUD_MUNTENIA = 3,
    SUD_VEST_OLTENIA = 4,
    VEST = 5,
    NORD_VEST = 6,
    CENTRU = 7,
    BUCURESTI_ILFOV = 8
}

enum JUD {
    ALBA = 1,
    ARAD = 2,
    ARGES = 3,
    BACAU = 4,
    BIHOR = 5,
    BISTRITA_NASAUD = 6,
    BOTOSANI = 7,
    BRASOV = 8,
    BRAILA = 9,
    BUZAU = 10,
    CARAS_SEVERIN = 11,
    CALARASI = 51,
    CLUJ = 12,
    CONSTANTA = 13,
    COVASNA = 14,
    DAMBOVITA = 15,
    DOLJ = 16,
    GALATI = 17,
    GIURGIU = 52,
    GORJ = 18,
    HARGHITA = 19,
    HUNEDOARA = 20,
    IALOMITA = 21,
    IASI = 22,
    ILFOV = 23,
    MARAMURES = 24,
    MEHEDINTI = 25,
    MURES = 26,
    NEAMT = 27,
    OLT = 28,
    PRAHOVA = 29,
    SATU_MARE = 30,
    SALAJ = 31,
    SIBIU = 32,
    SUCEAVA = 33,
    TELEORMAN = 34,
    TIMIS = 35,
    TULCEA = 36,
    VASLUI = 37,
    VALCEA = 38,
    VRANCEA = 39,
    BUCURESTI = 40
}


type SirutaEntry = {
    "SIRUTA": number,
    "DENLOC": string,
    "CODP": number,
    "JUD": JUD,
    "SIRSUP": number,
    "TIP": TIP,
    "NIV": NIV,
    "MED": MED,
    "REGIUNE": REGIUNE,
    "FSJ": number,
    "FSL": string | number
}

export { JUD, TIP, NIV, MED, REGIUNE }
export type { SirutaEntry }
