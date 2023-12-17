using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PixelLara.Models;

namespace PixelLara.Data
{
    public class ProductDataContext : DbContext
    {
        public ProductDataContext(DbContextOptions<ProductDataContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost\\SQLExpress;Database=PixelLaraDataBase;Trusted_Connection=True;TrustServerCertificate=true");
        }

        public DbSet<ProductModel> Orders { get; set; }
    }
}

