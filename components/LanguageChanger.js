'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { useEffect, useState, useTransition } from 'react';
import { cn } from '@/lib/utils';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const { isPending, startTransition } = useTransition();

    const handleChange = (newLocale) => {
        // startTransition(() => {

            // set cookie for next-i18n-router
            const days = 30;
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            const expires = date.toUTCString();
            document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

            // redirect to the new locale path
            if (
                currentLocale === i18nConfig.defaultLocale &&
                !i18nConfig.prefixDefault
            ) {
                if(currentPathname.startsWith('/' + newLocale)) {
                    router.push('/' + currentPathname);
                    
                }
                else {
                    router.push('/' + newLocale + currentPathname);
                }

            } else {
                router.push(
                    currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
                );
            }

            router.refresh();
        // })
    };


    return (

        <div className=' mt-2 h-fit w-fit'>
            <div className='flex gap-2'>

                <div onClick={() => handleChange('pt')} className={cn(
                    'flex gap-1 cursor-pointer hover:bg-gray-100 p-2  rounded-3xl ',
     
                )}>
                    <span className='fi fi-pt' />
                    {/* <p className=''>PT</p> */}
                </div>
                <div className='p-1'>
                    {" | "}
                </div>
                <div onClick={() => handleChange('en')} className={cn(
                    'flex gap-1 cursor-pointer hover:bg-gray-100 p-2  rounded-3xl ',        
                )}>
                    <span className='fi fi-gb' />
                    {/* <p>EN</p> */}
                </div>
            </div>
        </div>
    );
}