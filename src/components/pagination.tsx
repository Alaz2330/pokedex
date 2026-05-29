`use client`

import { useEffect, useState } from "react";

interface PaginationProps{
    pagination: any;
    setPagination: Function;
}

interface PageVariables {
    actualPage: number;
    pagesList: number[];
}

export default function Pagination({pagination, setPagination}: PaginationProps) {
    const [pageVariables, setPageVariables] = useState<PageVariables>({
        actualPage: 1,
        pagesList: [],
    }); 
    
    useEffect(()=>{
        createPagesArray();        
    }, [])

    function createPagesArray(){
        const totalPages = Math.ceil(pagination.totalResults / pagination.pageLimit)
        const pages = Array.from({length: totalPages}, (_, index) => index + 1)                
        setPageVariables((prev: PageVariables) => {
            console.log(prev);
            return {
                ...prev,
                pagesList: pages
            }})
    };

    function MoveForward(){
        const nextOffset = ((pageVariables.actualPage-1)+1)*pagination.pageLimit
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
    };

    function MoveByNumbers(page){
        const nextOffset = (page-1)*pagination.pageLimit
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
    };

    function ComeBack(){
        const nextOffset = ((pageVariables.actualPage-1)-1)*pagination.pageLimit        
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
    };

    return(
        <div className="flex gap-2 justify-center mt-4">
        <div className="grid grid-cols-6">
            <button type="button">First</button>
            {pageVariables.pagesList.slice(pageVariables.actualPage-1, (pageVariables.actualPage+3)).map((page) => (
              <button type="button" key={page} onClick={() => MoveByNumbers(page)}>{page}</button>  
            ))}
            <button type="button">Last</button>
        </div>
        </div>
    )
}