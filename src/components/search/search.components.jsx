import { useState } from "react";

export const SearchInput = ({onSearch}) => {
    const [input, setInput] = useState('')
    const onDefine = (evt) => {
        setInput(evt.target.value)
    }
    const submitHandler = (evt) => {
        evt.preventDefault();

        onSearch(input)
    }
    return (
        <form onSubmit={submitHandler}>
            <input className="search__input" type="text" placeholder="Search a Country...." value={input} onChange={onDefine} />
        </form>
    )
}