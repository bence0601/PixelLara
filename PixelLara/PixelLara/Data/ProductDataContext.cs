using Microsoft.EntityFrameworkCore;
using PixelLara.Models;

namespace PixelLara.Data
{
    public class ProductDataContext : DbContext
    {
        public ProductDataContext(DbContextOptions<ProductDataContext> options) : base(options)
        {
        }

        public DbSet<ProductModel> Orders { get; set; }
    }
}


