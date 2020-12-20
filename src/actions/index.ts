export const fetchData = (name: any) => {
    return(dispatch: any) => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=100&apikey=d2c4bdd0913f5771bcc2537ade6eb7a4&hash=4fabc0d9a913005b45d5d4e662bb364d`)
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(loadData(result));
                },
                (error) => {
                    dispatch(setError(error));
                }
            )
    }
}

export const loadData = (data: any) => {
    return({
        type: "LOAD_DATA",
        data: data
    })
}

export const setError = (error: any) => {
    return({
        type: "FAILED",
        error: error
    })
}