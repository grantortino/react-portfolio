import React from 'react';
import LanguageText01 from '../text/LanguageText01';
import BackButton from './BackButton';
import LanguageTable from '../components/LanguageTable';

function Language() {
    return (
        <div>
            <h1 className="h1-style">LANGUAGE</h1>
            <LanguageText01 />
            <LanguageTable />
            <BackButton pathData="/work" />
        </div>
    )
};

export default Language;