# Customizations di volto-io-comune-v2

Indice delle customization in `src/customizations`, tutte verso `design-comuni-plone-theme`. Verificate durante la migrazione a Volto 19 / design-comuni-plone-theme 13.x (agosto 2026): in nessuno dei 4 file il punto customizzato è cambiato tra dcpt 12.15.0 e 13.x, quindi non è stato necessario alcun realignment del codice — solo la standardizzazione dell'header di documentazione. Ogni file ha in testa un header `CUSTOMIZATION` con l'URL dell'originale su design-comuni-plone-theme e le modifiche introdotte.

| File | Modifiche |
|---|---|
| `helpers/FormValidation/FormValidationHelpers.js` | eliminata la validazione nei campi "canale fisico", "canale digitale" e "link al canale" |
| `components/ItaliaTheme/View/PersonaView/PersonaContatti.jsx` | validazione per evitare errori con contatti non validi o vuoti; usa `ContactsCardPerson` al posto di `ContactsCard` (v3) |
| `components/ItaliaTheme/View/UOView/UOContacts.jsx` | aggiunta una sezione per mostrare telefono, fax, email, web e pec |
| `components/ItaliaTheme/Blocks/Listing/MapTemplate.jsx` | aggiunto link esterno in `onMarkerClick` se è presente il parametro "web" nel CT Luogo — **nota:** rer-theme sovrascrive ulteriormente questo stesso file con filtri per categoria e un popup di dettaglio; quando rer-theme è installato è la sua versione ad essere effettivamente attiva (vedi `rer-theme/docs/CUSTOMIZATIONS.md`) |

## Nota sulla migrazione a Volto 19

Il pacchetto è stato messo in sviluppo (`mrs.developer.json`, checkout in `src/addons/volto-io-comune-v2`) durante la migrazione di io-Comune a Volto 19.1.5 perché è uno degli addon RER da adeguare. Il sorgente del pacchetto (fuori da `src/customizations`, es. `components/ItaliaTheme/View/EventoView/*`) non è stato ancora verificato/adeguato in questa sessione: quel lavoro resta da fare.
