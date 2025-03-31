# 🧩 Sentence Smash

## 📝 Kata Link  
[Sentence Smash - 8kyu | Codewars](https://www.codewars.com/kata/53dc23c68a0c93699800041d)

---

## 📄 Description

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.  
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.  
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

**Example:**
```csharp
SentenceSmash.Smash(new string[] { "Hello", "world" }) => "Hello world"
💡 My Solution (C#)

public static class SentenceSmash
{
    public static string Smash(string[] words)
    {
        return string.Join(" ", words);
    }
}
🧪 Sample Usage (for testing)

using System;

class Program
{
    static void Main()
    {
        var result = SentenceSmash.Smash(new string[] { "Codewars", "is", "fun" });
        Console.WriteLine(result); // Output: Codewars is fun
    }
}
```
🧠 What I Learned
How to join elements of a string array using string.Join

Keeping solutions clean and readable

Importance of test cases, even for simple problems

📁 Location
cpp
Copy
Edit
codewars/
└── Codewars-CSharp/
    └── 8kyu/
        └── SentenceSmash/
            ├── SentenceSmash.cs
            ├── Program.cs (optional)
            └── README.md ← You are here

---