import { useEffect, useState } from 'react'

const PREFIX= 'messenger-'
export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key
    //get value from local storage put it into our state
    const [value, setValue] = useState(()=> {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue)
        if(typeof initialValue === 'function'){
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
