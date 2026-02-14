# Applicazione web per la visualizzazione e la ricerca dei punti vendita su mappa interattiva.

Per questa applicazione ho usato:
- Database: MySQL
- Backend: ExpressJS
- Frontend: React

Il backend ha al suo interno una API REST che fornisce i dati dei punti vendita (index) e i dati del singolo punto vendita (show) interrogando il database,
il frontend invece consuma l'API REST da Express è visualizza due pagine legate ognuna da una specifica rotta: la prima visualizza una lista dei punti vendita insieme ad una mappa interattiva, mentre la seconda visualizza il dettaglio di un singolo punto vendita sempre con mappa.

In questa app l'utente può:
- Cercare i negozi per nome
- Filtrare per città
- Visualizzare i negozi su mappa
- Aprire una pagina di dettaglio con informazioni e posizione geografica

le scelte implementate sono:
- **React Leaflet** per la visualizzazione delle mappe
- **Debounce** per ottimizzare la ricerca per nome

sia la lista che la mappa sono sincronizzate.