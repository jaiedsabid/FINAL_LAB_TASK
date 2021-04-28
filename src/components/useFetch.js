import {useEffect} from 'react';

const useFetch = (setDiaryList, URL) => {
    const getDiaries = async () => {
        const data = await fetch(URL);
        const jsonData = await data.json();
        setDiaryList(jsonData);
    };

    useEffect(() => {
        getDiaries();
    }, []);
};

export default useFetch;