import { Card, CardBody, CardText, CardTitle, Icon } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { renderPDCItemValue } from 'design-comuni-plone-theme/helpers';
import { useIntl } from 'react-intl';

const ContactsCard = ({ contact = {}, show_title = false, ...rest }) => {
  const intl = useIntl();
  const contactUrl = contact['@id'];

  return (
    <Card
      teaser
      noWrapper
      className="shadow rounded my-3 pt-0 contacts-card"
      {...rest}
    >
      {show_title && <Icon icon="it-telephone" />}
      <CardBody>
        <CardTitle className="h5">
          {show_title && (
            <UniversalLink href={contactUrl} className="text-decoration-none">
              {contact.title}
            </UniversalLink>
          )}
        </CardTitle>
        <CardText>
          {contact?.value_punto_contatto?.map((pdc, index) => (
            <span key={index}>
              <strong>
                <span className="pdc-type">{pdc.pdc_type}</span>
                <span className="pdc-desc">
                  {pdc?.pdc_desc ? ` - ${pdc.pdc_desc}` : ''}:{' '}
                </span>
              </strong>
              {Array.isArray(pdc.pdc_value) &&
                pdc?.pdc_value?.length > 0 &&
                pdc.pdc_value.map((value, index) => (
                  <>
                    {renderPDCItemValue(
                      { pdc_type: pdc.pdc_type, pdc_value: value },
                      intl,
                    )}
                    {index < pdc.pdc_value.length - 1 && ', '}
                  </>
                ))}
              {!Array.isArray(pdc.pdc_value) &&
                pdc?.pdc_value &&
                renderPDCItemValue(
                  { pdc_type: pdc.pdc_type, pdc_value: pdc.pdc_value },
                  intl,
                )}
            </span>
          )) ?? null}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default ContactsCard;
