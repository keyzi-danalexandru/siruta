import { loadJsonSync, saveJsonSync } from "./src/json";
import { SirutaSchema } from "./src/siruta/schema";
import { SirutaEntry } from "./src/siruta/types";

const data: SirutaEntry[] = loadJsonSync("./data.gov.ro/siruta-s1-2024.json")

const output = SirutaSchema.parse(data);

saveJsonSync("./data/siruta.json", output);
