import React,{useState} from 'react'
import './SearchForm.css'
import SearchIcon from "@material-ui/icons/Search";



const SearchForm = ({setHashtag}) => {

    const [input, setInput]= useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setHashtag(input)  
    }

    return (
            <form onSubmit= {handleSubmit}>  
                <div className="searchForm__input">
                    <SearchIcon className="searchForm__searchIcon" />
                    <input 
                        value={input} 
                        type="search" 
                        placeholder="Search tweets by #tag" 
                        aria-label="Search" 
                        onChange={ e => setInput(e.target.value)}/>
                </div>      
                <button hidden disabled={!input}  type="submit"></button>
            </form>
    )
}

export default SearchForm
