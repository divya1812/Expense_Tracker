import React from 'react';
import { useI18n } from '../i18n';

export const Header = () => {
    const { t } = useI18n();
   
    return (
        <h2>
            {t('title')}
        </h2>
    )
}

