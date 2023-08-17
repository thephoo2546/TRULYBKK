function increaseQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    const currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
}

function decreaseQuantity(elementId) {
    const quantityElement = document.getElementById(elementId);
    const currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
        quantityElement.innerText = currentQuantity - 1;
    }
}


function updateOrderList() {
    const orderListElement = document.getElementById('order-list');
    const totalPriceElement = document.getElementById('total-price');
    const discountAmountElement = document.getElementById('discount-amount');
    
    orderListElement.innerHTML = ''; 
    
    let totalAmount = 0;
    let discountAmount = 0; 
    
    const productElements = document.querySelectorAll('.product-items');
    productElements.forEach((productElement, index) => {
        const quantity = parseInt(document.getElementById(`product${index + 1}-quantity`).innerText);
        if (quantity > 0) {
            const productName = productElement.querySelector('p b').textContent;
            const productPrice = parseInt(productElement.getAttribute('data-price'));
            const totalPrice = quantity * productPrice;
            
            const orderItem = document.createElement('p');
            orderItem.textContent = `${productName} x ${quantity} = ${totalPrice} บาท`;
            orderListElement.appendChild(orderItem);
            
            totalAmount += totalPrice;
        }
    });
    
    if (totalAmount > 1000) {
        discountAmount = totalAmount * 0.1; 
        totalAmount -= discountAmount; 
    }
    
    totalPriceElement.textContent = Math.floor(totalAmount); 
    discountAmountElement.textContent = Math.floor(discountAmount); 
}

function submitOrder(event) { 
    const recipientName = document.getElementById('recipient-name').value;
    const messageText = document.getElementById('message-text').value;
    
    if (recipientName.trim() === '' || messageText.trim() === '') {
        
        const warningMessage = 'กรุณากรอกข้อมูลให้ครบถ้วน';
        alert(warningMessage);

        event.preventDefault(); 
        return;
    }

    updateOrderList();
    alert('สั่งซื้อสำเร็จ ขอบคุณครับ')

    location.reload();

    window.scrollTo(0, 0);
}
