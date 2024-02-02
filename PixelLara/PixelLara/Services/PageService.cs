using Microsoft.EntityFrameworkCore;
using PixelLara.Data;
using PixelLara.Models;

namespace PixelLara.Services
{
    public class PageService : IPageService
    {
        private readonly ProductDataContext _productDataContext;

        public PageService(ProductDataContext productDataContext)
        {
            _productDataContext = productDataContext;
        }
        public async Task<List<ProductModel>> CreateOrderAsync(ProductModel model)
        {
            _productDataContext.Orders.Add(model);
            await _productDataContext.SaveChangesAsync();
            return await _productDataContext.Orders.ToListAsync();
        }

        public async Task<List<ProductModel>> GetProductsAsync()
        {
            return await _productDataContext.Orders.ToListAsync();
        }

        public async Task<List<ProductModel>> DeleteProductAsync(int Id)
        {
            var productToDelete = await _productDataContext.Orders.FirstOrDefaultAsync(p => p.Id == Id);

            if (productToDelete != null)
            {
                _productDataContext.Orders.Remove(productToDelete);
                await _productDataContext.SaveChangesAsync();
            }

            return await _productDataContext.Orders.ToListAsync();
        }
    }
}
