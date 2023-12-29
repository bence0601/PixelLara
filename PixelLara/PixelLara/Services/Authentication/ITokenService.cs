using Microsoft.AspNetCore.Identity;

namespace PixelLara.Services.Authentication
{
    public interface ITokenService
    {
        public string CreateToken(IdentityUser user);
    }
}
