import { z } from "zod";
import { cedillaToComma } from "./cedilla-fix";
import { JUD, MED, NIV, REGIUNE, TIP } from "./types";

export const SirutaEntrySchema = z.object({
    SIRUTA: z.number(),
    DENLOC: z.string().min(2).transform(cedillaToComma),
    CODP: z.union([
        z.literal(0).transform(() => null),
        z.number().min(10000).max(929999).transform(v => v.toString().padStart(6, "0"))
    ]),
    JUD: z.union([
        z.literal(JUD.ALBA),
        z.literal(JUD.ARAD),
        z.literal(JUD.ARGES),
        z.literal(JUD.BACAU),
        z.literal(JUD.BIHOR),
        z.literal(JUD.BISTRITA_NASAUD),
        z.literal(JUD.BOTOSANI),
        z.literal(JUD.BRASOV),
        z.literal(JUD.BRAILA),
        z.literal(JUD.BUZAU),
        z.literal(JUD.CARAS_SEVERIN),
        z.literal(JUD.CALARASI),
        z.literal(JUD.CLUJ),
        z.literal(JUD.CONSTANTA),
        z.literal(JUD.COVASNA),
        z.literal(JUD.DAMBOVITA),
        z.literal(JUD.DOLJ),
        z.literal(JUD.GALATI),
        z.literal(JUD.GIURGIU),
        z.literal(JUD.GORJ),
        z.literal(JUD.HARGHITA),
        z.literal(JUD.HUNEDOARA),
        z.literal(JUD.IALOMITA),
        z.literal(JUD.IASI),
        z.literal(JUD.ILFOV),
        z.literal(JUD.MARAMURES),
        z.literal(JUD.MEHEDINTI),
        z.literal(JUD.MURES),
        z.literal(JUD.NEAMT),
        z.literal(JUD.OLT),
        z.literal(JUD.PRAHOVA),
        z.literal(JUD.SATU_MARE),
        z.literal(JUD.SALAJ),
        z.literal(JUD.SIBIU),
        z.literal(JUD.SUCEAVA),
        z.literal(JUD.TELEORMAN),
        z.literal(JUD.TIMIS),
        z.literal(JUD.TULCEA),
        z.literal(JUD.VASLUI),
        z.literal(JUD.VALCEA),
        z.literal(JUD.VRANCEA),
        z.literal(JUD.BUCURESTI),
    ]),
    SIRSUP: z.number(),
    TIP: z.union([
        z.literal(TIP.JUDET),
        z.literal(TIP.MUNICIPIU),
        z.literal(TIP.ORAS),
        z.literal(TIP.COMUNA),
        z.literal(TIP.MUNICIPIU_ALTUL),
        z.literal(TIP.ORAS_RESEDINTA),
        z.literal(TIP.SECTOARE),
        z.literal(TIP.LOCALITATE_COMPONENTA_RESEDINTA),
        z.literal(TIP.LOCALITATE_COMPONENTA),
        z.literal(TIP.SAT),
        z.literal(TIP.LOCALITATE_COMPONENTA_RESEDINTA_ORAS),
        z.literal(TIP.LOCALITATE_COMPONENTA_ORAS),
        z.literal(TIP.SATE),
        z.literal(TIP.SAT_RESEDINTA),
        z.literal(TIP.SAT_COMUNA),
    ]),
    NIV: z.union([
        z.literal(NIV.JUDET),
        z.literal(NIV.MINICIPII_ORASE_COMUNE),
        z.literal(NIV.LOCALITATI_SATE),
    ]),
    MED: z.union([
        z.literal(0).transform(() => null),
        z.literal(MED.URBAN),
        z.literal(MED.RURAL),
    ]),
    REGIUNE: z.union([
        z.literal(REGIUNE.NORD_EST),
        z.literal(REGIUNE.SUD_EST),
        z.literal(REGIUNE.SUD_MUNTENIA),
        z.literal(REGIUNE.SUD_VEST_OLTENIA),
        z.literal(REGIUNE.VEST),
        z.literal(REGIUNE.NORD_VEST),
        z.literal(REGIUNE.CENTRU),
        z.literal(REGIUNE.BUCURESTI_ILFOV),
    ]),
    FSJ: z.number(),
    FSL: z.coerce.string().transform(v => v.padStart(13, "0")),
}).strict();

export const SirutaSchema = z.array(SirutaEntrySchema);
