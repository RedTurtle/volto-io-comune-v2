/*
 * Rispetto al v2 se "tempi_e_scadenze" non esiste non mostra nulla
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { ServizioTempiScadenze as ServizioTempiScadenze_V3 } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const ServizioTempiScadenze = ({ content }) => {
  return content?.tempi_e_scadenze &&
    richTextHasContent(content?.tempi_e_scadenze) ? (
    <ServizioTempiScadenze_V3 content={content} />
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
