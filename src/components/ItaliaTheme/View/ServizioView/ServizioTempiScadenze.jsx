/*
 * Rispetto al v2 se "tempi_e_scadenze" non esiste non mostra nulla
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextArticle,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  tempi_e_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
});

const ServizioTempiScadenze = ({ content }) => {
  const intl = useIntl();
  return content?.tempi_e_scadenze &&
    richTextHasContent(content?.tempi_e_scadenze) ? (
    <RichTextArticle
      content={content.tempi_e_scadenze}
      add_class="style_ol_list"
      tag_id={'text-tempi_e_scadenze'}
      title={intl.formatMessage(messages.tempi_e_scadenze)}
    />
  ) : (
    <></>
  );
};

ServizioTempiScadenze.propTypes = {
  content: PropTypes.shape({
    tempi_e_scadenze: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioTempiScadenze;
