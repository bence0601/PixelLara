using PixelLara.Models;

namespace PixelLara.Services
{
    public interface IPageService
    {
        Task <List<ProductModel>> GetProductsAsync ();
        Task <List<ProductModel>> CreateOrderAsync (ProductModel model);

        Task<List<ProductModel>> DeleteProductAsync(int id);

    }
}
