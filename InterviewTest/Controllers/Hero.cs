using InterviewTest.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace InterviewTest.Controllers
{
    
    public class Hero : IHero
    {
        public string name { get; set; }
        public string power { get; set; }
        public List<KeyValuePair<string, int>> stats { get; set; }

        
        public void Evolve(int statIncrease = 5)
        {
            List<KeyValuePair<string, int>> temp = new List<KeyValuePair<string, int>>();

            foreach (var stat in stats)
            {
                // Increment each stat by a multiple of half the original stat value
                int originalStatVal = stat.Value;
                int incrementAmount = originalStatVal / 2 * statIncrease;

                temp.Add(new KeyValuePair<string, int>(stat.Key, originalStatVal + incrementAmount));
            }
            stats = temp;
        }
    }

    public class actionFunc
    {
        public string heroName { get; set; }
        public string action { get; set; }
    }
}
