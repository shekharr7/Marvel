import React from "react";

interface SearchResultProps {
    item: any;
}

export const SearchResult = (props: SearchResultProps) => {
    const { title, thumbnail } = props.item;
    return (
        <>
            <h1>{title}</h1>
            <img className="comic-image" src={`${thumbnail.path}.${thumbnail.extension}`} />
        </>
    );
} ;

export default SearchResult;