import React, { useState } from 'react';

const PaymentDetails = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentConfirmed(true);
  };
  const styles = {
    backgroundImage:
      "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    
    
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    fontFamily: 'Arial, sans-serif',
    zIndex: '-1',
  };

  return (
    <div
      className="payment-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
       <div style={styles}></div>
      {paymentConfirmed ? (
        <div>
          <h2>Payment Confirmed!</h2>
          <p>Thank you for your payment.</p>
        </div>
      ) : (
        <>
          <h2>Payment Details</h2>
          <form
            className="payment-form"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onSubmit={handlePayment}
          >
            {/* Phone Number */}
            <div style={{ marginBottom: '10px' }} className="form-group">
              <label htmlFor="phoneNumber">Phone Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" id="phoneNumber" name="phoneNumber" style={{ padding: '5px' }} />
            </div>

            {/* UPI ID */}
            <div style={{ marginBottom: '10px' }} className="form-group">
              <label htmlFor="upiId">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;UPI ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" id="upiId" name="upiId" style={{ padding: '5px' }} />
            </div>

            {/* Name */}
            <div style={{ marginBottom: '10px' }} className="form-group">
              <label htmlFor="name">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="text" id="name" name="name" style={{ padding: '5px' }} />
            </div>

            {/* Pay button */}
            <button type="submit" className="pay-button" style={{ marginTop: '10px' }}>
              Pay
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PaymentDetails;
