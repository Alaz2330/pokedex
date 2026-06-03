`use client`

import { useEffect, useState } from "react";

interface PaginationProps{
    pagination: any;
    setPagination: Function;
}

interface PageVariables {
    actualPage: number;
    pagesList: number[];
    fragmentedList: number[];
}

export default function Pagination({pagination, setPagination}: PaginationProps) {
    const [pageVariables, setPageVariables] = useState<PageVariables>({
        actualPage: 1,        
        pagesList: [],
        fragmentedList: [],
    }); 
    
    useEffect(()=>{
        createPagesArray()        
    }, []);

    useEffect(()=> ModifyFragmentedList(),[pageVariables.pagesList, pageVariables.actualPage])

    function createPagesArray(){
        const totalPages = Math.ceil(pagination.totalResults / pagination.pageLimit)
        const pages = Array.from({length: totalPages}, (_, index) => index + 1)                
        setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
                pagesList: pages
            }})
    };

    function MoveForward(){
        const targetPosition = pageVariables.actualPage+1
        const nextOffset = ((pageVariables.actualPage-1)+1)*pagination.pageLimit
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset            
        }))
        setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            actualPage: targetPosition
        }}) 
    };

    function MoveByNumbers(page){
        const nextOffset = (page-1)*pagination.pageLimit

        if (page != pageVariables.actualPage) {
            setPagination((prev) => ({
                ...prev,
                offset: nextOffset
            }))
            setPageVariables((prev: PageVariables) => {
                return {
                    ...prev,
                actualPage: page
            }}) 
        }
    };

    function MoveToFirst(){
        const targetPosition = 1
        const nextOffset = (targetPosition-1)*pagination.pageLimit
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
        setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            actualPage: targetPosition
        }}) 
    };

    function MoveToLast(){
        const targetPosition = pageVariables.pagesList.at(-1)
        const nextOffset = (targetPosition-1)*pagination.pageLimit
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
        setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            actualPage: targetPosition
        }}) 
    }

    function MoveBackward(){
        const targetPosition = pageVariables.actualPage-1
        const nextOffset = ((pageVariables.actualPage-1)-1)*pagination.pageLimit        
        setPagination((prev) => ({
            ...prev,
            offset: nextOffset
        }))
        setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            actualPage: targetPosition
        }}) 
    };

    function ModifyFragmentedList(){
        const nearTheEnd = pageVariables.pagesList.length - pageVariables.actualPage;
        const list = pageVariables.pagesList.slice(pageVariables.actualPage-1, (pageVariables.actualPage+3));
        const listNearTheEnd = pageVariables.pagesList.slice(pageVariables.pagesList.length-4, (pageVariables.actualPage+3));
        console.log(pageVariables.pagesList)
        if (nearTheEnd <= 4){
            setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            fragmentedList: listNearTheEnd
            }})             
        } else {
            setPageVariables((prev: PageVariables) => {
            return {
                ...prev,
            fragmentedList: list
            }})    
        }
    }

    return(
        <div className="flex w-full gap-2 justify-center mt-6">
        <div className="grid grid-cols-8 text-neutral-400">
            {pageVariables.actualPage === 1
            ? <button type="button" className="text-gray-500">First</button>
            : <button type="button" onClick={MoveToFirst}>First</button>
            }
            {pageVariables.actualPage === 1
            ? <button type="button" className="text-gray-500">Previous</button>
            : <button type="button" onClick={MoveBackward}>Previous</button>
            }
        
            {pageVariables.fragmentedList.map((page) => (
              <button type="button" key={page} onClick={() => MoveByNumbers(page)}>{page}</button>  
            ))}
            {pageVariables.actualPage === pageVariables.pagesList.length
            ? <button type="button" className="text-gray-500">Next</button>
            : <button type="button" onClick={MoveForward}>Next</button>
            }
            {pageVariables.actualPage === pageVariables.pagesList.length
            ? <button type="button" className="text-gray-500">Last</button>
            : <button type="button" onClick={MoveToLast}>Last</button>
            }            
        </div>
        </div>
    )
}