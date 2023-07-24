interface Smartphone {
    carica: number; 
    numeroChiamate: number; 
    costoMinuto: number;
    registroChiamate: { id: number; durata: number; dataOra: Date }[]; 

    ricarica(euro: number): void; 
    numero404(): string; // 
    getNumeroChiamate(): number; 
    chiamata(min: number): void; 
    mostraRegistroChiamate(): void; 
    filtraChiamatePerDataOra(dataOra: Date): void; }

    class Smartphone implements Smartphone {
        // Queste sono le proprietà della classe
        carica: number;
        numeroChiamate: number;
        costoMinuto: number = 0.20;
        registroChiamate: { id: number; durata: number; dataOra: Date }[];
      
        constructor() {
          this.carica = 0;
          this.numeroChiamate = 0;
          this.registroChiamate = [];
        }
    }    