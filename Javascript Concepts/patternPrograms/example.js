function pattern7LeetCodeString(n) {
    let output = "";

    for (let i = 1; i <= n; i++) {
        let line = "";

        // Add spaces
        for (let j = 1; j <= n - i; j++) {
            line += "- ";
        }

        // Add stars
        for (let z = 1; z <= 2 * i - 1; z++) {
            line += "* ";
        }

        // Add spaces
        for (let k = 1; k <= n - i; k++) {
            line += "- ";
        }

        // Add line to output with newline
        output += line.trim();

        // Add newline if not last line
        if (i !== n) {
            output += "\n";
        }
    }

    return output;
}

// Test
console.log(pattern7LeetCodeString(5));