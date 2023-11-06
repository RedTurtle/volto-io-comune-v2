import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  richTextHasContent,
  OfficeCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  contatti_interni: {
    id: 'contatti_interni',
    defaultMessage: 'Contatti interni',
  },
});

const EventoContattiOrganizzatoreInterno = ({ content }) => {
  const intl = useIntl();
  return content?.organizzato_da_interno?.length > 0 ? (
    <div className="mb-5">
      <h3 className="h5">{intl.formatMessage(messages.contatti_interni)}</h3>
      {content?.organizzato_da_interno?.map((item, index) => (
        <OfficeCard
          margin_bottom={index < content?.organizzato_da_interno?.length - 1}
          key={item['@id']}
          office={item}
          extended={true}
          icon={'it-telephone'}
        >
          {richTextHasContent(content?.contatto_reperibilita) && (
            <p className="card-text mt-3">
              {content?.contatto_reperibilita?.replace(/(<([^>]+)>)/g, '')}
            </p>
          )}
        </OfficeCard>
      ))}
    </div>
  ) : null;
};

EventoContattiOrganizzatoreInterno.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContattiOrganizzatoreInterno;
