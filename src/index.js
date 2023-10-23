import applyItaliaConfig from 'design-comuni-plone-theme/config/italiaConfig';
import '@plone/volto/config';

import {
  ContentImage,
  EventoCosE,
  EventoLuoghi,
  EventoDateOrari,
  EventoCosti,
  EventoDocumenti,
  EventoPadreEFigli,
  EventoUlterioriInformazioni,
  EventoSponsors,
  ServizioCosE,
  ServizioAccedi,
  ServizioAChiSiRivolge,
  ServizioComeFare,
  ServizioCosaServe,
  ServizioCosaSiOttiene,
  ServizioCostiVincoli,
  ServizioCasiParticolari,
  ServizioProcedure,
  ServizioAltriDocumenti,
  ServizioSitiEsterni,
  ServizioAllegati,
  ServizioModulistica,
  ServizioTrasparenza,
  ServizioCorrelati,
  ServizioUlterioriInformazioni,
  ServizioMetadati,
  ServizioCondizioni,
  ServizioArgomenti,
  ServizioMetatag,
  VenueDescription,
  VenueServices,
  VenueAccessMode,
  VenueWhere,
  VenuePublicTimetable,
  VenueMoreInfos,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import {
  EventoContatti,
  ServizioTempiScadenze,
  ServizioContatti,
  VenueContacts,
} from 'volto-io-comune-v2/components/ItaliaTheme/View';

export default function applyConfig(voltoConfig) {
  let config = applyItaliaConfig(voltoConfig);

  config.settings.italiaThemeViewsConfig = {
    ...config.settings.italiaThemeViewsConfig,
    Event: {
      sections: [
        {
          /* HEADER IMAGE */
          component: ContentImage,
          props: { position: 'documentBody' },
        },
        { /* COS'è */ component: EventoCosE },
        { /* LUOGHI */ component: EventoLuoghi },
        { /* DATE E ORARI */ component: EventoDateOrari },
        { /* COSTI */ component: EventoCosti },
        { /* DOCUMENTI */ component: EventoDocumenti },
        { /* CONTATTI */ component: EventoContatti }, // componente dell'addon
        { /* EVENTS */ component: EventoPadreEFigli },
        { /* SPONSORS */ component: EventoSponsors },
        { /* ULTERIORI INFORMAZIONI */ component: EventoUlterioriInformazioni },
      ],
    },
    Servizio: {
      sections: [
        {
          /* HEADER IMAGE */
          component: ContentImage,
          props: { position: 'documentBody' },
        },
        { /* METADATI SCHEMA.ORG */ component: ServizioMetatag },
        { /* A CHI È RIVOLTO */ component: ServizioAChiSiRivolge },
        { /* DESCRIZIONE */ component: ServizioCosE },
        { /* COME FARE */ component: ServizioComeFare },
        { /* COSA SERVE */ component: ServizioCosaServe },
        { /* COSA SI OTTIENE */ component: ServizioCosaSiOttiene },
        { /* TEMPI E SCADENZE */ component: ServizioTempiScadenze }, // componente dell'addon
        { /* QUANTO COSTA */ component: ServizioCostiVincoli },
        { /* CASI PARTICOLARI */ component: ServizioCasiParticolari },
        { /* PROCEDURE ESITO */ component: ServizioProcedure },
        { /* ACCEDI AL SERVIZIO */ component: ServizioAccedi },
        {
          /* ULTERIORI INFORMAZIONI */
          component: ServizioUlterioriInformazioni,
        },
        { /* ALTRI DOCUMENTI */ component: ServizioAltriDocumenti },
        { /* SITI ESTERNI */ component: ServizioSitiEsterni },
        { /* ALLEGATI */ component: ServizioAllegati },
        { /* MODULISTICA */ component: ServizioModulistica },
        { /* CONDIZIONI DI SERVIZIO */ component: ServizioCondizioni },
        { /* CONTATTI */ component: ServizioContatti }, // componente dell'addon
        { /* TRASPARENZA */ component: ServizioTrasparenza },
        { /* CORRELATI  */ component: ServizioCorrelati },
        { /* ARGOMENTI */ component: ServizioArgomenti },
        { /* ULTIMO AGGIORNAMENTO  */ component: ServizioMetadati },
      ],
    },
    Venue: {
      sections: [
        {
          /* HEADER IMAGE */
          component: ContentImage,
          props: { position: 'documentBody' },
        },
        { /* DESCRIZIONE */ component: VenueDescription },
        { /* SERVIZI CORRELATI */ component: VenueServices },
        { /* MODALITA DI ACCESSO */ component: VenueAccessMode },
        { /* MAPPA */ component: VenueWhere },
        { /* ORARIO AL PUBBLICO */ component: VenuePublicTimetable },
        { /* CONTATTI */ component: VenueContacts }, // componente dell'addon
        { /* ULTERIORI INFORMAZIONI */ component: VenueMoreInfos },
      ],
    },
  };

  delete config.widgets.id.canale_digitale;

  return config;
}
