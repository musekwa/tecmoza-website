"use client"
import { Loader } from '@googlemaps/js-api-loader'
import React, { useEffect, useRef } from 'react'


type Props = {}

const GoogleMaps = (props: Props) => {
    const mapsRef = useRef<HTMLDivElement>(null);
    
    useEffect(()=>{

        const initializeMap = async ()=>{
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
                version: 'quartely',
                language: 'pt',
            });
            const { Map } = await loader.importLibrary('maps');
            const locationMap = {
                lat: 32.584016,
                lng: -25.980219,
            };

            const options: google.maps.MapOptions = {
                center: locationMap,
                zoom: 15,
                mapId: "NEXT_MAPS_ID",
                // zoomControl: false,
                // streetViewControl: false,
                // mapTypeControl: false,
                // fullscreenControl: false,
                // gestureHandling: 'greedy',
            }

            const map = new Map(mapsRef.current as HTMLDivElement, options);


        };

        initializeMap();

    }, [ ]);


  return (
    <div ref={mapsRef} className='w-[400px] h-[400px]'>
        Google Maps
    </div>
  )
}

export default GoogleMaps