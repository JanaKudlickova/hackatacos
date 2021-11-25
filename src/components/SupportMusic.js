const SupportMusic = () => {
    return (
        <div>
            <h2>Select an amount</h2>
            <div className="amount-section">
                <button className="amount">0.10 €</button>
                <button className="amount">0.50 €</button>
                <button className="amount">1 €</button>
                <button className="amount" >Other</button>
            </div>
            <div>
                <img className="icon" src="https://cdn.iconscout.com/icon/free/png-64/credit-card-1531949-1298262.png" alt="credit-card"></img>
                <img className="icon" src="https://cdn.iconscout.com/icon/free/png-64/paypal-32-498436.png" alt="paypal"></img>
            </div>
            <button className="payment">Pay</button>
        </div>
    )
}

export default SupportMusic;
