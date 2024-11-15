const cedillaToComma = (str: string) => str.replace(/[şţŞŢ]/g, (match) => {
    const replacements = {
      'ş': 'ș',
      'ţ': 'ț',
      'Ş': 'Ș',
      'Ţ': 'Ț'
    };
    return replacements[match as "ş" | "ţ" | "Ş" | "Ţ"];
});

export { cedillaToComma };