import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  richTextHasContent,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import EventoContattiWebSite from 'volto-io-comune-v2/components/ItaliaTheme/View/EventoView/EventoContattiWebSite';
import EventoContattiOrganizzatoreEsterno from 'volto-io-comune-v2/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreEsterno';
import EventoContattiOrganizzatoreInterno from 'volto-io-comune-v2/components/ItaliaTheme/View/EventoView/EventoContattiOrganizzatoreInterno';
import EventoContattiSupportatoDa from 'volto-io-comune-v2/components/ItaliaTheme/View/EventoView/EventoContattiSupportatoDa';

const messages = defineMessages({
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
});

const EventoContatti = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.organizzato_da_esterno) ||
    content?.organizzato_da_interno.length > 0 ||
    content?.supportato_da?.length > 0 ||
    content.web?.length > 0 ||
    content?.telefono ||
    content?.email ||
    content?.fax ? (
    <RichTextSection
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      {/* ---web */}
      <EventoContattiWebSite content={content} />

      {/* ---organizzato da esterno */}
      <EventoContattiOrganizzatoreEsterno content={content} />

      {/* ---contatti interno */}
      <EventoContattiOrganizzatoreInterno content={content} />

      {/* ---supportato da */}
      <EventoContattiSupportatoDa content={content} />
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoContatti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContatti;
