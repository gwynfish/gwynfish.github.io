  window.addEventListener('DOMContentLoaded', (event) => {
    const encodedPasswords = ["MjM0MTQyMzQ=", "R01TMjAyNQ==", "bGltYnVzY29tcGFueQ==", "bWFpbnRlbmFuY2VmcmlkYXk="];
    const encodedPasswords2 = ["cGll", "Y3Vt"];
    const HASH_PASS1 = "c15228d5f64658de951afa8dfe6c227fb4c9bbe8caf9f35b10153ddb493ab516";
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
