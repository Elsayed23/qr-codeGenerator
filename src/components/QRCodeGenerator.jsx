import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { Button, Input } from '@material-tailwind/react';
import html2canvas from 'html2canvas';


const QRCodeGenerator = () => {
    const [text, setText] = useState('');

    const handleDownload = () => {

        const qrCodeElement = document.getElementById('qrcode');

        html2canvas(qrCodeElement).then((canvas) => {
            const dataURL = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'qrcode.png';

            link.click();
        });
    };


    return (
        <div className='flex flex-col items-center gap-3 w-full'>
            <div className="w-full sm:w-72">
                <Input
                    type="text"
                    size='lg'
                    color='white'
                    value={text}
                    variant='standard'
                    onChange={(e) => setText(e.target.value)}
                    label="Enter text or url for QR code"
                />
            </div>
            <div className={`${text ? 'visible' : 'invisible'} flex flex-col items-center gap-4 w-full sm:w-64`}>
                <div className="bg-white p-3 rounded-md w-full">
                    <QRCode value={text} id='qrcode' size='250' className='w-full ' />
                </div>
                <Button variant='filled' color='deep-purple' onClick={handleDownload} className="w-full text-center sm:w-fit">
                    Download QR Code
                </Button>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
