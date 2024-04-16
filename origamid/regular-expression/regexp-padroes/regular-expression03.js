const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;
const regexpCEP = /\d{5}[-\s]?\d{3}/g;
const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;
const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

const regexpTAG = /<\/?[\w\s="']+\/?>/gi;