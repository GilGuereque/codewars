using System;

class Program
{
    static void Main()
    {
        var result = SentenceSmash.Smash(new string[] { "Hello", "world" });
        Console.WriteLine(result); // Output: Hello world
    }
}
