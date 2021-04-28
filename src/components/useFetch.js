import {useEffect} from 'react';

const useFetch = (setDiaryList, URL, updateStatus) => {
    const getDiaries = async () => {
        const data = await fetch(URL);
        const jsonData = await data.json();
        setDiaryList(jsonData);
    };

    useEffect(() => {
        getDiaries();
    }, [updateStatus]);
};

export default useFetch;