/*
 * Rispetto al v2 è stata aggiunta la possibilità di vedere i contatti anche di un campo richText ulteriore definito con la prop 'contatti'
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody } from 'design-react-kit';

import {
  RichTextArticle,
  OfficeCard,
  RichText,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
});

const ServizioContatti = ({ content }) => {
  const intl = useIntl();

  return content?.ufficio_responsabile?.length > 0 ||
    content?.area?.length > 0 ||
    richTextHasContent(content?.contatti) ? (
    <RichTextArticle
      tag_id="contatti"
      title={intl.formatMessage(messages.contatti)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content?.ufficio_responsabile?.length > 0 && (
          <>
            {content.ufficio_responsabile.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} load_data={false} />
            ))}
          </>
        )}
        {content?.area?.length > 0 && (
          <>
            {content.area.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} load_data={false} />
            ))}
          </>
        )}
        {richTextHasContent(content?.contatti) && (
          <Card
            className="card card-teaser rounded shadow mt-3"
            noWrapper={true}
            tag="div"
          >
            <CardBody tag="div" className="card-body">
              <RichText data={content.contatti} add_class={'card-text'} />
            </CardBody>
          </Card>
        )}
      </div>
    </RichTextArticle>
  ) : (
    <></>
  );
};

ServizioContatti.propTypes = {
  content: PropTypes.shape({
    ufficio_responsabile: PropTypes.array,
    area: PropTypes.array,
  }),
};
export default ServizioContatti;
