/**Customizations:
 * - Validazione per evitare errori in caso di contatti non validi o vuoti
 * - Added ContactsCardPerson in the place of ContactsCard of v3
 */

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import ContactsCardPerson from 'volto-io-comune-v2/components/ItaliaTheme/View/Commons/ContactsCardPerson';

const messages = defineMessages({
  contacts: {
    id: 'contacts',
    defaultMessage: 'Contatti',
  },
});

const PersonaContatti = ({ content }) => {
  const intl = useIntl();

  //Validazione per evitare errori in caso di contatti non validi o vuoti
  const validContactGroups =
    content.contact_info && Array.isArray(content.contact_info)
      ? content.contact_info.filter(
          (contact_array) =>
            Array.isArray(contact_array) &&
            contact_array.some(
              (contact) =>
                Array.isArray(contact.value_punto_contatto) &&
                contact.value_punto_contatto.length > 0,
            ),
        )
      : [];

  return validContactGroups.length > 0 ? (
    <RichTextSection
      title={intl.formatMessage(messages.contacts)}
      tag_id="contacts"
    >
      {validContactGroups.map((contact_array) =>
        contact_array.map((contact) => (
          <ContactsCardPerson contact={contact} key={contact['@id']} />
        )),
      )}
    </RichTextSection>
  ) : null;
};

export default PersonaContatti;
