




function jeff(s, k) {
    let left = 0;
    let curr = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxVowels = 0;


    // Iterate over the string with the 'right' pointer
    for (let right = 0; right < s.length; right++) {
        // Add the current 'right' character's vowel status
        curr += vowels.has(s[right]) ? 1 : 0;

        // If window size exceeds k, remove the left character's vowel status
        if (right - left + 1 > k) {
            curr -= vowels.has(s[left]) ? 1 : 0;
            left++; // Move the left pointer to maintain the window size of k
        }

        // Update the maximum number of vowels in any window of size k
        if (right - left + 1 === k) {
            maxVowels = Math.max(maxVowels, curr);
        }
    }

    return maxVowels;
}

console.log(jeff('abciiidef', 3))