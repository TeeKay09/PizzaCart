<script>
document.addEventListener('DOMContentLoaded', function() {
  // Reference the remove button, decrement button, increment button, and checkout button
  const removeButtons = document.querySelectorAll('.remove-button');
  const decrementButtons = document.querySelectorAll('.decrement-button');
  const incrementButtons = document.querySelectorAll('.increment-button');
  const checkoutButton = document.querySelector('.checkout-button');

  // Add event listeners or perform any desired actions with the buttons
  removeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      
      console.log('Remove button clicked');
    })
    });
  
  

  decrementButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      
      console.log('Decrement button clicked');
    })
    });
  

  incrementButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      
      console.log('Increment button clicked');
    })
    });
  

  checkoutButton.addEventListener('click', function() {
   
    console.log('Checkout button clicked')};
  )
  });

</script>