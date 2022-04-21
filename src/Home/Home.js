import React, { useEffect } from 'react'
import { GetUser } from '../App'
// import Product from '../Products/Product'
// import { useStateValue } from '../StateManager/StateProvider'
import './Home.css'

function Home() {
    // const [state, dispatch] = useStateValue()
    let user;

    // useEffect( async () => {
    //     user = await GetUser(state);
    //     await dispatch({
    //         type: 'SET_USER_INFO',
    //         user: user
    //     });
    // }, [] )
    
    return (
        <div className="home">

            <div className="home__container">
                <div className="home__describe">
                    Rent Anything You Need Today
                </div>
                <div className="home__row">
                    {/* <Product 
                    id="123"
                    title="The lean startup" 
                    price={29.99}
                    image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL.__AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product 
                    id="234"
                    title="Beat Headphones" 
                    price={239.0}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML992?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1590088708000"
                    rating={4}
                    /> */}
                </div>

                <div className="home__row">
                    {/* <Product 
                        id="345"
                        title="MICROSOFT 13.5 Surface Laptop 3 - Intel® Core™ i5, 256 GB SSD, Blue" 
                        price={846.0}
                        image="https://brain-images-ssl.cdn.dixons.com/4/2/10199624/u_10199624.jpg"
                        rating={4}
                        />
                        <Product 
                        id="456"
                        title="Backpack" 
                        price={39.99}
                        image="https://dmp0bw3rmgwlj.cloudfront.net/catalog/product/cache/2d30c628ca84d1fb5bde9dd708affbe5/b/a/backpack_navy_ad22_1_1.jpg"
                        rating={3}
                        />
                        <Product 
                        id="567"
                        title="Electric Toothbrush for Adults with 5 Modes, Smart Timer, 30 Days Battery Life" 
                        price={18.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61j6mwMqzBL._AC_SL1500_.jpg"
                        rating={4}
                        /> */}
                </div>
            </div>
        </div>
    )
}

export default Home