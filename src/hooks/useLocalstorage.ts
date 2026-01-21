const useLocalStorage = () => {
    const setItem = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const getItem = (key: string) => {
        try {
            return JSON.parse(localStorage.getItem(key) ?? "");
        } catch {
            return null;
        }
    };

    return { setItem, getItem };
};

export default useLocalStorage;
