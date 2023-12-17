using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using PixelLara.Models;

namespace PixelLara.Data
{
    public class ProductDataContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public ProductDataContext(DbContextOptions<ProductDataContext> options, IConfiguration configuration) : base(options)
        {
            _configuration = configuration;
        }

        public DbSet<ProductModel> Orders { get; set; }

    }
}
