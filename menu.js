import React from 'react';
import ReactDOM from 'react-dom';
import './ab.css';

const images = [
    { id: 1, name: 'Soup', price: '$8', description: 'Delicious soup made with fresh ingredients.', url: 'soup.png' },
    { id: 2, name: 'Fish & Chips', price: '$5', description: 'Crispy fish fillets with golden fries.', url: 'fish.jpg' },
    { id: 3, name: 'Desserts', price: '$7', description: 'A variety of sweet treats to satisfy your cravings.', url: 'desserts.jpg' },
    { id: 4, name: 'Beverages', price: '$3', description: 'Refreshing drinks to quench your thirst.', url: 'beverage.jpg' },
    { id: 5, name: 'Burger', price: '$4', description: 'Juicy burger with all the fixings.', url: 'burger.jpg' },
    { id: 6, name: 'Salad', price: '$5.5', description: 'Fresh and healthy salad options.', url: 'salad.jpg' },
    { id: 7, name: 'Egg Parmesan', price: '$10', description: 'Savory egg dish with Parmesan cheese.', url: 'egg.jpg' },
    { id: 8, name: 'Spring Rolls', price: '$8', description: 'Delightful spring rolls with dipping sauce.', url: 'rolls.jpg' },
    { id: 9, name: 'Sandwich', price: '$3.5', description: 'Classic and satisfying sandwich choices.', url: 'sandwich.jpg' },
];

function submitOrder(event) {
    event.preventDefault();

    const formElements = event.target.elements;
    const foodId = parseInt(formElements['foodId'].value);
    const quantity = parseInt(formElements['quantity'].value);

    // Send a POST request to the server
    fetch('/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ foodId, quantity }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            // Optionally, you can update the state or display a success message
        })
        .catch(error => {
            console.error('Error:', error);
            // Optionally, you can update the state or display an error message
        });
}

class ImageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItems: [],
            totalOrderPrice: 0,
        };

        this.showOrderForm = this.showOrderForm.bind(this);
    }

    submitOrderAPI({ foodId, quantity }) {
        fetch(`http://localhost:3000/api/order`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ foodId, quantity }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
                // Optionally, you can update the state or display a success message
            })
            .catch((error) => {
                console.error('Error:', error);
                // Optionally, you can update the state or display an error message
            });
    }

    showOrderForm() {
        const orderForm = document.querySelector('.order-form');
        orderForm.style.display = 'flex';
    }

    render() {
        return (
            <div>
                <div className="image-row">
                    {images.map((image) => (
                        <div key={image.id} className="image-item">
                            <img
                                src={image.url}
                                alt={`Image ${image.id}`}
                                className="image"
                            />
                            <div className="food-item">{`#${image.id} ${image.name}`}</div>
                            <div className="price">{`Price: ${image.price}`}</div>
                            <div className="description">{`${image.description}`}</div>
                        </div>
                    ))}
                </div>

                <div id="totalOrderAmount">
                    <p style={{ fontSize: '50px' }}>Your total order amount is: ${this.state.totalOrderPrice}</p>
                </div>

                <form onSubmit={submitOrder} className="order-form">
                    <label style={{ fontSize: '50px' }} htmlFor="foodId">Food ID:</label>
                    <input type="number" id="foodId" name="foodId" min="1" required />
                    <label style={{ fontSize: '50px' }} htmlFor="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="0" required />
                    <button type="submit">Submit Order</button>
                </form>

                <button onClick={this.showOrderForm}>ORDER</button>
            </div>
        );
    }
}

ReactDOM.render(<ImageGallery />, document.getElementById('root'));
