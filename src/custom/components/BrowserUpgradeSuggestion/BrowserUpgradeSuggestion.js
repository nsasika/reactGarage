import React from 'react';
import Bowser from 'bowser';
import { useTranslation } from 'react-i18next';
import Text from '../Text';
import Link from '../Link';
import HeaderNotificationBar from '../HeaderNotificationBar';

const BROWSER_UPGRADE_SUGGESTION_MESSAGE =
  "You're using an outdated browser that Pagero does not fully support.";

const VALID_BROWSERS = {
  chrome: '>75',
  edge: '>75',
};

const isValidBrowser = Bowser.getParser(window.navigator.userAgent).satisfies(VALID_BROWSERS);

function Message() {
  const { t } = useTranslation();

  return (
    <Text>
      {t(BROWSER_UPGRADE_SUGGESTION_MESSAGE)}{' '}
      <Link
        href='#'
        sx={{
          '&:hover': {
            color: 'green.40',
          },
          '&:focus': {
            color: 'green.40',
            outlineWidth: '2px',
            outlineStyle: 'solid',
            outlineColor: 'green.30',
            outlineOffset: '2px',
          },
        }}
      >
        {t('Learn more')}
      </Link>
    </Text>
  );
}

export default function BrowserUpgradeSuggestion() {
  return !isValidBrowser ? <HeaderNotificationBar messageComponent={<Message />} /> : null;
}
