import React from 'react';
import { Stack, Text, Title } from '@mantine/core';
import { Trans, useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack className="content" justify="center">
        <Title order={1} mb="lg">
          {t('HEADLINE')}
        </Title>
        <Stack gap="sm">
          <Text>{t('GREETING')}</Text>
          <Text>
            <Trans
              i18nKey="INFO"
              components={{
                a: (
                  <a
                    href="https://github.com/hypeIT-GmbH/hypeit-frontend-challenge/blob/main/README.md"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </Text>
        </Stack>
      </Stack>
    </>
  );
};
