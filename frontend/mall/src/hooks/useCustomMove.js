import { useCallback, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"


const getNum = (param, defaultValue) => {

    if(!param) {
        return defaultValue
    }
    return parseInt(param);
}

const useCustomMove = () => {
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false) //추가

    const [queryParams] = useSearchParams();
    const page = getNum(queryParams.get('page'), 1)
    const size = getNum(queryParams.get('size'), 10)
    const queryDefault = createSearchParams({page, size}).toString(); //새로추가

    const moveToList = (pageParam) => {
        let queryStr = "";
        if(pageParam) {
            const pageNum = getNum(pageParam.page, 1);
            const sizeNum = getNum(pageParam.size, 10);
            queryStr = createSearchParams({page: pageNum, size: sizeNum}).toString();
        } else {
            queryStr = queryDefault;
        }
        navigate({
            pathname: `../list`,
            search:queryStr
        })
        setRefresh(!refresh) //추가
    }
    const moveToModify = useCallback((num) => {
        console.log(queryDefault)
        navigate({ pathname: `../modify/${num}`, search: queryDefault });
    });
    const moveToRead = (num) => {
        console.log(queryDefault)
        navigate({
            pathname: `../read/${num}`,
            search:queryDefault
        });
    }
    return {moveToList, moveToModify, moveToRead, page, size, refresh} //refresh 추가 //moveToRead 추가
}

export default useCustomMove;


