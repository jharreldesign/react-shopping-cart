import { inventoryData } from "../../data/data";

const Shop = () => {
    console.log('Inventory Data: ', inventoryData)
    return (
        <main>
            <h1>Shop</h1>
            <ul>
                {inventoryData.map((item) => (
                    <li key={item._id}>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
};

export default Shop;