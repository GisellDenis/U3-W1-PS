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
    
   
      ricarica(euro: number): void {
      this.carica += euro;
      console.log(`Hai ricaricato ${euro} euro. Il tuo credito residuo è ora di ${this.carica} euro`);
       }
    
      numero404(): string {
      return `Il tuo credito residuo è di ${this.carica} euro`;
      }
    
      getNumeroChiamate(): number {
          return this.numeroChiamate;
        }
    
      chiamata(min: number): void {
          this.carica -= min * this.costoMinuto;
          this.numeroChiamate++;
          const id = this.registroChiamate.length +1;
          const dataOra = new Date();
          this.registroChiamate.push({ id, durata:min, dataOra });
          console.log(`Hai effettuato una chiamata di ${min} minuti. Il tuo credito residuo è ora di ${this.carica} euro`);
        }
    
    azzeraChiamate(): void {
      this.numeroChiamate = 0;
  }
    