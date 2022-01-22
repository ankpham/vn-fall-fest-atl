import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';

const MainSponsor = (list) => {
    return (
        <div class="left">
        {list.data.map((section, index) => (
            <div class={section.class + '-container'} key={index}>
            <h1>{section.title}</h1>
                <div class={section.class}>
                    <img src={section.img} alt={section.img}></img>
                </div> 
            </div>
        ))}
        </div>
    )
}

const OtherSponsors = (list) => {
    return (
        <div class="right">
        {list.data.map((section, index) => (
            <div class={section.class + '-container'} key={index}>
            <h1>{section.title}</h1>
                <div class={section.class}>
                {section.content.map((sponsorContent, idx) => (
                        <img src={sponsorContent.img} alt={sponsorContent.img}key={idx}></img>
                ))}
                </div>
            </div>
        ))}
        </div>
    )
}

const SponsorsPage = () => {
    useTranslation()

    let mainSponsorData;
    let otherSponsorsData;

    if (getLanguage() === 'vn') {
        mainSponsorData = vn.sponsorList.mainSponsor;
        otherSponsorsData = vn.sponsorList.otherSponsors;
    }
    if (getLanguage() === 'en') {
        mainSponsorData = en.sponsorList.mainSponsor;
        otherSponsorsData = en.sponsorList.otherSponsors;
    }
    
    return (
        <>
        <div class="sponsors-page">
            <MainSponsor data={mainSponsorData}/>
            <OtherSponsors data={otherSponsorsData}/>
        </div>
        </>
    )
}

export default SponsorsPage;