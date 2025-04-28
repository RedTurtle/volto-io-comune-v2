/**
 * UOContacts component.
 * custom:
 * - Added a new section for displaying contact information(telefono, fax, email, web and pec).
 */

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichText,
  UOContactsLocations,
  UOContactsSediSecondarie,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import UOContactsContacts from 'volto-io-comune-v2/components/ItaliaTheme/View/UOView/UOContactsParts/UOContactsContacts';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orario per il pubblico',
  },
});

const UOContacts = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(content?.sede?.length > 0 ||
        content?.sedi_secondarie?.length > 0 ||
        content?.geolocation?.latitude > 0 ||
        content?.geolocation?.longitude > 0 ||
        content?.nome_sede?.length > 0 ||
        content?.street?.length > 0 ||
        content?.city?.length > 0 ||
        content?.zip_code?.length > 0 ||
        content?.telefono?.length > 0 ||
        content?.fax?.length > 0 ||
        content?.web?.length > 0 ||
        content?.email?.length > 0 ||
        content?.pec?.length > 0 ||
        richTextHasContent(content?.orario_pubblico) ||
        content?.contact_info?.length > 0) && (
        <section id="contatti" className="it-page-section anchor-offset mb-5">
          <h2 id="header-contatti" className="mb-3 h4">
            {intl.formatMessage(messages.contatti)}
          </h2>

          {/* CONTATTI SEDI PRINCIPALI */}
          <UOContactsContacts content={content} />

          {/* LOCATIONS E MAPPA */}
          <UOContactsLocations content={content} />

          {richTextHasContent(content.contact_info) && (
            <div className="mb-5">
              <RichText data={content.contact_info} />
            </div>
          )}
          {richTextHasContent(content.orario_pubblico) && (
            <div className="mb-5">
              <h3 className="h5">
                {intl.formatMessage(messages.orario_pubblico)}
              </h3>
              <RichText data={content.orario_pubblico} />
            </div>
          )}

          {/* CONTATTI */}

          {/* SEDI SECONDARIE */}
          <UOContactsSediSecondarie content={content} />
        </section>
      )}
    </>
  );
};

export default UOContacts;
