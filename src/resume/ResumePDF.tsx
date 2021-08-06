import { useCallback, useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import resume from 'resources/resume2021.pdf';
import 'react-pdf/dist/umd/Page/AnnotationLayer.css';

export default function ResumePDF(props: {}) {
    const { height, width } = useWindowDimensions()

    return (
        <Document className="ResumePDF" file={resume}>
            <Page
                renderTextLayer={false}
                width={width * 0.7}
                pageNumber={1} />
        </Document>
    )
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

