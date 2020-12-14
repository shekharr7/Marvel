import '../stylesheet/custom.scss';
import { useEffect, useState } from "react";

function SearchView() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch("http://api.geonames.org/postalCodeSearchJSON?postalcode=9011&maxRows=10&username=shekharr")
            .then((res: any) => res.json())
            .then(
                (result: any) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                /*(error) => {
                    setIsLoaded(true);
                    setError(error);
                }*/
            )
    }, [])


   /* if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {*/
        return (


            <ul>
                {items && items.map((item, index) => (
                    <li key={index}>
                        {item.postalCode}
                        {item.placeName}
                        {item.countryCode}
                        {item.lat}
                        {item.lng}
                        {item.adminCode1}
                        {item.adminName1}
                        {item.adminCode2}
                        {item.adminName2}
                        {item.adminCode3}
                        {item.adminName3}
                    </li>
                ))}
            </ul>
        );
    /*}*/
}

export default SearchView;
