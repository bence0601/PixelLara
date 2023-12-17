using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PixelLara.Data;
using PixelLara.Models;
using PixelLara.Services;

namespace PixelLara.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        public IPageService _pageService;

        public ProductController(IPageService pageService)
        {
            _pageService = pageService;
        }

        [HttpGet("/getAllProducts"), Authorize]
        public async Task<ActionResult<List<ProductModel>>> GetProducts()
        {
            var result = await _pageService.GetProductsAsync();
            return Ok(result);
        }

        [HttpPost("/AddProduct")]
        public async Task<ActionResult<List<ProductModel>>> AddProduct(ProductModel product)
        {
            var result = await _pageService.CreateOrderAsync(product);
            return Ok(result);
        }
    }
}
