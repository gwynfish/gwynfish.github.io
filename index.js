  window.addEventListener('DOMContentLoaded', (event) => {
    const HASH_PASS1 = "c08294bf5c5751df6e988281e051b9c5363c55dfaa037559a7b2e62996751221";
    const HASH_PASS2 = "558211ed72b2d6967037419dff6f1e7cfd002d178c8fdeeb1239760d4e4c4059";

    const storedPassword = sessionStorage.getItem('auth1');
    const storedPassword2 = sessionStorage.getItem('auth2');

    const isPasswordCorrect = storedPassword && HASH_PASS1 === storedPassword;
    const isPassword2Correct = storedPassword2 && HASH_PASS2 === storedPassword2;
    
    if (!isPasswordCorrect || !isPassword2Correct) {
      alert("Access denied. Please log in.");
      window.location.href = "index.html"; 
    }
  });
