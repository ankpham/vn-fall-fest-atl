import React from 'react';
import {getLanguage, useTranslation} from 'react-multi-lang';
import vn from '../database/vn';
import en from '../database/en';
import SlideShow from '../components/SlideShow';
import Sponsors from '../components/Sponsors'
import PhotoGallery from '../components/PhotoGallery';

const Homepage = () => {
    useTranslation();

    let photoGalleryDataOne;
    let photoGalleryDataTwo;

    if (getLanguage() === 'vn') {
        photoGalleryDataOne = vn.photoGalleries.galleryOne;
        photoGalleryDataTwo = vn.photoGalleries.galleryTwo;
    }
    else if (getLanguage() === 'en') {
        photoGalleryDataOne = en.photoGalleries.galleryOne;
        photoGalleryDataTwo = en.photoGalleries.galleryTwo;
    }

    return (
        <>
        <SlideShow/>
        <Sponsors/>
        <PhotoGallery data={photoGalleryDataOne}/>
        <PhotoGallery data={photoGalleryDataTwo}/>
        </>
    )
}

export default Homepage;