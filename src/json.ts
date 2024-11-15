import { readFileSync, writeFileSync } from "fs";

export function loadJsonSync<T>(filePath: string): T {
    return JSON.parse(readFileSync(filePath, 'utf-8'));
}

export function saveJsonSync(filePath: string, data: any) {
    return void writeFileSync(filePath, JSON.stringify(data, null, "\t"));
}
