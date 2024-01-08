import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async (url) => {
            try {
                let response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Failed to fetch data. Status: ${response.status}`);
                }

                let responseJson = await response.json();
                setData(responseJson);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData(url);

        return () => {
            
        };
    }, [url]);

    return { data };
}

export default useFetch;
