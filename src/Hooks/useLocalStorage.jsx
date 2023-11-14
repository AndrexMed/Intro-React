import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setItem(parsedItem)
                }

                setLoading(false)
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000)
    }, [itemName]);

    const saveItem = (newItem) => {
        setItem(newItem);
        localStorage.setItem(itemName, JSON.stringify(newItem))
    }

    console.log(item)

    return { item, saveItem, loading, error };
}

export { useLocalStorage }

// const defaultTodos = [
//   { text: "Ver Netflix", completed: true },
//   { text: "Ver YouTube", completed: false },
//   { text: "Ver Google", completed: true },
//   { text: "Dormir", completed: false }
// ]