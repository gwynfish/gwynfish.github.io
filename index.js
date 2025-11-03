  window.addEventListener('DOMContentLoaded', (event) => {
    const HASH_PASS1 = "de125c231631be840925fed94df4fbf4ee26892da040d019d1bf24d09a69405a";
    const HASH_PASS2 = "a5ad895656074bb12930374348bf903460016bcf430bf7039d7e34f0c505a7b1";

    const storedPassword = sessionStorage.getItem('auth1');
    const storedPassword2 = sessionStorage.getItem('auth2');

    const isPasswordCorrect = storedPassword && HASH_PASS1 === storedPassword;
    const isPassword2Correct = storedPassword2 && HASH_PASS2 === storedPassword2;
    
    if (!isPasswordCorrect || !isPassword2Correct) {
      alert("Access denied. Please log in.");
      window.location.href = "index.html"; 
    }
  });
