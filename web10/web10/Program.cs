using System;
using System.Linq;

namespace web10
{
    class Program
    {
        enum Months
        {
            January = 1,
            February,
            March,
            April,
            May,
            June,
            July,
            August,
            September,
            October,
            November,
            December
        }

        enum ModifiedMonths
        {
            March = 3,
            April,
            May,
            June,
            July,
            August,
            September,
            October,
            November
        }
        static void PrintEnum<T>() where T : Enum
        {
            var targetType = typeof(T);
            foreach (var (name, number) in Enum.GetNames(targetType).Select(name => (name, (int)Enum.Parse(targetType, name))))
            {
                Console.WriteLine($"{name} : {number}");
            }
        }
        static void Main(string[] args)
        {
            Console.WriteLine($"\t{nameof(Months)}");
            PrintEnum<Months>();
            Console.WriteLine($"\n\t{nameof(ModifiedMonths)}");
            PrintEnum<ModifiedMonths>();
        }
    }
}
