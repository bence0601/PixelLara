using Microsoft.EntityFrameworkCore;
using PixelLara.Data;
using PixelLara.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IPageService, PageService>(); 



builder.Services.AddDbContext<ProductDataContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("ProductDataContext"));
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();