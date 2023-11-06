import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  event_web_site: {
    id: 'event_web_site',
    defaultMessage: "Sito web dell'evento",
  },
});

const EventoContattiWebSite = ({ content }) => {
  const intl = useIntl();

  return content?.web?.length > 0 ? (
    <div className="mb-5 mt-3">
      <h3 className="h5">{intl.formatMessage(messages.event_web_site)}</h3>
      <a
        href={
          content.web.match(/^(http:\/\/|https:\/\/)/gm)
            ? content.web
            : `http://${content.web}`
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        {content.web}
      </a>
    </div>
  ) : null;
};

EventoContattiWebSite.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoContattiWebSite;
