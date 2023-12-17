using PixelLara.Models.Enums;
using System;

namespace PixelLara.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string ShortDescription { get; set; } = string.Empty;
        public string LongDescription { get; set; } = string.Empty;
        public DateTime DeadLine { get; set; }
        public ContactEnum Contact { get; set; }

        public DateTime ContractTimeSet { get; set; } = DateTime.Now;
    }
}