import React, {useEffect} from 'react'
import { useI18n } from '../i18n/useI18n';

export const ChangeLanguage = () => {
    const { t, setLanguage } = useI18n();
    useEffect(() => {
        setLanguage('en')
    }, []);
    const handleSetLanguage = (e) => {
        const lang = e.target.value;
        setLanguage(lang)
    }
    return (
        <div>
          <select onChange={handleSetLanguage}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="nl">Dutch</option>
        </select>  
        </div>
    )
}
