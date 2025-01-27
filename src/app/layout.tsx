import React from 'react';
import CuPage from './subendpoint/page';
export default function RootLayout ({children} : {children: React.ReactNode}){
    return (
        <html lang="pt-br">
            <body>
                {children}
            </body>
        </html>
    )
}