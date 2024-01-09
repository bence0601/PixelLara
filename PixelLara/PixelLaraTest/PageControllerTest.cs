using Moq;
using PixelLara.Controllers;
using PixelLara.Models;
using PixelLara.Models.Enums;
using PixelLara.Services;
using Microsoft.AspNetCore.Mvc;

namespace PixelLaraTest
{
    public class ProductControllerTest
    {
        [Test]
        public async Task AddProduct_ReturnsOkResultWithData()
        {
            // Arrange
            var pageServiceMock = new Mock<IPageService>();
            var controller = new ProductController(pageServiceMock.Object);

            var newProduct = new ProductModel
            {
                Id = 3,
                ShortDescription = "New Product Short Description",
                LongDescription = "New Product Long Description",
                DeadLine = DateTime.Now.AddDays(10),
                Contact = ContactEnum.Email,
                ContractTimeSet = DateTime.Now.AddDays(20)
            };

            var expectedProducts = new List<ProductModel>
            {
                new ProductModel
                {
                    Id = 1,
                    ShortDescription = "Sample Short Description 1",
                    LongDescription = "Sample Long Description 1",
                    DeadLine = DateTime.Now.AddDays(7),
                    Contact = ContactEnum.Email,
                    ContractTimeSet = DateTime.Now.AddDays(30)
                },
                new ProductModel
                {
                    Id = 2,
                    ShortDescription = "Sample Short Description 2",
                    LongDescription = "Sample Long Description 2",
                    DeadLine = DateTime.Now.AddDays(14),
                    Contact = ContactEnum.InPerson,
                    ContractTimeSet = DateTime.Now.AddDays(15)
                },
            };

            pageServiceMock.Setup(x => x.CreateOrderAsync(newProduct)).ReturnsAsync(expectedProducts);

            // Act
            var result = await controller.AddProduct(newProduct);

            // Assert
            Assert.That(result.Result, Is.TypeOf<OkObjectResult>());
            var okResult = (OkObjectResult)result.Result;
            Assert.That(okResult.Value, Is.InstanceOf<List<ProductModel>>());
            var actualProducts = (List<ProductModel>)okResult.Value;
            Assert.AreEqual(expectedProducts, actualProducts);

        }
    }
}
