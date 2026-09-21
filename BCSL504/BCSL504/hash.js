const crypto = require("crypto");

const data = "Mahalakshmi";

const hash = crypto
    .createHash("sha256")
    .update(data)
    .digest("hex");

console.log("Original Data:", data);
console.log("SHA-256 Hash:", hash);