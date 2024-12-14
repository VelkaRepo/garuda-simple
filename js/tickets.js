document.getElementById('buy-standard').addEventListener('click', function() {
    purchaseTicket('standard');
});

document.getElementById('buy-vip').addEventListener('click', function() {
    purchaseTicket('vip');
});

function purchaseTicket(type) {
    let loadingElement = document.getElementById(`loading-${type}`);
    let transactionElement = document.getElementById(`transaction-${type}`);
    
    // Show loading spinner
    loadingElement.style.display = 'block';
    
    setTimeout(() => {
        // Simulate blockchain transaction hash creation
        let transactionHash = '0x' + Math.floor(Math.random() * 1e16).toString(16);
        
        // Hide loading spinner
        loadingElement.style.display = 'none';
        
        // Display transaction success message with hash
        transactionElement.innerHTML = `Transaction Successful! Ticket ID: <span class="success">${transactionHash}</span>`;
    }, 2000); // Simulate transaction delay
}
