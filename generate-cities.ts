#!/usr/bin/env ts-node

import DataSet from "./data.gov.ro/4f83414b-d697-4768-845d-c31bd9173734.json"
import Counties from "./data/counties.json";
import Bucuresti from "./posta-romana.ro/bucuresti.json";
import { writeFile } from "node:fs/promises";

const cedillaToComma = (str: string) => str.replace(/[şţŞŢ]/g, (match) => {
    const replacements = {
      'ş': 'ș',
      'ţ': 'ț',
      'Ş': 'Ș',
      'Ţ': 'Ț'
    };
    return replacements[match as "ş" | "ţ" | "Ş" | "Ţ"];
});

const getJudetIsoCode = (judet: string) => {
    const iso_code = Counties.find(county => county.name === judet)?.iso_code;

    if(!iso_code) {
        throw new Error(`Judetul ${judet} nu a fost gasit`);
    }

    return iso_code;
}

void async function main() {

    const data = DataSet.records.map(record => {
        const [_id, _, judet, localitate, zipcode, siruta] = record as [number, number, string, string, number, number];
        return {
            judet: cedillaToComma(judet),
            localitate: cedillaToComma(localitate),
            zipcode: zipcode.toString().padStart(6, "0"),
            siruta
        }
    })

    const groupedData = data.reduce((acc, item) => {
        if(!acc[item.judet]) {
            acc[item.judet] = [];
        }

        acc[item.judet].push(item);
        return acc;
    }, {} as Record<string, typeof data>);

    for(const judet in groupedData) {
        const judetIsoCode = getJudetIsoCode(judet);
        const cities = groupedData[judet];

        const data = cities.map(({localitate, zipcode, siruta}) => ({
            name: localitate,
            zipcode: zipcode,
            siruta: siruta
        }));

        await writeFile(`./data/cities/${judetIsoCode}.json`, JSON.stringify(data, null, 2));
    }

    

    const cityBucuresti = {
        name: "București",
        zipcode: Bucuresti.map(({zipcode, adresa}) => ({zipcode, address: cedillaToComma(adresa)})),
        siruta: 179132
    }

    await writeFile(`./data/cities/RO-B.json`, JSON.stringify([cityBucuresti], null, 2));
}()
